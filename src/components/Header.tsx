import { Home, FileText, Wrench, Image } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-gray-900 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="text-left">
            <span className="text-gray-400">~/engineering-notes</span>
          </button>
          <nav className="flex gap-6">
            <button
              onClick={() => onNavigate('home')}
              className={`flex items-center gap-2 transition-colors text-sm ${
                currentPage === 'home' ? 'text-gray-300' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              <Home size={16} />
              <span>home</span>
            </button>
            <button
              onClick={() => onNavigate('notes')}
              className={`flex items-center gap-2 transition-colors text-sm ${
                currentPage === 'notes' ? 'text-gray-300' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              <FileText size={16} />
              <span>notes</span>
            </button>
            <button
              onClick={() => onNavigate('gadgets')}
              className={`flex items-center gap-2 transition-colors text-sm ${
                currentPage === 'gadgets' ? 'text-gray-300' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              <Wrench size={16} />
              <span>gadgets</span>
            </button>
            <button
              onClick={() => onNavigate('photos')}
              className={`flex items-center gap-2 transition-colors text-sm ${
                currentPage === 'photos' ? 'text-gray-300' : 'text-gray-600 hover:text-gray-400'
              }`}
            >
              <Image size={16} />
              <span>photos</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
