import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Helmet>
        <title>Privacy Policy | Trading Titans</title>
        <meta
          name="description"
          content="Privacy Policy of Trading Titans. Learn how we collect, use, and protect your personal information."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-slate-600 mb-6">
        At <strong>Trading Titans</strong>, one of our main priorities is the
        privacy of our visitors. This Privacy Policy document contains the types
        of information that are collected and recorded by Trading Titans and how
        we use it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Information We Collect
      </h2>
      <p className="text-slate-600 mb-4">
        We do not require users to provide personal information to access our
        website. However, we may collect non-personal information such as browser
        type, device information, IP address, and pages visited for analytics
        purposes.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 text-slate-600 mb-4">
        <li>To improve website content and user experience</li>
        <li>To analyze traffic and user behavior</li>
        <li>To show relevant advertisements</li>
        <li>To prevent fraud and abuse</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Cookies</h2>
      <p className="text-slate-600 mb-4">
        Trading Titans uses cookies to store information about visitors’
        preferences and to optimize the website by customizing our web page
        content based on visitors’ browser type or other information.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Google DoubleClick DART Cookie
      </h2>
      <p className="text-slate-600 mb-4">
        Google is one of a third-party vendor on our site. It uses cookies, known
        as DART cookies, to serve ads to users based upon their visit to our
        website and other sites on the internet.
      </p>

      <p className="text-slate-600 mb-4">
        Users may opt out of the use of DART cookies by visiting the Google Ads
        Privacy Policy at{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          https://policies.google.com/technologies/ads
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Third Party Privacy Policies
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans’s Privacy Policy does not apply to other advertisers or
        websites. We advise you to consult the respective Privacy Policies of
        these third-party ad servers or websites for more detailed information
        about their practices and instructions about how to opt out of certain
        options.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Advertising Partners Privacy Policies
      </h2>
      <p className="text-slate-600 mb-4">
        Third-party ad servers or ad networks use technologies such as cookies,
        JavaScript, or Web Beacons that are used in their advertisements and links
        that appear on Trading Titans. These technologies are used to measure the
        effectiveness of advertising campaigns and to personalize advertising
        content.
      </p>

      <p className="text-slate-600 mb-4">
        Trading Titans has no access to or control over these cookies that are
        used by third-party advertisers.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Children’s Information
      </h2>
      <p className="text-slate-600 mb-4">
        Trading Titans does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you believe that your
        child has provided such information on our website, please contact us
        immediately and we will promptly remove such information from our
        records.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Online Privacy Policy Only
      </h2>
      <p className="text-slate-600 mb-4">
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regard to the information that they
        share and/or collect on Trading Titans.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Consent</h2>
      <p className="text-slate-600 mb-4">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <p className="text-slate-500 text-sm mt-10">
        Last updated: {new Date().toLocaleDateString("en-IN")}
      </p>
    </div>
  );
}
