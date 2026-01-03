import { Calendar, Tag, Pencil, Trash2 } from 'lucide-react';
import type { Video } from './VideoSection';

interface Props {
  video: Video;
  isAdmin: boolean;
  onEdit: (video: Video) => void;
  onDelete: (id: string) => void;
}

export function VideoCard({ video, isAdmin, onEdit, onDelete }: Props) {
  return (
    <div className="bg-white rounded-lg shadow relative">
      {isAdmin && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button onClick={() => onEdit(video)}>
            <Pencil className="w-4 h-4 text-blue-600" />
          </button>
          <button onClick={() => onDelete(video.id)}>
            <Trash2 className="w-4 h-4 text-red-600" />
          </button>
        </div>
      )}

      <div className="p-4">
        <span className="text-xs bg-slate-100 px-2 py-1 rounded">
          <Tag className="w-3 h-3 inline" /> {video.category}
        </span>
        <h3 className="mt-2">{video.title}</h3>
        <p className="text-sm text-slate-600">{video.description}</p>
        <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {video.date}
        </div>
      </div>
    </div>
  );
}
