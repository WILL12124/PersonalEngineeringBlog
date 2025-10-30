import { Folder } from 'lucide-react';

interface NotesSidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'all' },
  { id: 'frontend', name: 'frontend' },
  { id: 'backend', name: 'backend' },
  { id: 'database', name: 'database' },
  { id: 'performance', name: 'performance' },
  { id: 'architecture', name: 'architecture' },
];

export function NotesSidebar({ selectedCategory, onSelectCategory }: NotesSidebarProps) {
  return (
    <aside className="w-56 bg-black border-r border-gray-900 p-6 min-h-screen">
      <div className="flex items-center gap-2 mb-6 text-gray-600">
        <Folder size={14} />
        <span className="text-sm">categories/</span>
      </div>
      <nav className="space-y-1">
        {categories.map((category) => {
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                selectedCategory === category.id
                  ? 'text-gray-300 bg-gray-900'
                  : 'text-gray-600 hover:text-gray-400 hover:bg-gray-950'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
