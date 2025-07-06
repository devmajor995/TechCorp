'use client';

import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import Link from 'next/link';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.id === params.slug);

  if (!service) {
    notFound();
  }

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

  const getBorderColor = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'border-blue-200 dark:border-blue-800',
      red: 'border-red-200 dark:border-red-800',
      green: 'border-green-200 dark:border-green-800',
      purple: 'border-purple-200 dark:border-purple-800',
      orange: 'border-orange-200 dark:border-orange-800',
      cyan: 'border-cyan-200 dark:border-cyan-800',
      indigo: 'border-indigo-200 dark:border-indigo-800',
      pink: 'border-pink-200 dark:border-pink-800'
    };
    return colorMap[color] || 'border-blue-200 dark:border-blue-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br ${getColorClasses(service.color)}/20 rounded-full blur-3xl`}></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{service.category}</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {service.name}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{service.priceRange}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Starting Price</div>
                </div>
                <div className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className={`bg-gradient-to-r ${getColorClasses(service.color)} hover:from-${service.color}-700 hover:to-${service.color === 'blue' ? 'purple' : service.color}-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center`}
                >
                  Get Quote
                </Link>
                <Link
                  href="/#services"
                  className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center"
                >
                  View All Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className={`w-full h-96 bg-gradient-to-br ${getColorClasses(service.color)} rounded-2xl flex items-center justify-center shadow-2xl`}>
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your specific needs and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className={`bg-white dark:bg-slate-800 p-8 rounded-2xl border ${getBorderColor(service.color)} hover:shadow-xl transition-all duration-300 group`}>
                <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {feature}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Professional {feature.toLowerCase()} services delivered with expertise and attention to detail.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your requirements and understand your business goals.' },
              { step: '02', title: 'Planning', description: 'We create a detailed project plan and timeline for implementation.' },
              { step: '03', title: 'Development', description: 'Our expert team builds your solution with best practices.' },
              { step: '04', title: 'Delivery', description: 'We deploy your solution and provide ongoing support.' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${getColorClasses(service.color)} rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {process.description}
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
            Let&apos;s discuss your {service.name.toLowerCase()} needs and create a custom solution for your business.
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

      {/* Related Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Related Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Explore our other technology solutions that complement {service.name.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
                >
                  <div className={`h-32 bg-gradient-to-br ${getColorClasses(relatedService.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={relatedService.icon} />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {relatedService.description}
                    </p>
                    <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {relatedService.priceRange}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 