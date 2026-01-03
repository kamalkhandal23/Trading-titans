import { Helmet } from "react-helmet-async";

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Helmet>
        <title>Terms and Conditions | Trading Titans</title>
        <meta
          name="description"
          content="Terms and Conditions for using Trading Titans website. Read rules, responsibilities, and limitations before using our services."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="text-slate-600 mb-6">
        Welcome to <strong>Trading Titans</strong>. By accessing and using this
        website, you accept and agree to be bound by the terms and conditions
        described below. If you do not agree with any part of these terms, please
        do not use our website.
      </p>

      {/* 1 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        1. Educational Purpose Only
      </h2>
      <p className="text-slate-600 mb-4">
        All content published on Trading Titans, including blogs, videos, charts,
        and analysis, is strictly for educational and informational purposes.
        We do not provide financial, investment, or trading advice.
      </p>

      {/* 2 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. No Investment Guarantee
      </h2>
      <p className="text-slate-600 mb-4">
        Trading and investing in the stock market involves risk. Trading Titans
        does not guarantee any profits or returns. Users are solely responsible
        for their investment decisions.
      </p>

      {/* 3 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        3. User Responsibility
      </h2>
      <p className="text-slate-600 mb-4">
        By using this website, you agree that you are responsible for verifying
        information before acting upon it. Always consult a certified financial
        advisor before making any financial decisions.
      </p>

      {/* 4 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        4. Intellectual Property Rights
      </h2>
      <p className="text-slate-600 mb-4">
        All content on Trading Titans, including text, images, logos, and videos,
        is the intellectual property of Trading Titans unless otherwise stated.
        Unauthorized copying, reproduction, or redistribution is strictly
        prohibited.
      </p>

      {/* 5 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. External Links
      </h2>
      <p className="text-slate-600 mb-4">
        Our website may contain links to third-party websites such as broker
        platforms or educational resources. We do not control or endorse the
        content of these external sites and are not responsible for any loss or
        damage caused by them.
      </p>

      {/* 6 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Advertisements & Affiliate Disclosure
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans may display advertisements and affiliate links. Clicking
        on these links may earn us a commission at no extra cost to you. This
        helps us keep the platform free and educational.
      </p>

      {/* 7 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        7. Limitation of Liability
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans shall not be held liable for any direct, indirect,
        incidental, or consequential losses arising from the use of our website
        or reliance on any information provided.
      </p>

      {/* 8 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        8. Changes to Terms
      </h2>
      <p className="text-slate-600 mb-4">
        We reserve the right to modify or replace these Terms and Conditions at
        any time without prior notice. Continued use of the website means you
        accept the updated terms.
      </p>

      {/* 9 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        9. Governing Law
      </h2>
      <p className="text-slate-600 mb-4">
        These terms shall be governed and interpreted in accordance with the
        laws of India.
      </p>

      {/* 10 */}
      <h2 className="text-xl font-semibold mt-8 mb-3">
        10. Contact Us
      </h2>
      <p className="text-slate-600 mb-4">
        If you have any questions regarding these Terms and Conditions, you may
        contact us at:
        <br />
        <strong>Email:</strong> tradintitansarena@gmail.com
      </p>

      <p className="text-slate-500 text-sm mt-10">
        Last updated: {new Date().toLocaleDateString("en-IN")}
      </p>
    </div>
  );
}
