
import React from 'react';
import { cn } from '@/lib/utils';
import HeroHeadline from './HeroHeadline';
import HeroServiceFeatures from './HeroServiceFeatures';
import HeroCTAButtons from './HeroCTAButtons';
import HeroFooterInfo from './HeroFooterInfo';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

interface HeroContentContainerProps {
  isVisible: boolean;
  townName: string;
  scrollToServices: () => void;
}

const HeroContentContainer: React.FC<HeroContentContainerProps> = ({
  isVisible,
  townName,
  scrollToServices
}) => {
  return (
    <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10 py-20">
      <div className="max-w-3xl mt-16 md:mt-0 text-center pb-28">
        <div className={cn(
          "transition-all duration-1000 transform backdrop-blur-sm bg-black/30 p-6 rounded-lg",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          {/* Big WRAPPING THE WORLD logo - with reduced size and object-contain to maintain aspect ratio */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
              alt="WRAPPING THE WORLD" 
              className="w-56 h-auto max-w-full animate-fade-in-down drop-shadow-lg object-contain"
            />
          </div>
          
          <HeroHeadline townName={townName} />
          
          <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
            <span className="font-bold">WRAPPING THE WORLD</span> offers premier car wrapping and protection services in {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
          </p>
          
          <HeroServiceFeatures />
          
          <HeroCTAButtons townName={townName} />
          
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-wrap-blue text-white rounded-md shadow-lg hover:bg-wrap-blue/90 transition-all animate-float-subtle"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Our {townName} Design Team</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <HeroFooterInfo townName={townName} scrollToServices={scrollToServices} />
        </div>
      </div>
    </div>
  );
};

export default HeroContentContainer;
