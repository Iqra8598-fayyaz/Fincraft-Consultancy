import React from 'react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Tax Tips for Small Businesses',
    date: 'April 2024',
    excerpt: 'Discover essential tax tips to help your small business save money and stay compliant. From record-keeping to deductions, we cover the basics every business owner should know.',
    category: 'Business Tax',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'How to Prepare for a Tax Audit',
    date: 'March 2024',
    excerpt: 'Audits can be stressful, but with the right preparation, you can navigate them smoothly. Learn what documents to gather and how to respond to audit requests.',
    category: 'Tax Compliance',
    readTime: '7 min read'
  },
  {
    id: '3',
    title: 'Understanding Tax Deductions',
    date: 'February 2024',
    excerpt: 'Maximize your tax savings by understanding which deductions you qualify for. We break down common deductions for individuals and businesses.',
    category: 'Tax Planning',
    readTime: '6 min read'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-up">
            Tax Insights & Updates
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Stay informed with our latest tax tips, strategies, and industry updates
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 animate-fade-in">
            Stay Updated with Tax Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
            Subscribe to our newsletter for the latest tax tips and updates
          </p>
          <form className="max-w-md mx-auto animate-fade-in animation-delay-400">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">
            Need Expert Tax Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in animation-delay-200">
            Our team of tax professionals is ready to help you navigate your tax journey.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in animation-delay-400"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}