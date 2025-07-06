import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">About <span className="text-blue-600">TechCorp</span></h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
          Building the future of technology, one innovation at a time. We help businesses transform their digital presence with cutting-edge solutions and a passion for excellence.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            To empower businesses and individuals with innovative technology solutions that drive growth, efficiency, and security in a digital world.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2">
            <li>Innovation & Excellence</li>
            <li>Integrity & Transparency</li>
            <li>Customer-Centric Approach</li>
            <li>Continuous Learning</li>
            <li>Collaboration & Teamwork</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Story</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Founded in 2020, TechCorp has grown from a small team of passionate technologists into a leading provider of digital solutions. Our journey is defined by a relentless pursuit of quality and a commitment to helping our clients succeed.
          </p>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Meet the Team</h2>
          <p className="text-slate-600 dark:text-slate-300">
            Our diverse team of experts brings together years of experience in software development, cybersecurity, design, and business strategy. We believe in the power of collaboration and are dedicated to delivering results that matter.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to work with us?</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8">Contact us today to start your digital transformation journey.</p>
        <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">Contact Us</a>
      </div>
    </div>
  );
} 