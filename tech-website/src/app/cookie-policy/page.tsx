import React from 'react';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Cookie Policy</h1>
        <p className="mb-6 text-slate-600 dark:text-slate-300">This Cookie Policy explains how we use cookies and similar technologies on our website.</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">What Are Cookies?</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-300">Cookies are small text files stored on your device to help us improve your experience and analyze site usage.</p>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">How We Use Cookies</h2>
        <ul className="list-disc list-inside mb-6 text-slate-600 dark:text-slate-300">
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and usage</li>
          <li>To provide personalized content</li>
        </ul>
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Managing Cookies</h2>
        <p className="mb-6 text-slate-600 dark:text-slate-300">You can control cookies through your browser settings. Disabling cookies may affect your experience on our site.</p>
        <p className="text-slate-600 dark:text-slate-300">For more information, contact us at privacy@techcorp.com.</p>
      </div>
    </div>
  );
} 