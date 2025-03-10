
import React from 'react';
import { cn } from '@/lib/utils';
import HeroHeadline from './HeroHeadline';
import HeroServiceFeatures from './HeroServiceFeatures';
import HeroCTAButtons from './HeroCTAButtons';
import HeroFooterInfo from './HeroFooterInfo';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, MapPin, Camera } from 'lucide-react';

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
          {/* Updated logo with better visibility against different backgrounds */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
              alt="WRAPPING THE WORLD - Vehicle Wrap Services Near You" 
              className="w-56 h-auto max-w-full animate-fade-in-down drop-shadow-lg object-contain"
            />
          </div>
          
          <HeroHeadline townName={townName} />
          
          <p className="text-lg text-white mb-6 max-w-2xl mx-auto">
            <span className="font-bold">WRAPPING THE WORLD</span> offers premier vehicle wrapping and protection services near {townName}. From business fleet branding and color change wraps to ceramic coatings and paint protection film, we transform and protect cars with quality materials and expert installation.
          </p>
          
          <HeroServiceFeatures />
          
          {/* Customer Photo Gallery Preview */}
          <div className="my-6 flex justify-center">
            <div className="flex items-center space-x-1 overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm p-1.5">
              <div className="w-16 h-16 rounded overflow-hidden">
                <img 
                  src="/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png" 
                  alt="Customer vehicle wrap" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded overflow-hidden">
                <img 
                  src="/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png" 
                  alt="Customer vehicle wrap" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded overflow-hidden">
                <img 
                  src="/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png" 
                  alt="Customer vehicle wrap" 
                  className="w-full h-full object-cover"
                />
              </div>
              <Link 
                to="/gallery" 
                className="w-16 h-16 rounded bg-wrap-blue/70 flex flex-col items-center justify-center text-white hover:bg-wrap-blue transition-colors"
              >
                <Camera className="w-5 h-5 mb-1" />
                <span className="text-xs">View All</span>
              </Link>
            </div>
          </div>
          
          <HeroCTAButtons townName={townName} />
          
          <div className="mt-8">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-wrap-blue text-white rounded-md shadow-lg hover:bg-wrap-blue/90 transition-all animate-float-subtle"
            >
              <Mail className="w-5 h-5" />
              <span>Find Vehicle Wrap Experts Near {townName}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="mt-4">
            <Link 
              to="/locations" 
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-wrap-red/90 text-white rounded-md shadow-lg hover:bg-wrap-red transition-all animate-float-subtle mt-3"
            >
              <MapPin className="w-5 h-5" />
              <span>Looking for "Vehicle Wraps Near Me"?</span>
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
