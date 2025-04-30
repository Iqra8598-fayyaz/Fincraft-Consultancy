"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tax Tips for Small Businesses',
    date: 'April 2024',
    excerpt: 'Discover essential tax tips to help your small business save money and stay compliant. From record-keeping to deductions, we cover the basics every business owner should know.',
    category: 'Business Tax',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '2',
    title: 'How to Prepare for a Tax Audit',
    date: 'March 2024',
    excerpt: 'Audits can be stressful, but with the right preparation, you can navigate them smoothly. Learn what documents to gather and how to respond to audit requests.',
    category: 'Tax Compliance',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: '3',
    title: 'Understanding Tax Deductions',
    date: 'February 2024',
    excerpt: 'Maximize your tax savings by understanding which deductions you qualify for. We break down common deductions for individuals and businesses.',
    category: 'Tax Planning',
    readTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Tax Insights"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50 opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up">
            Tax Insights & Updates
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Stay informed with our latest tax planning tips and industry updates
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          {/* Featured Article */}
          <div className="mb-20">
            <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="Featured Tax Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-2">Understanding Tax Deductions for Small Businesses</h2>
                  <p className="text-blue-100 text-lg">Learn how to maximize your business tax savings</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-gray-500 mb-4">
                  <span className="text-sm">April 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">8 min read</span>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Discover essential tax deductions that can help your small business save money and stay compliant with tax regulations. Our experts break down complex tax concepts into actionable insights.
                </p>
                <Link 
                  href="/blog/tax-deductions" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{post.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-500 mb-4">
                    <span className="text-sm">{post.date}</span>
                    <span className="mx-2">•</span>
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
                  >
                    Read More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
            alt="Newsletter Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-blue-800/50 opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">Subscribe to our newsletter for the latest tax insights and updates</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}