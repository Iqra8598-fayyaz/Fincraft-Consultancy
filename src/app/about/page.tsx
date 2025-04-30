import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="About Fincraft Consulting"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
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
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/images/office-interior.jpg"
                alt="Fincraft Consulting office"
                fill
                className="object-cover"
              />
            </div>
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
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/integrity-value.jpg"
                    alt="Integrity"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Integrity</h3>
                <p className="text-gray-600 text-center">We operate with the highest ethical standards and transparency in all our dealings.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/expertise-value.jpg"
                    alt="Expertise"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Expertise</h3>
                <p className="text-gray-600 text-center">Our team brings years of experience and specialized knowledge to every client.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/client-success-value.jpg"
                    alt="Client Success"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2 text-center">Client Success</h3>
                <p className="text-gray-600 text-center">We measure our success by the financial growth and peace of mind of our clients.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-blue-900 mb-6">Our Team</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet our team of experienced tax professionals dedicated to helping you achieve your financial goals.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Team Member 1 */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h3 className="text-2xl font-bold">Raja Ali Haider</h3>
                      <p className="text-blue-100">Founder & CEO</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">
                      With over 15 years of experience in tax consulting, Raja leads our team with expertise in international tax planning and business strategy.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <h3 className="text-2xl font-bold">Iqra Ali</h3>
                      <p className="text-blue-100">Tax Consultant</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6">
                      Specializing in personal tax planning and compliance, Iqra brings a wealth of knowledge and attention to detail to our team.
                    </p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 bg-blue-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/about-cta-background.jpg"
            alt="CTA background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
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