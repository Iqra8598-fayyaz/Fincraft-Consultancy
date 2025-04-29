import React from 'react';

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">Our Services</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Personal Tax Planning</h2>
          <p>Optimize your personal taxes and ensure compliance with the latest regulations. We help you maximize deductions and minimize liabilities.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Business Tax Solutions</h2>
          <p>Strategic tax planning and consulting for small businesses and corporations. We help you stay compliant and plan for growth.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Audit & Compliance</h2>
          <p>Expert support for audits, tax disputes, and regulatory compliance. We represent you and protect your interests.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Tax Resolution</h2>
          <p>Resolve tax issues with confidence. We negotiate with tax authorities and help you find the best solutions for your situation.</p>
        </div>
      </div>
    </main>
  );
}