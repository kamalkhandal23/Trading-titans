import { Calendar, Tag } from 'lucide-react';
import type { Video } from './VideoSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(video.url);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : null;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative pb-[56.25%]">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <ImageWithFallback
            src={video.thumbnail}
            alt={video.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
            video.category === 'Nifty' ? 'bg-blue-100 text-blue-700' :
            video.category === 'BankNifty' ? 'bg-green-100 text-green-700' :
            video.category === 'Stock Analysis' ? 'bg-purple-100 text-purple-700' :
            'bg-orange-100 text-orange-700'
          }`}>
            <Tag className="w-3 h-3" />
            {video.category}
          </span>
        </div>
        
        <h3 className="mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">{video.description}</p>
        
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="w-4 h-4" />
          {new Date(video.date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          })}
        </div>
      </div>
    </div>
  );
}