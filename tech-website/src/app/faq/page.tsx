import React from 'react';

const faqs = [
  {
    question: 'What services does TechCorp offer?',
    answer: 'We offer web development, cybersecurity, tech repairs, cloud solutions, data analytics, AI & ML, IT consulting, and more.'
  },
  {
    question: 'How do I request a quote?',
    answer: 'You can request a quote by clicking the "Get Quote" button in the navigation or visiting the /quote page.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer 24/7 support and maintenance for all our solutions.'
  },
  {
    question: 'Can you customize solutions for my business?',
    answer: 'Absolutely! We tailor all our services to meet your unique business needs.'
  },
  {
    question: 'Where is TechCorp located?',
    answer: 'We are based in San Francisco, CA, but serve clients worldwide.'
  },
  {
    question: 'How do I contact support?',
    answer: 'You can contact us via the contact page, email, or phone. We respond within 24 hours.'
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked <span className="text-blue-600">Questions</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Find answers to common questions about our services, process, and support.
        </p>
      </div>
      <div className="max-w-2xl mx-auto space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{faq.question}</h2>
            <p className="text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 