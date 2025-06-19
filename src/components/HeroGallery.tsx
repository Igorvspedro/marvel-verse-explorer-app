
import React from 'react';

interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
  };
}

interface HeroGalleryProps {
  heroes: Hero[];
  onHeroSelect: (heroId: number) => void;
  searchTerm: string;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ heroes, onHeroSelect, searchTerm }) => {
  if (heroes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🦸‍♂️</div>
        <h3 className="text-2xl font-bold text-white mb-2">
          {searchTerm ? 'No heroes found' : 'No heroes available'}
        </h3>
        <p className="text-white/60">
          {searchTerm 
            ? `Try searching for different terms like "Spider" or "Iron"`
            : 'Please try again later'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'Marvel Heroes'}
        </h2>
        <p className="text-white/60">
          {heroes.length} hero{heroes.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroes.map((hero) => (
          <div
            key={hero.id}
            onClick={() => onHeroSelect(hero.id)}
            className="group cursor-pointer bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">{hero.name}</h3>
                <p className="text-red-400 text-sm font-medium">
                  {hero.comics.available} Comics Available
                </p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
                {hero.description || 'No description available for this hero.'}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-red-400 font-medium text-sm">Click to view details</span>
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-400 transition-colors">
                  <span className="text-white text-lg">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
