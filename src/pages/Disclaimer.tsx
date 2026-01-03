import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Helmet>
        <title>Disclaimer | Trading Titans</title>
        <meta
          name="description"
          content="Disclaimer for Trading Titans. Stock market investments are subject to market risks. Educational purpose only."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Disclaimer</h1>

      <p className="text-slate-600 mb-6">
        The information provided on <strong>Trading Titans</strong> is for
        educational and informational purposes only. It should not be considered
        as financial, investment, or trading advice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Stock Market Risk Disclaimer
      </h2>
      <p className="text-slate-600 mb-4">
        Investing and trading in the stock market involves substantial risk of
        loss and may not be suitable for every investor. The value of stocks,
        derivatives, and other financial instruments may fluctuate, and you may
        lose part or all of your invested capital.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        No Investment Advice
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans does not provide personalized investment advice. Any
        stock analysis, charts, strategies, or opinions shared on this website
        are based on personal research and experience and should not be relied
        upon for making investment decisions.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Do Your Own Research
      </h2>
      <p className="text-slate-600 mb-4">
        Users are advised to conduct their own research and consult with a
        certified financial advisor before making any investment or trading
        decisions. Trading Titans will not be responsible for any losses
        incurred as a result of decisions made based on information from this
        website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Accuracy of Information
      </h2>
      <p className="text-slate-600 mb-4">
        While we strive to provide accurate and up-to-date information, Trading
        Titans makes no warranties or guarantees regarding the completeness,
        reliability, or accuracy of the content published on this website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        External Links Disclaimer
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans may contain links to external websites, including broker
        platforms and third-party services. We do not control or guarantee the
        accuracy, relevance, or reliability of any information provided by
        third-party websites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Affiliate Disclaimer
      </h2>
      <p className="text-slate-600 mb-4">
        Some links on Trading Titans may be affiliate links. This means we may
        earn a commission if you choose to sign up or make a purchase through
        those links, at no additional cost to you. These commissions help us
        maintain and improve the website.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Consent
      </h2>
      <p className="text-slate-600 mb-4">
        By using our website, you hereby consent to this Disclaimer and agree to
        its terms.
      </p>

      <p className="text-slate-500 text-sm mt-10">
        Last updated: {new Date().toLocaleDateString("en-IN")}
      </p>
    </div>
  );
}
