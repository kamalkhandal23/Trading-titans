import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import type { BlogPost } from './BlogSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

export function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs text-white ${
            blog.category === 'Market Analysis' ? 'bg-blue-600' :
            blog.category === 'Trading Tips' ? 'bg-green-600' :
            blog.category === 'Investment Guide' ? 'bg-purple-600' :
            'bg-orange-600'
          }`}>
            {blog.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
        
        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(blog.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <User className="w-4 h-4" />
            {blog.author}
          </div>
          <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}