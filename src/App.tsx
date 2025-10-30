import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { NotesPage } from './components/NotesPage';
import { GadgetsPage } from './components/GadgetsPage';
import { PhotosPage } from './components/PhotosPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'notes':
        return <NotesPage />;
      case 'gadgets':
        return <GadgetsPage />;
      case 'photos':
        return <PhotosPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}
