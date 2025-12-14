import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import type { BlogPost } from './BlogSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPostViewProps {
  blog: BlogPost;
  onBack: () => void;
}

export function BlogPostView({ blog, onBack }: BlogPostViewProps) {
  return (
    <div className="py-8 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog
        </button>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
              <span className={`inline-block px-3 py-1 rounded-full text-xs text-white mb-4 ${
                blog.category === 'Market Analysis' ? 'bg-blue-600' :
                blog.category === 'Trading Tips' ? 'bg-green-600' :
                blog.category === 'Investment Guide' ? 'bg-purple-600' :
                'bg-orange-600'
              }`}>
                {blog.category}
              </span>
              <h1 className="text-white mb-4">{blog.title}</h1>
              <div className="flex items-center gap-6 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blog.date).toLocaleDateString('en-IN', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blog.readTime} read
                </span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="prose prose-slate max-w-none">
              {blog.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                } else if (paragraph.trim().startsWith('-')) {
                  return (
                    <li key={index} className="ml-6 text-slate-700">
                      {paragraph.replace(/^-\s*/, '')}
                    </li>
                  );
                } else if (paragraph.match(/^\d+\./)) {
                  return (
                    <li key={index} className="ml-6 text-slate-700">
                      {paragraph.replace(/^\d+\.\s*/, '')}
                    </li>
                  );
                } else if (paragraph.trim()) {
                  return <p key={index} className="mb-4 text-slate-700">{paragraph}</p>;
                } else {
                  return <br key={index} />;
                }
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}