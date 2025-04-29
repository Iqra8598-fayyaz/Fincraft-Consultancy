import React from 'react';

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">Blog</h1>
      <div className="space-y-8">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">5 Tax Tips for Small Businesses</h2>
          <p className="text-gray-500 text-sm mb-2">April 2024</p>
          <p>
            Discover essential tax tips to help your small business save money and stay compliant. From record-keeping to deductions, we cover the basics every business owner should know.
          </p>
        </div>
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">How to Prepare for a Tax Audit</h2>
          <p className="text-gray-500 text-sm mb-2">March 2024</p>
          <p>
            Audits can be stressful, but with the right preparation, you can navigate them smoothly. Learn what documents to gather and how to respond to audit requests.
          </p>
        </div>
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Understanding Tax Deductions</h2>
          <p className="text-gray-500 text-sm mb-2">February 2024</p>
          <p>
            Maximize your tax savings by understanding which deductions you qualify for. We break down common deductions for individuals and businesses.
          </p>
        </div>
      </div>
    </main>
  );
}