import { useState } from 'react';
import { Plus, BookOpen } from 'lucide-react';
import { BlogCard } from './BlogCard';
import { BlogPostView } from './BlogPostView';
import { AddBlogModal } from './AddBlogModal';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Market Analysis' | 'Trading Tips' | 'Investment Guide' | 'News';
  image: string;
  readTime: string;
}

/* 🔐 ADMIN CHECK */
const isAdmin = () => {
  return localStorage.getItem('role') === 'admin';
};

const sampleBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Nifty 50: A Comprehensive Guide for Beginners',
    excerpt: 'Learn everything about Nifty 50 index, its composition, and how to trade it effectively.',
    content: `The Nifty 50 is India's benchmark stock market index...`,
    author: 'Trading Titans',
    date: '2024-01-15',
    category: 'Investment Guide',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop',
    readTime: '5 min'
  },
  {
    id: '2',
    title: '5 Essential Technical Indicators Every Trader Must Know',
    excerpt: 'Master these five technical indicators to improve your trading decisions.',
    content: `Technical indicators are mathematical calculations...`,
    author: 'Trading Titans',
    date: '2024-01-14',
    category: 'Trading Tips',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=450&fit=crop',
    readTime: '7 min'
  },
  {
    id: '3',
    title: 'BankNifty Trading Strategies for Consistent Profits',
    excerpt: 'Discover proven BankNifty trading strategies.',
    content: `BankNifty is one of the most volatile indices...`,
    author: 'Trading Titans',
    date: '2024-01-12',
    category: 'Trading Tips',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&h=450&fit=crop',
    readTime: '6 min'
  },
];

export function BlogSection() {
  const [blogs, setBlogs] = useState<BlogPost[]>(sampleBlogs);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Market Analysis', 'Trading Tips', 'Investment Guide', 'News'];

  const filteredBlogs =
    selectedCategory === 'All'
      ? blogs
      : blogs.filter(blog => blog.category === selectedCategory);

  const handleAddBlog = (blog: Omit<BlogPost, 'id'>) => {
    if (!isAdmin()) return; // extra safety

    const newBlog: BlogPost = {
      ...blog,
      id: Date.now().toString(),
    };

    setBlogs([newBlog, ...blogs]);
  };

  if (selectedBlog) {
    return <BlogPostView blog={selectedBlog} onBack={() => setSelectedBlog(null)} />;
  }

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2">Financial Education Blog</h2>
            <p className="text-slate-600">
              Expert insights and analysis on the stock market
            </p>
          </div>

          {/* 🔐 ADMIN ONLY BUTTON */}
          {isAdmin() && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Post
            </button>
          )}
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* BLOG LIST */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No blog posts in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map(blog => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => setSelectedBlog(blog)}
              />
            ))}
          </div>
        )}
      </div>

      {/* 🔐 ADMIN ONLY MODAL */}
      {isAdmin() && (
        <AddBlogModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddBlog={handleAddBlog}
        />
      )}
    </section>
  );
}
