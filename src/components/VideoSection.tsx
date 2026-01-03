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
    url: 'https://youtu.be/UuuiMTQ0PA8',
    thumbnail: '',
    description: 'Complete technical analysis of Nifty 50',
    category: 'Stock Analysis',
    date: '2025-11-23',
  },
];

export function VideoSection() {
  const [videos, setVideos] = useState<Video[]>(sampleVideos);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const isAdmin = localStorage.getItem('role') === 'admin';

  const categories = ['All', 'Nifty', 'BankNifty', 'Stock Analysis', 'Education'];

  const filteredVideos =
    selectedCategory === 'All'
      ? videos
      : videos.filter(v => v.category === selectedCategory);

  const handleAddOrUpdateVideo = (video: Omit<Video, 'id'>) => {
    if (editingVideo) {
      setVideos(videos.map(v =>
        v.id === editingVideo.id ? { ...video, id: editingVideo.id } : v
      ));
    } else {
      setVideos([{ ...video, id: Date.now().toString() }, ...videos]);
    }
    setEditingVideo(null);
  };

  const handleDeleteVideo = (id: string) => {
    if (!confirm('Delete this video?')) return;
    setVideos(videos.filter(v => v.id !== id));
  };

  return (
    <section className="py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2>Video Library</h2>
            <p className="text-slate-600">Latest market videos</p>
          </div>

          {isAdmin && (
            <button
              onClick={() => {
                setEditingVideo(null);
                setIsModalOpen(true);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Video
            </button>
          )}
        </div>

        {/* FILTER */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VIDEOS */}
        {filteredVideos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg">
            <Play className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            No videos yet
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                isAdmin={isAdmin}
                onEdit={(v) => {
                  setEditingVideo(v);
                  setIsModalOpen(true);
                }}
                onDelete={handleDeleteVideo}
              />
            ))}
          </div>
        )}
      </div>

      {isAdmin && (
        <AddVideoModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingVideo(null);
          }}
          onAddVideo={handleAddOrUpdateVideo}
          defaultValues={editingVideo}
        />
      )}
    </section>
  );
}
