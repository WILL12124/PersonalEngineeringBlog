import { Calendar, Clock } from 'lucide-react';

interface NoteCardProps {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}

export function NoteCard({ title, date, readTime, excerpt, tags }: NoteCardProps) {
  return (
    <article className="border border-gray-900 bg-gray-950 p-5 hover:border-gray-700 transition-colors">
      <h3 className="text-gray-300 mb-2">{title}</h3>
      <div className="flex items-center gap-4 text-gray-600 mb-3 text-sm">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={12} />
          <span>{readTime}</span>
        </div>
      </div>
      <p className="text-gray-500 mb-4 text-sm leading-relaxed">{excerpt}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-gray-600 text-xs"
          >
            #{tag.toLowerCase()}
          </span>
        ))}
      </div>
    </article>
  );
}
