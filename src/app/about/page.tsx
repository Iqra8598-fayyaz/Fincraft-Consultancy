import React from 'react';

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-800">About Fincraft Consulting</h1>
      <p className="mb-4 text-lg">
        Fincraft Consulting is a team of experienced tax professionals dedicated to helping individuals and businesses navigate the complexities of tax law. Our mission is to provide clear, reliable, and professional tax advice tailored to your unique needs.
      </p>
      <p className="mb-4">
        With years of experience in the industry, we pride ourselves on our integrity, expertise, and commitment to client success. Whether you need help with tax planning, compliance, or resolving tax issues, we are here to support you every step of the way.
      </p>
      <div className="bg-blue-50 p-6 rounded-lg shadow text-center mt-8">
        <h2 className="text-2xl font-semibold mb-2 text-blue-700">Our Values</h2>
        <p>Integrity • Expertise • Client Success</p>
      </div>
    </main>
  );
}