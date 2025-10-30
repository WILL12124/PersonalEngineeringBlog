import { useState } from 'react';
import { NotesSidebar } from './NotesSidebar';
import { NoteCard } from './NoteCard';

const allNotes = [
  {
    id: 1,
    title: 'Understanding React Server Components',
    date: 'Oct 28, 2025',
    readTime: '8 min',
    excerpt: 'Deep dive into React Server Components and why they matter for modern web applications.',
    tags: ['React', 'Performance', 'Architecture'],
    categories: ['frontend', 'architecture', 'performance']
  },
  {
    id: 2,
    title: 'Building Scalable APIs with Node.js',
    date: 'Oct 25, 2025',
    readTime: '12 min',
    excerpt: 'Best practices for designing APIs that scale. Caching, rate limiting, and database optimization.',
    tags: ['Node.js', 'API', 'Backend'],
    categories: ['backend', 'architecture']
  },
  {
    id: 3,
    title: 'Optimizing Database Queries',
    date: 'Oct 20, 2025',
    readTime: '6 min',
    excerpt: 'Practical tips for improving database performance through indexing and query optimization.',
    tags: ['Database', 'SQL', 'Performance'],
    categories: ['database', 'performance']
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    date: 'Oct 15, 2025',
    readTime: '5 min',
    excerpt: 'Practical guide to choosing between CSS Grid and Flexbox for different layout scenarios.',
    tags: ['CSS', 'Frontend', 'Design'],
    categories: ['frontend']
  },
  {
    id: 5,
    title: 'Microservices Architecture Patterns',
    date: 'Oct 10, 2025',
    readTime: '15 min',
    excerpt: 'Common patterns in microservices: API Gateway, Circuit Breaker, and Service Discovery.',
    tags: ['Architecture', 'Microservices', 'Backend'],
    categories: ['backend', 'architecture']
  },
  {
    id: 6,
    title: 'PostgreSQL Performance Tuning',
    date: 'Oct 5, 2025',
    readTime: '10 min',
    excerpt: 'Advanced techniques for optimizing PostgreSQL including connection pooling and query planning.',
    tags: ['PostgreSQL', 'Database', 'Performance'],
    categories: ['database', 'performance']
  },
];

export function NotesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNotes = selectedCategory === 'all' 
    ? allNotes 
    : allNotes.filter(note => note.categories.includes(selectedCategory));

  return (
    <div className="flex min-h-screen bg-black">
      <NotesSidebar 
        selectedCategory={selectedCategory} 
        onSelectCategory={setSelectedCategory} 
      />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-gray-300 mb-1">
              {selectedCategory === 'all' ? 'all notes' : `${selectedCategory}`}
            </h2>
            <p className="text-gray-600 text-sm">
              {filteredNotes.length} {filteredNotes.length === 1 ? 'entry' : 'entries'}
            </p>
          </div>
          <div className="space-y-4">
            {filteredNotes.map((note) => (
              <NoteCard
                key={note.id}
                title={note.title}
                date={note.date}
                readTime={note.readTime}
                excerpt={note.excerpt}
                tags={note.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
