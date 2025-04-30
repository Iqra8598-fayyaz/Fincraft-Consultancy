"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  downloadUrl: string;
  icon: string;
}

const defaultTemplates: Template[] = [
  {
    id: '1',
    title: 'Business Tax Planning Template',
    description: 'A comprehensive template for planning your business taxes, including expense tracking and deduction calculations.',
    category: 'Business',
    downloadUrl: '/templates/business-tax-planning.pdf',
    icon: '📊'
  },
  {
    id: '2',
    title: 'Personal Tax Organizer',
    description: 'Keep track of your personal tax documents and important deadlines with this easy-to-use organizer.',
    category: 'Personal',
    downloadUrl: '/templates/personal-tax-organizer.pdf',
    icon: '📋'
  },
  {
    id: '3',
    title: 'Expense Tracker',
    description: 'Monitor your business expenses throughout the year with this detailed tracking template.',
    category: 'Business',
    downloadUrl: '/templates/expense-tracker.pdf',
    icon: '💰'
  },
  {
    id: '4',
    title: 'Tax Deduction Checklist',
    description: 'Ensure you don\'t miss any potential deductions with this comprehensive checklist.',
    category: 'Personal',
    downloadUrl: '/templates/tax-deduction-checklist.pdf',
    icon: '✅'
  }
];

export default function TemplatesPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [templates, setTemplates] = useState<Template[]>(defaultTemplates);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [showUploadForm, setShowUploadForm] = useState(false);

  useEffect(() => {
    // Fetch uploaded templates
    const fetchTemplates = async () => {
      try {
        const response = await fetch('/api/templates');
        const uploadedTemplates = await response.json();
        setTemplates([...defaultTemplates, ...uploadedTemplates]);
      } catch (error) {
        console.error('Error fetching templates:', error);
      }
    };

    fetchTemplates();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.template-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, [templates]);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);
    setUploadError(null);

    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;

    if (!file) {
      setUploadError('Please select a file');
      setIsUploading(false);
      return;
    }

    if (!file.name.endsWith('.xlsx')) {
      setUploadError('Only Excel (.xlsx) files are allowed');
      setIsUploading(false);
      return;
    }

    try {
      const response = await fetch('/api/templates', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const newTemplate = await response.json();
      setTemplates(prev => [...prev, newTemplate]);
      setShowUploadForm(false);
      e.currentTarget.reset();
    } catch (error) {
      setUploadError('Failed to upload template. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (template: Template) => {
    if (template.category === 'Uploaded') {
      try {
        const filename = template.downloadUrl.split('/').pop();
        const response = await fetch('/api/templates', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filename }),
        });

        if (response.ok) {
          setTemplates(prev => prev.filter(t => t.id !== template.id));
        }
      } catch (error) {
        console.error('Error deleting template:', error);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Free Tax Templates
          </h1>
          <p className="text-lg text-blue-100 mb-6">
            Download our professional templates to help with your tax planning and organization
          </p>
          <div className="flex justify-center gap-3">
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Business Templates
            </span>
            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Personal Templates
            </span>
            <button
              onClick={() => setShowUploadForm(true)}
              className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors"
            >
              Upload Template
            </button>
          </div>
        </div>
      </section>

      {/* Upload Form Modal */}
      {showUploadForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold mb-4">Upload Template</h2>
            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Template Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Excel File (.xlsx)
                </label>
                <input
                  type="file"
                  name="file"
                  accept=".xlsx"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {uploadError && (
                <p className="text-red-500 text-sm">{uploadError}</p>
              )}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowUploadForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8" ref={cardsRef}>
            {templates.map((template, index) => (
              <div 
                key={template.id}
                className={`template-card opacity-0 translate-y-8 group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-500 group-hover:w-2 transition-all duration-300"></div>
                <div className="p-6 pl-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-3xl text-white group-hover:rotate-12 transition-transform duration-300">
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {template.title}
                        </h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-blue-800">
                          {template.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {template.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <a
                          href={template.downloadUrl}
                          download
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                        >
                          Download
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </a>
                        {template.category === 'Uploaded' && (
                          <button
                            onClick={() => handleDelete(template)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-lg text-blue-100 mb-6">Our team of tax experts is ready to assist you with your tax planning needs</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}