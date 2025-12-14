import { useState } from 'react';
import { Plus, Play } from 'lucide-react';
import { VideoCard } from './VideoCard';
import { AddVideoModal } from './AddVideoModal';

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  category: 'Nifty' | 'BankNifty' | 'Stock Analysis' | 'Education';
  date: string;
}

const sampleVideos: Video[] = [
  {
    id: '1',
    title: 'Nifty 50 Technical Analysis - Weekly Market Outlook',
    url: 'https://youtu.be/UuuiMTQ0PA8?si=bXCOCuTgYtGzrbp8',
    thumbnail: '',
    description: 'Complete technical analysis of Nifty 50 with support and resistance levels',
    category: 'Stock Analysis',
    date: '2025-11-23'
  },
  {
    id: '2',
    title: 'BankNifty Intraday Trading Strategy',
    url: 'https://youtu.be/J5AiwMF7Itw?si=6BXcQrxsfrc7MVL4',
    thumbnail: '',
    description: 'Learn effective intraday trading strategies for BankNifty',
    category: 'Stock Analysis',
    date: '2025-09-24'
  },
  {
    id: '3',
    title: 'Top 5 Stocks to Watch This Week',
    url: 'https://youtu.be/XV4dAbgkigs?si=pp5ORYLI-9hBGwKl',
    thumbnail: '',
    description: 'Detailed analysis of the top 5 stocks with strong potential',
    category: 'Stock Analysis',
    date: '2025-09-25'
  },
];

export function VideoSection() {
  const [videos, setVideos] = useState<Video[]>(sampleVideos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Nifty', 'BankNifty', 'Stock Analysis', 'Education'];

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  const handleAddVideo = (video: Omit<Video, 'id'>) => {
    const newVideo: Video = {
      ...video,
      id: Date.now().toString(),
    };
    setVideos([newVideo, ...videos]);
  };

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2">Video Library</h2>
            <p className="text-slate-600">Watch our latest market analysis and educational content</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Video
          </button>
        </div>

        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((category) => (
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

        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <Play className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-600">No videos in this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>

      <AddVideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddVideo={handleAddVideo}
      />
    </section>
  );
}