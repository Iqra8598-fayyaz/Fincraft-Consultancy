import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100">
      <section className="w-full text-center py-24 px-4 bg-blue-900 bg-opacity-80">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Fincraft Consulting
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Trusted tax advice for individuals & businesses. Maximize your returns, stay compliant, and plan for a secure financial future with our expert consultants.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <a href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition transform hover:scale-105">Our Services</a>
          <a href="/contact" className="bg-white border border-blue-700 text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-50 transition transform hover:scale-105">Contact Us</a>
        </div>
      </section>
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-[-4rem] z-20 relative px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Personal Tax Planning</h2>
          <p className="text-gray-600">Optimize your personal taxes and ensure compliance with the latest regulations.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Business Tax Solutions</h2>
          <p className="text-gray-600">Strategic tax planning and consulting for small businesses and corporations.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Audit & Compliance</h2>
          <p className="text-gray-600">Expert support for audits, tax disputes, and regulatory compliance.</p>
        </div>
      </section>
      <section className="w-full max-w-3xl mx-auto mt-16 px-4 text-center">
        <blockquote className="italic text-lg text-gray-700 mb-4">
          "Fincraft Consulting made my tax season stress-free and helped me save more than I expected. Highly recommended!"
        </blockquote>
        <div className="text-blue-700 font-bold">— Satisfied Client</div>
      </section>
    </main>
  );
}
