import { TrendingUp, Youtube, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: 'home' | 'videos' | 'blog' | 'about') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl">Trading Titans</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering investors with expert stock market analysis and financial education.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">

              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate("about");     // <-- IMPORTANT
                  }}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>

              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Trading Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <Youtube className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              <Twitter className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              <Instagram className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
              <Linkedin className="w-6 h-6 text-slate-400 hover:text-white transition-colors" />
            </div>
            <p className="text-sm text-slate-400 mt-4">
              Subscribe to our YouTube channel for daily market updates.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>© 2024 Trading Titans. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: Stock market investments are subject to market risks. Please consult with a financial advisor before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
