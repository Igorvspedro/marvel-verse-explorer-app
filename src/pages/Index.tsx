
import React, { useState, useEffect } from 'react';
import { HeroGallery } from '@/components/HeroGallery';
import { SearchBar } from '@/components/SearchBar';
import { HeroDetails } from '@/components/HeroDetails';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { ErrorMessage } from '@/components/ErrorMessage';
import { useMarvelAPI } from '@/hooks/useMarvelAPI';

const Index = () => {
  const [selectedHero, setSelectedHero] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { heroes, loading, error, searchHeroes, getHeroDetails } = useMarvelAPI();

  useEffect(() => {
    // Load initial heroes on mount
    searchHeroes('');
  }, []);

  const handleHeroSelect = async (heroId: number) => {
    const heroDetails = await getHeroDetails(heroId);
    setSelectedHero(heroDetails);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    searchHeroes(term);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-blue-900">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-red-600/20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 mb-2">
              MARVEL
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/90 tracking-wider">
              HEROES LIBRARY
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {selectedHero ? (
          <HeroDetails 
            hero={selectedHero} 
            onBack={() => setSelectedHero(null)}
          />
        ) : (
          <>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && (
              <HeroGallery 
                heroes={heroes} 
                onHeroSelect={handleHeroSelect}
                searchTerm={searchTerm}
              />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/80 text-white/60 text-center py-6 mt-16">
        <p>Data provided by Marvel. © 2025 MARVEL</p>
        <p className="text-sm mt-2">
          This application is powered by the Marvel API
        </p>
      </footer>
    </div>
  );
};

export default Index;
