  import { TrendingUp } from 'lucide-react';

  interface HeaderProps {
    currentSection: 'home' | 'videos' | 'blog' | 'about';
    onNavigate: (section: 'home' | 'videos' | 'blog' | 'about') => void;
  }

  export function Header({ currentSection, onNavigate }: HeaderProps) {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Trading Titans
              </span>
            </button>
            
            <nav className="flex gap-8">
              <button
                onClick={() => onNavigate('home')}
                className={`transition-colors ${
                  currentSection === 'home'
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('videos')}
                className={`transition-colors ${
                  currentSection === 'videos'
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => onNavigate('blog')}
                className={`transition-colors ${
                  currentSection === 'blog'
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Blog
              </button>
            </nav>
          </div>
        </div>
      </header>
    );
  }