import { useEffect, useState } from "react";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

const API_URL = "http://localhost:5001/api";

interface Blog {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  image: string;
  author: string;
  category: string;
  readTime: string;
  createdAt: string;
}

interface Props {
  slug: string;
  onBack?: () => void;
}

export default function BlogDetail({ slug, onBack }: Props) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/blogs/${slug}`)
      .then(res => res.json())
      .then(data => setBlog(data))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20">Loading blog...</div>;
  }

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  const blogUrl = `https://tradingtitans.in/blog/${blog.slug}`;

  return (
    <>
      {/* 🔥 SEO META TAGS */}
      <Helmet>
        <title>{blog.title} | Trading Titans</title>

        <meta name="description" content={blog.excerpt} />
        <meta
          name="keywords"
          content={`${blog.title}, ${blog.category}, stock market, trading, investing`}
        />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={blogUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.image} />

        {/* Canonical URL */}
        <link rel="canonical" href={blogUrl} />

        <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://tradingtitans.in/blog/${blog.slug}`
      },
      "headline": blog.title,
      "description": blog.excerpt,
      "image": blog.image,
      "author": {
        "@type": "Person",
        "name": blog.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Trading Titans",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tradingtitans.in/logo.png"
        }
      },
      "datePublished": blog.createdAt,
      "dateModified": blog.createdAt,
      "articleSection": blog.category,
      "keywords": [
        blog.category,
        "stock market",
        "trading",
        "investing",
        "Indian stock market"
      ]
    })}
  </script>
      </Helmet>

      {/* BLOG UI */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </button>
        )}

        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

        <div className="flex flex-wrap gap-6 text-sm text-slate-500 mb-6">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(blog.createdAt).toLocaleDateString("en-IN")}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {blog.readTime}
          </span>

          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {blog.author}
          </span>
        </div>

        <img
          src={blog.image}
          alt={blog.title}
          className="w-full rounded-lg mb-8"
        />

        <article className="prose max-w-none">
          {blog.content.split("\n").map((line, i) => {
            if (line.startsWith("## ")) {
              return <h2 key={i}>{line.replace("## ", "")}</h2>;
            }
            if (line.startsWith("### ")) {
              return <h3 key={i}>{line.replace("### ", "")}</h3>;
            }
            if (line.startsWith("- ")) {
              return <li key={i}>{line.replace("- ", "")}</li>;
            }
            return <p key={i}>{line}</p>;
          })}
        </article>
      </div>
    </>
  );
}
