
import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { ShoppingCart, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartButton from '@/components/print-ship/shopping-cart/CartButton';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const HeroSection: React.FC = () => {
  // Use the scroll animation hook for animated elements
  useScrollAnimation();
  
  // Hero background images 
  const heroBackgroundImage = '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png'; // Tesla Cybertruck camo wrap
  const commercialOverlayImage = '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png'; // Commercial fleet image
  const newHeroBackgroundImage = '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png'; // Using this existing image for better visibility
  
  // Verify image loads on component mount
  useEffect(() => {
    console.log("PrintShip - Hero background images being loaded:");
    
    const preloadImages = [heroBackgroundImage, commercialOverlayImage, newHeroBackgroundImage];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`Image loaded successfully: ${src}`);
      img.onerror = () => console.error(`ERROR: Image failed to load: ${src}`);
    });
  }, []);
  
  return (
    <section className="min-h-screen w-full relative overflow-hidden flex items-center">
      {/* Primary background image */}
      <div className="absolute inset-0 bg-black">
        <img 
          src={newHeroBackgroundImage} 
          alt="Vehicle wrap being professionally installed" 
          className="w-full h-full object-cover object-center opacity-80"
        />
      </div>
      
      {/* Additional overlay image with blend mode for interesting effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-color-burn"></div>
      
      {/* Dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      
      {/* Cart Button positioned absolute in top-right corner */}
      <div className="absolute top-4 right-4 z-10">
        <CartButton />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 py-10">
        <m.div
          className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <m.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Premium Vehicle Wraps <br />
            <span className="bg-gradient-to-r from-wrap-red to-wrap-blue bg-clip-text text-transparent">
              Delivered Nationwide
            </span>
          </m.h1>
          
          <m.p 
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chicago-quality design and printing, shipped directly to your door 
            or preferred installer anywhere in the United States.
          </m.p>
          
          <m.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="#print-ship" className="inline-flex items-center justify-center gap-2 bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md font-medium transition-all transform hover:scale-[1.02]">
              <ShoppingCart className="h-5 w-5" />
              Build Your Wrap Package
            </a>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium backdrop-blur-sm border border-white/10 transition-all">
              <Phone className="h-5 w-5" />
              Request a Consultation
            </Link>
          </m.div>
          
          <m.div 
            className="text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Trusted by <span className="font-semibold">3,500+</span> customers nationwide
          </m.div>
        </m.div>

        <m.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="animate-bounce">
            <a href="#print-ship" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white">
              <ArrowRight className="h-5 w-5 rotate-90" />
            </a>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
