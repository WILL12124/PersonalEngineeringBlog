import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjE3NTQ0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'mountain-vista.jpg',
    location: 'swiss-alps',
    date: 'oct-2025'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1617381519460-d87050ddeb92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MTgwOTk1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'urban-geometry.jpg',
    location: 'downtown',
    date: 'sep-2025'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1623715537851-8bc15aa8c145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTc0OTA4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'workspace-setup.jpg',
    location: 'home-office',
    date: 'oct-2025'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1717295248494-937c3a5655b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGdhZGdldHN8ZW58MXx8fHwxNzYxODEwNTY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'tech-collection.jpg',
    location: 'studio',
    date: 'sep-2025'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    title: 'coastal-sunset.jpg',
    location: 'pacific-coast',
    date: 'aug-2025'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    title: 'night-sky.jpg',
    location: 'observatory',
    date: 'jul-2025'
  }
];

export function PhotosPage() {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h2 className="text-gray-300 mb-1">photos</h2>
          <p className="text-gray-600 text-sm">captured moments</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group border border-gray-900 bg-gray-950 overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                <ImageWithFallback
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
              <div className="p-4">
                <h4 className="text-gray-400 text-sm mb-1">{photo.title}</h4>
                <div className="flex items-center justify-between text-gray-600 text-xs">
                  <span>{photo.location}</span>
                  <span>{photo.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
