import { Play, BookOpen } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: 'videos' | 'blog') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6">
            Master the Indian Stock Market
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert analysis on Nifty, BankNifty, and top stocks. Get comprehensive financial education 
            and trading insights to elevate your investment journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => onNavigate('videos')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Watch Videos
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Read Blog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}