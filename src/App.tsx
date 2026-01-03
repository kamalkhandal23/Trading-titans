import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero"
import { VideoSection } from "./components/VideoSection";
import { BlogSection } from "./components/BlogSection";
import { Footer } from "./components/Footer";
import { About } from "./pages/about";
import AdminLogin from "./pages/AdminLogin";
import BlogDetail from "./pages/BlogDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import Contact from "./pages/Contact";
import TermsAndConditions from "./pages/TermsAndConditions";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Header />

        <Routes>
          {/* 🏠 HOME */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="py-16 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                      <Feature
                        title="Stock Analysis"
                        desc="In-depth analysis of Indian market stocks, Nifty, and BankNifty"
                        color="blue"
                      />

                      <Feature
                        title="Financial Education"
                        desc="Learn market fundamentals and trading strategies"
                        color="green"
                      />

                      <Feature
                        title="Video Content"
                        desc="Comprehensive video tutorials and market updates"
                        color="purple"
                      />

                    </div>
                  </div>
                </div>
              </>
            }
          />

          {/* 🎥 VIDEOS */}
          <Route path="/videos" element={<VideoSection />} />

          {/* 📝 BLOG LIST */}
          <Route path="/blog" element={<BlogSection />} />

          {/* 🔥 BLOG DETAIL (SEO URL) */}
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* 🔐 ADMIN LOGIN */}
          <Route path="/admin" element={<AdminLogin />} />

          {/* ℹ️ ABOUT */}
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsAndConditions />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

/* 🔹 SMALL FEATURE COMPONENT */
function Feature({
  title,
  desc,
  color,
}: {
  title: string;
  desc: string;
  color: "blue" | "green" | "purple";
}) {
  const colors: any = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  return (
    <div className="text-center p-6">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colors[color]}`}
      >
        <span className="text-xl font-bold">📊</span>
      </div>
      <h3 className="mb-2">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
