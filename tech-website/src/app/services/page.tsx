'use client';

import { services } from '@/data/services';
import Link from 'next/link';

export default function ServicesPage() {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'from-blue-500 to-blue-600',
      red: 'from-red-500 to-red-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      cyan: 'from-cyan-500 to-cyan-600',
      indigo: 'from-indigo-500 to-indigo-600',
      pink: 'from-pink-500 to-pink-600'
    };
    return colorMap[color] || 'from-blue-500 to-blue-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Services</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Complete Tech
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"> Solutions</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            From web development to cybersecurity, we provide comprehensive technology solutions that drive your business forward.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{services.length}</div>
              <div className="text-slate-600 dark:text-slate-400">Services Available</div>
            </div>
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">24/7</div>
              <div className="text-slate-600 dark:text-slate-400">Support</div>
            </div>
            <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              All Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive technology solutions delivered with expertise and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
              >
                <div className={`h-40 bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {service.name}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {service.priceRange}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-slate-600 dark:text-slate-300">
                        <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} hover:from-${service.color}-700 hover:to-${service.color === 'blue' ? 'purple' : service.color}-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform group-hover:scale-105 text-center text-sm`}>
                    Learn More
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose TechCorp?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Expert Team',
                description: 'Certified professionals with years of experience in their respective fields.'
              },
              {
                icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                title: 'Fast Delivery',
                description: 'Quick turnaround times without compromising on quality or attention to detail.'
              },
              {
                icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security and reliability built into every solution.'
              },
              {
                icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
                title: '24/7 Support',
                description: 'Round-the-clock support to ensure your systems run smoothly.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss your project requirements and find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Quote
            </Link>
            <Link
              href="/#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 