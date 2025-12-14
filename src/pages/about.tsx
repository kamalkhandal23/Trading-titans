

import { Mail, Users } from "lucide-react";

export function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">About Trading Titans</h1>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Trading Titans is dedicated to empowering Indian retail investors with clear,
            actionable market analysis, practical trading strategies, and quality educational content.
            Our goal is to make the stock market approachable and profitable for beginners and
            intermediate traders alike.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-slate-600">
              To demystify the stock market for every Indian by providing honest analysis,
              step-by-step educational videos and practical strategies that focus on risk
              management and long-term wealth building.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
            <ul className="text-slate-600 list-disc pl-5 space-y-2">
              <li>Daily & weekly market analysis (Nifty, BankNifty, Stocks)</li>
              <li>Beginner-friendly courses and video playlists</li>
              <li>Trade setups, risk management templates, and watchlists</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-8">Meet the Team</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: "Kamal Khandal", role: "Founder & Market Analyst" },
              
            ].map((m) => (
              <div key={m.name} className="bg-slate-50 p-6 rounded-lg text-left shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{m.name}</h4>
                    <p className="text-sm text-slate-500">{m.role}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600">
                  Experienced market practitioner focusing on practical analysis and trader education.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold mb-3">Get in touch</h4>
          <p className="text-slate-600 mb-6">
            For collaborations, sponsorships, or course enquiries — drop us a message.
          </p>
          <a
            href="mailto:tradingtitans@example.com"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:opacity-90 transition"
          >
            <Mail className="w-4 h-4" /> Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

export default About;
