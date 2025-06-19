
import { useState } from 'react';

interface MarvelHero {
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

export const useMarvelAPI = () => {
  const [heroes, setHeroes] = useState<MarvelHero[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // For demo purposes, we'll use mock data since API keys need to be set up
  // In a real implementation, you would use the Marvel API with proper authentication
  const mockHeroes: MarvelHero[] = [
    {
      id: 1,
      name: "Spider-Man",
      description: "Bitten by a radioactive spider, Peter Parker's spider abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles.",
      thumbnail: { path: "https://images.unsplash.com/photo-1635805737707-575885ab0820", extension: "jpg" },
      comics: { available: 4043, items: [{ name: "Amazing Spider-Man" }, { name: "Ultimate Spider-Man" }] },
      series: { available: 334, items: [{ name: "The Amazing Spider-Man" }, { name: "Marvel Team-Up" }] },
      events: { available: 29, items: [{ name: "Civil War" }, { name: "Secret Wars" }] }
    },
    {
      id: 2,
      name: "Iron Man",
      description: "Tony Stark, genius billionaire inventor, built a powered suit of armor to escape captivity. Now he uses the technology to protect the world as Iron Man.",
      thumbnail: { path: "https://images.unsplash.com/photo-1608889175123-8ee362201f81", extension: "jpg" },
      comics: { available: 2542, items: [{ name: "Iron Man" }, { name: "Invincible Iron Man" }] },
      series: { available: 278, items: [{ name: "Iron Man" }, { name: "Avengers" }] },
      events: { available: 31, items: [{ name: "Civil War" }, { name: "Infinity War" }] }
    },
    {
      id: 3,
      name: "Captain America",
      description: "Steve Rogers volunteered to receive the experimental super-soldier serum. Enhanced to the pinnacle of human physical potential and armed with an unbreakable shield, he became Captain America.",
      thumbnail: { path: "https://images.unsplash.com/photo-1635863138275-d9864d937c7b", extension: "jpg" },
      comics: { available: 2456, items: [{ name: "Captain America" }, { name: "Captain America: Winter Soldier" }] },
      series: { available: 256, items: [{ name: "Captain America" }, { name: "Avengers" }] },
      events: { available: 28, items: [{ name: "Civil War" }, { name: "Winter Soldier" }] }
    },
    {
      id: 4,
      name: "Thor",
      description: "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir.",
      thumbnail: { path: "https://images.unsplash.com/photo-1578662996442-48f60103fc96", extension: "jpg" },
      comics: { available: 1876, items: [{ name: "Thor" }, { name: "Journey into Mystery" }] },
      series: { available: 198, items: [{ name: "Thor" }, { name: "Avengers" }] },
      events: { available: 25, items: [{ name: "Ragnarok" }, { name: "Infinity War" }] }
    },
    {
      id: 5,
      name: "Black Widow",
      description: "Natasha Romanoff is a world-class athlete, gymnast, acrobat, marksman, and tactician. She uses her skills and Widow's Bite to her advantage in battle.",
      thumbnail: { path: "https://images.unsplash.com/photo-1596727147705-61a532a659bd", extension: "jpg" },
      comics: { available: 743, items: [{ name: "Black Widow" }, { name: "Avengers" }] },
      series: { available: 89, items: [{ name: "Black Widow" }, { name: "Marvel Knights" }] },
      events: { available: 18, items: [{ name: "Civil War" }, { name: "Secret Wars" }] }
    },
    {
      id: 6,
      name: "Hulk",
      description: "Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk.",
      thumbnail: { path: "https://images.unsplash.com/photo-1611604548018-d56bbd85d681", extension: "jpg" },
      comics: { available: 1623, items: [{ name: "Incredible Hulk" }, { name: "Savage Hulk" }] },
      series: { available: 145, items: [{ name: "The Incredible Hulk" }, { name: "Avengers" }] },
      events: { available: 22, items: [{ name: "Planet Hulk" }, { name: "World War Hulk" }] }
    }
  ];

  const searchHeroes = async (term: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Filter mock data based on search term
      const filteredHeroes = term 
        ? mockHeroes.filter(hero => 
            hero.name.toLowerCase().includes(term.toLowerCase())
          )
        : mockHeroes;
      
      setHeroes(filteredHeroes);
    } catch (err) {
      setError('Failed to fetch heroes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getHeroDetails = async (heroId: number) => {
    const hero = mockHeroes.find(h => h.id === heroId);
    return hero || null;
  };

  return {
    heroes,
    loading,
    error,
    searchHeroes,
    getHeroDetails
  };
};
