
import React from 'react';

const HeroLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-wrap-blue to-black flex items-center justify-center z-30">
      <div className="text-center text-white">
        <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
        <p>Loading stunning vehicle images...</p>
      </div>
    </div>
  );
};

export default HeroLoader;
