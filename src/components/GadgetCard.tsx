import { ExternalLink } from 'lucide-react';

interface GadgetCardProps {
  name: string;
  description: string;
  category: string;
  link?: string;
}

export function GadgetCard({ name, description, category, link }: GadgetCardProps) {
  return (
    <div className="border border-gray-900 bg-gray-950 p-5 hover:border-gray-700 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h4 className="text-gray-300">{name}</h4>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-400 transition-colors"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      <p className="text-gray-500 mb-3 text-sm">{description}</p>
      <span className="text-gray-600 text-xs">
        {category.toLowerCase()}
      </span>
    </div>
  );
}
