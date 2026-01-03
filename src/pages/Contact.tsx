import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Helmet>
        <title>Contact Us | Trading Titans</title>
        <meta
          name="description"
          content="Contact Trading Titans for stock market education, blog queries, collaborations, or support."
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-slate-600 mb-10">
        Have questions, suggestions, or business inquiries?  
        We’d love to hear from you. Reach out to us using the details below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

        {/* EMAIL */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
          <h3 className="mb-2 font-semibold">Email</h3>
          <p className="text-slate-600 text-sm">
            kamalsh684@gmail.com
          </p>
        </div>

        {/* PHONE (OPTIONAL) */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
          <h3 className="mb-2 font-semibold">Phone</h3>
          <p className="text-slate-600 text-sm">
            +91 63771 65007
          </p>
        </div>

        {/* LOCATION */}
        <div className="bg-white rounded-lg shadow p-6 text-center">
          <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-4" />
          <h3 className="mb-2 font-semibold">Location</h3>
          <p className="text-slate-600 text-sm">
            Jaipur, India
          </p>
        </div>
      </div>

      {/* CONTACT NOTE */}
      <div className="bg-yellow-50 border rounded-lg p-6">
        <h3 className="mb-2 font-semibold">Important Note</h3>
        <p className="text-slate-700 text-sm">
          Trading Titans provides educational content only.  
          We do not offer personalized financial or investment advice.
          Please consult a certified financial advisor before making investment decisions.
        </p>
      </div>
    </div>
  );
}
