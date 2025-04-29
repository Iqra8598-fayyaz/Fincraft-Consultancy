"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const templates = [
  {
    name: 'Tax Planner',
    file: '/templates/tax-planner.xlsx',
    description: 'A simple tax planning spreadsheet for individuals and small businesses.',
  },
  {
    name: 'Expense Tracker',
    file: '/templates/expense-tracker.xlsx',
    description: 'Track your monthly expenses and income easily.',
  },
  // Add more templates here as needed
];

export default function TemplatesPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          file.type === 'application/vnd.ms-excel') {
        setSelectedFile(file);
      } else {
        alert('Please select an Excel file (.xlsx or .xls)');
      }
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Here you would typically handle the file upload to your server
      console.log('Uploading file:', selectedFile.name);
      // Reset the file input
      setSelectedFile(null);
      if (document.getElementById('file-upload') as HTMLInputElement) {
        (document.getElementById('file-upload') as HTMLInputElement).value = '';
      }
    }
  };

  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">Excel Templates</h1>
      
      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Upload Your Template</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="file"
            id="file-upload"
            accept=".xlsx,.xls"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
          <button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Upload Template
          </button>
        </div>
      </div>

      <p className="mb-8 text-center text-gray-600">
        Download free Excel templates to help you with tax planning, expense tracking, and more.
      </p>
      <div className="space-y-6">
        {templates.map((tpl) => (
          <div key={tpl.file} className="bg-white rounded-lg shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700">{tpl.name}</h2>
              <p className="text-gray-600">{tpl.description}</p>
            </div>
            <a
              href={tpl.file}
              download
              className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition font-semibold"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}