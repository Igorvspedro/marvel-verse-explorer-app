
import React from 'react';
import { ArrowLeft, BookOpen, Film, Calendar } from 'lucide-react';

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
    items: Array<{ name: string }>;
  };
  series: {
    available: number;
    items: Array<{ name: string }>;
  };
  events: {
    available: number;
    items: Array<{ name: string }>;
  };
}

interface HeroDetailsProps {
  hero: Hero;
  onBack: () => void;
}

export const HeroDetails: React.FC<HeroDetailsProps> = ({ hero, onBack }) => {
  return (
    <div className="animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        Back to Heroes
      </button>

      {/* Hero Header */}
      <div className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 mb-8">
        <div className="relative">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-2/3 p-8">
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 mb-4">
                {hero.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {hero.description || 'No description available for this hero.'}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-red-400">{hero.comics.available}</div>
                  <div className="text-white/60 text-sm">Comics</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">{hero.series.available}</div>
                  <div className="text-white/60 text-sm">Series</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="text-2xl font-bold text-yellow-400">{hero.events.available}</div>
                  <div className="text-white/60 text-sm">Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Comics */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-bold text-white">Featured Comics</h3>
          </div>
          <div className="space-y-3">
            {hero.comics.items.slice(0, 5).map((comic, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-red-500/30 transition-colors">
                <p className="text-white/80 text-sm">{comic.name}</p>
              </div>
            ))}
            {hero.comics.available > 5 && (
              <p className="text-white/60 text-sm text-center pt-2">
                +{hero.comics.available - 5} more comics
              </p>
            )}
          </div>
        </div>

        {/* Series */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Film className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Featured Series</h3>
          </div>
          <div className="space-y-3">
            {hero.series.items.slice(0, 5).map((series, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                <p className="text-white/80 text-sm">{series.name}</p>
              </div>
            ))}
            {hero.series.available > 5 && (
              <p className="text-white/60 text-sm text-center pt-2">
                +{hero.series.available - 5} more series
              </p>
            )}
          </div>
        </div>

        {/* Events */}
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-yellow-400" />
            <h3 className="text-xl font-bold text-white">Major Events</h3>
          </div>
          <div className="space-y-3">
            {hero.events.items.slice(0, 5).map((event, index) => (
              <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-yellow-500/30 transition-colors">
                <p className="text-white/80 text-sm">{event.name}</p>
              </div>
            ))}
            {hero.events.available > 5 && (
              <p className="text-white/60 text-sm text-center pt-2">
                +{hero.events.available - 5} more events
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
