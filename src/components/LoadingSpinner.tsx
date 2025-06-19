
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-white/20 border-t-red-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-yellow-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      <p className="text-white/80 mt-6 text-lg font-medium">Loading Marvel Heroes...</p>
      <p className="text-white/60 mt-2 text-sm">Assembling the greatest heroes in the universe</p>
    </div>
  );
};
