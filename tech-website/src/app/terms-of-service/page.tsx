import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Use of Services</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>Services are provided as-is and may change at any time</li>
          <li>Do not misuse or attempt to disrupt our services</li>
          <li>Respect intellectual property rights</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Limitation of Liability</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>We are not liable for indirect or consequential damages</li>
          <li>Our total liability is limited to the amount paid for services</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Changes to Terms</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-300">We may update these terms from time to time. Continued use of our services constitutes acceptance of the new terms.</p>
        <p className="text-slate-600 dark:text-slate-300">For questions, contact us at legal@techcorp.com.</p>
      </div>
    </div>
  );
} 