import { GadgetCard } from './GadgetCard';

const gadgets = [
  {
    id: 1,
    name: 'VS Code Extensions Pack',
    description: 'Essential extensions: Prettier, ESLint, GitLens, Error Lens.',
    category: 'Development Tools',
    link: '#'
  },
  {
    id: 2,
    name: 'Postman Collections',
    description: 'Organized API collections for testing and documentation.',
    category: 'API Testing',
    link: '#'
  },
  {
    id: 3,
    name: 'Custom CLI Scripts',
    description: 'Bash scripts for deployment and database backups automation.',
    category: 'Automation',
    link: '#'
  },
  {
    id: 4,
    name: 'Docker Templates',
    description: 'Pre-configured Docker Compose for common dev stacks.',
    category: 'DevOps',
    link: '#'
  },
  {
    id: 5,
    name: 'Snippet Library',
    description: 'Reusable code snippets for React hooks and API handlers.',
    category: 'Code Snippets',
    link: '#'
  },
  {
    id: 6,
    name: 'Performance Monitor',
    description: 'Custom dashboard for application metrics in real-time.',
    category: 'Monitoring',
    link: '#'
  },
  {
    id: 7,
    name: 'Git Hooks Collection',
    description: 'Pre-commit hooks for linting and code quality checks.',
    category: 'Development Tools',
    link: '#'
  },
  {
    id: 8,
    name: 'Database Migration Tools',
    description: 'Scripts for managing migrations across environments.',
    category: 'Database',
    link: '#'
  },
  {
    id: 9,
    name: 'CI/CD Pipeline Templates',
    description: 'GitHub Actions templates for automated deployment.',
    category: 'DevOps',
    link: '#'
  }
];

export function GadgetsPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-gray-300 mb-1">gadgets</h2>
          <p className="text-gray-600 text-sm">tools and utilities</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gadgets.map((gadget) => (
            <GadgetCard
              key={gadget.id}
              name={gadget.name}
              description={gadget.description}
              category={gadget.category}
              link={gadget.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
