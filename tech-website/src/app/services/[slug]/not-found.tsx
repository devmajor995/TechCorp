import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative">
          {/* 404 Icon */}
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            404
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Service Not Found
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md mx-auto">
            The service you&apos;re looking for doesn&apos;t exist. Don&apos;t worry, we have plenty of other amazing services to offer!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Browse All Services
            </Link>
            <Link
              href="/"
              className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20 font-semibold py-3 px-6 rounded-lg transition-all duration-200"
            >
              Go Home
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Popular Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: '/services/web-development', label: 'Web Development' },
                { href: '/services/cybersecurity', label: 'Cybersecurity' },
                { href: '/services/tech-repairs', label: 'Tech Repairs' }
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-white/10 dark:bg-slate-800/10 backdrop-blur-md border border-white/20 dark:border-slate-700/20 text-slate-700 dark:text-slate-300 hover:bg-white/20 dark:hover:bg-slate-800/20 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 