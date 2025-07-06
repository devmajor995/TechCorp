import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>Personal information you provide (name, email, etc.)</li>
          <li>Usage data and cookies</li>
          <li>Contact and support information</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How We Use Information</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>To provide and improve our services</li>
          <li>To communicate with you</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Your Rights</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>Access, update, or delete your information</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability</li>
        </ul>
        <p className="text-slate-600 dark:text-slate-300">For more details or to exercise your rights, please contact us at privacy@techcorp.com.</p>
      </div>
    </div>
  );
} 