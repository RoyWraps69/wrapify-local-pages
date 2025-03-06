
import React from 'react';
import { Sparkles } from 'lucide-react';

interface HeroHeadlineProps {
  townName: string;
}

const HeroHeadline: React.FC<HeroHeadlineProps> = ({ townName }) => {
  return (
    <>
      {/* Animated badge with sparkle effect */}
      <div className="inline-flex items-center gap-1 px-4 py-1 bg-gradient-to-r from-wrap-red/80 to-wrap-red rounded-full text-sm font-medium mb-6 shadow-lg animate-pulse">
        <Sparkles className="text-white w-4 h-4" />
        <span className="text-white">Premium Car Wraps & Protection in {townName}</span>
        <Sparkles className="text-white w-4 h-4" />
      </div>
      
      {/* Enhanced headline with text gradient */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6 text-balance">
        <span className="bg-gradient-to-r from-white via-white to-wrap-red/90 bg-clip-text text-transparent">
          Top Car Wraps & Protection
        </span>
        <br />
        <span className="text-white">in {townName}, IL</span>
      </h1>
      
      {/* SEO-optimized subheading with town name */}
      <h2 className="text-xl md:text-2xl text-white/90 mb-2 font-light">
        <span className="italic">Chicago's Premier Vehicle Wrap Service Now in {townName}</span>
      </h2>
      
      {/* Nationwide service indicator */}
      <p className="text-lg text-white/80 font-light">
        <span className="underline decoration-wrap-red decoration-2 underline-offset-4">Now Serving Nationwide</span> with Print & Ship Options
      </p>
    </>
  );
};

export default HeroHeadline;
