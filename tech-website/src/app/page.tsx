import { services } from '@/data/services';
import Link from 'next/link';

export default function Home() {
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
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Innovation at Work</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"> Technology</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We create innovative solutions that transform businesses and enhance user experiences. 
              Join us in shaping the digital landscape of tomorrow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </button>
              <button className="group bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">500+</div>
                <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">50+</div>
                <div className="text-slate-600 dark:text-slate-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">99.9%</div>
                <div className="text-slate-600 dark:text-slate-400">Uptime Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven methodologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-blue-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Lightning Fast
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Optimized performance that keeps your applications running at peak efficiency.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-purple-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Secure by Design
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Enterprise-grade security built into every layer of our solutions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-green-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                User Centered
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Intuitive interfaces designed with your users&apos; needs in mind.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-orange-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                24/7 Support
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Round-the-clock support to ensure your success every step of the way.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-cyan-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Scalable Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Built to grow with your business, from startup to enterprise.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-xl border border-indigo-100 dark:border-slate-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Innovation First
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Always exploring new technologies to give you the competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Tech Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive technology solutions to keep your business running smoothly and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.slice(0, 9).map((service) => (
              <div key={service.id} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600">
                <div className={`h-48 bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                  </svg>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {service.name}
                    </h3>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {service.priceRange}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.id}`}
                    className={`w-full bg-gradient-to-r ${getColorClasses(service.color)} hover:from-${service.color}-700 hover:to-${service.color === 'blue' ? 'purple' : service.color}-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 text-center block`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.slice(9).map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 block"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${getColorClasses(service.color)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">{service.name}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{service.description.split('.')[0]}.</p>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{service.priceRange}</div>
              </Link>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies already using our technology to drive growth and innovation.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </section>


    </div>
  );
}
