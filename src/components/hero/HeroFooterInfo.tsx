
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroFooterInfoProps {
  townName: string;
  scrollToServices: () => void;
}

const HeroFooterInfo: React.FC<HeroFooterInfoProps> = ({
  townName,
  scrollToServices
}) => {
  return (
    <>
      <div className="mt-8 flex flex-wrap items-center justify-center text-white/70">
        <span className="text-sm neon-glow">Serving {townName} and nearby areas</span>
        <span className="mx-3 hidden sm:inline">•</span>
        <span className="text-sm neon-glow">Quality <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-blue transition-colors underline">3M</a> & <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyber-red transition-colors underline">Avery Dennison</a> Materials</span>
        <span className="mx-3 hidden sm:inline">•</span>
        <span className="text-sm neon-glow">5+ Years Durability</span>
      </div>
      
      {/* Enhanced scroll indicator with cyberpunk styling */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform" 
        onClick={scrollToServices}
      >
        <div className="p-3 rounded-full neo-glass border border-white/20 animate-float-subtle shadow-lg group relative overflow-hidden light-streak">
          <ChevronDown className="text-white group-hover:text-cyber-blue transition-colors" size={24} />
        </div>
      </div>
    </>
  );
};

export default HeroFooterInfo;
