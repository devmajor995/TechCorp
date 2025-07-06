import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">TechCorp</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Building the future of technology, one innovation at a time. We help businesses transform their digital presence with cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect width="18" height="18" x="3" y="3" rx="5" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" strokeWidth="2"/>
                  <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-black rounded-lg flex items-center justify-center transition-colors" aria-label="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324A1.84 1.84 0 0024 22.162V1.838A1.84 1.84 0 0022.162 0zM7.55 20.452H3.548V9.048H7.55v11.404zm-2-13.02a2.32 2.32 0 110-4.64 2.32 2.32 0 010 4.64zm15.452 13.02h-4.002v-5.604c0-1.336-.025-3.058-1.865-3.058-1.867 0-2.153 1.46-2.153 2.97v5.692h-4.002V9.048h3.845v1.561h.054c.536-1.016 1.845-2.086 3.797-2.086 4.06 0 4.808 2.674 4.808 6.146v5.783z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/tech-repairs" className="hover:text-white transition-colors">Tech Repairs</Link></li>
              <li><Link href="/services/mobile-development" className="hover:text-white transition-colors">Mobile Development</Link></li>
              <li><Link href="/services/cloud-solutions" className="hover:text-white transition-colors">Cloud Solutions</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/quote" className="hover:text-white transition-colors">Get Quote</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Stay Updated</h4>
            <p className="text-slate-400 mb-4">
              Get the latest tech insights and updates delivered to your inbox.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">&copy; 2025 TechCorp. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-slate-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 