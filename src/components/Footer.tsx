import {
  TrendingUp,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold">Trading Titans</span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering investors with expert stock market analysis,
              educational blogs, and market insights.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/videos" className="hover:text-white transition">
                  Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:text-white transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="mb-4 font-semibold">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="w-6 h-6 text-slate-400 hover:text-white transition" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="w-6 h-6 text-slate-400 hover:text-white transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-6 h-6 text-slate-400 hover:text-white transition" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="w-6 h-6 text-slate-400 hover:text-white transition" />
              </a>
            </div>

            <p className="text-sm text-slate-400">
              Follow us for daily stock market updates & educational content.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Trading Titans. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: Stock market investments are subject to market risks.
            Please read all related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
