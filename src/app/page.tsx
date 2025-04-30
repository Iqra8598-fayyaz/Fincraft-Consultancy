import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in-up">
            Fincraft Consulting
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-up animation-delay-200">
            Trusted tax advice for individuals &amp; businesses. Maximize your returns, stay compliant, and plan for a secure financial future with our expert consultants.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-10 animate-fade-in-up animation-delay-400">
            <Link 
              href="/services" 
              className="group bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Our Services
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              href="/contact" 
              className="group bg-white border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Contact Us
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Services Section with Hover Effects */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-16 animate-fade-in">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Personal Tax Planning</h3>
              <p className="text-gray-600">Optimize your personal taxes and ensure compliance with the latest regulations.</p>
            </div>
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Business Tax Solutions</h3>
              <p className="text-gray-600">Strategic tax planning and consulting for small businesses and corporations.</p>
            </div>
            <div className="group bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Audit & Compliance</h3>
              <p className="text-gray-600">Expert support for audits, tax disputes, and regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section with Gradient Background */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative">
            <svg className="absolute -top-8 -left-8 w-16 h-16 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 animate-fade-in">
              &#34;Fincraft Consulting made my tax season stress-free and helped me save more than I expected. Their expertise and attention to detail are unmatched!&#34;
            </blockquote>
            <div className="text-blue-700 font-bold text-lg animate-fade-in animation-delay-200">— Sarah Johnson, Small Business Owner</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">Ready to Optimize Your Tax Strategy?</h2>
          <p className="text-xl text-blue-100 mb-12 animate-fade-in animation-delay-200">
            Let our experts help you navigate the complexities of tax planning and compliance.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-fade-in animation-delay-400"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  );
}
