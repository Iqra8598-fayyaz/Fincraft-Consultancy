import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-fade-in-up">
            About Fincraft Consulting
          </h1>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Your trusted partner in tax planning and financial success
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 animate-fade-in">
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Fincraft Consulting is a team of experienced tax professionals dedicated to helping individuals and businesses navigate the complexities of tax law. Our mission is to provide clear, reliable, and professional tax advice tailored to your unique needs.
            </p>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              With years of experience in the industry, we pride ourselves on our integrity, expertise, and commitment to client success. Whether you need help with tax planning, compliance, or resolving tax issues, we are here to support you every step of the way.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-12 animate-fade-in animation-delay-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Integrity</h3>
                <p className="text-gray-600 text-center">We operate with the highest ethical standards and transparency in all our dealings.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Expertise</h3>
                <p className="text-gray-600 text-center">Our team brings years of experience and specialized knowledge to every client.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Client Success</h3>
                <p className="text-gray-600 text-center">We measure our success by the financial growth and peace of mind of our clients.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="animate-fade-in animation-delay-400">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Raja Ali Haider</h3>
                <p className="text-gray-600 text-center mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-center">With over 20 years of experience in tax consulting, Ali leads our team with expertise and vision.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Iqra Ali</h3>
                <p className="text-gray-600 text-center mb-2">Senior Tax Consultant</p>
                <p className="text-gray-600 text-center">Iqra specializes in business tax strategies and has helped hundreds of companies optimize their tax positions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 animate-fade-in">Ready to work with our expert team?</h2>
          <p className="text-xl text-blue-100 mb-8 animate-fade-in animation-delay-200">
            Let us help you navigate your tax journey with confidence.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in animation-delay-400"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}