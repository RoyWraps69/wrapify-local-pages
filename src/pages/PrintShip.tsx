
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import PrintShipFeatures from '@/components/print-ship/PrintShipFeatures';
import PrintShipSEO from '@/components/print-ship/PrintShipSEO';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import InitImageObserver from '@/components/utils/ImageObserver';

const PrintShip = () => {
  // Use the scroll animation hook for animated elements
  useScrollAnimation();
  
  // Updated hero background with commercial image
  const heroBackgroundImage = '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png'; // Tesla Cybertruck camo wrap
  const commercialOverlayImage = '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png'; // Commercial fleet image
  
  // Verify image loads on component mount
  React.useEffect(() => {
    console.log("PrintShip - Hero background image:", heroBackgroundImage);
    console.log("PrintShip - Commercial overlay image:", commercialOverlayImage);
    
    const preloadImages = [heroBackgroundImage, commercialOverlayImage];
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => console.log(`Image loaded successfully: ${src}`);
      img.onerror = () => console.error(`ERROR: Image failed to load: ${src}`);
    });
  }, []);
  
  return (
    <>
      <PrintShipSEO />
      <InitImageObserver />
      <Navbar />
      <LazyMotion features={domAnimation}>
        <main>
          {/* Hero Section with Commercial Photography - Full Screen */}
          <section 
            className="min-h-screen w-full relative overflow-hidden flex items-center"
          >
            {/* Base background layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
            ></div>
            
            {/* Commercial overlay image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url('${commercialOverlayImage}')` }}
            ></div>
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            
            <div className="container mx-auto px-4 text-center relative z-10">
              <m.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white animate-on-scroll fade-up"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Premium Vehicle Wraps, <br />
                <span className="text-wrap-red">Delivered Nationwide</span>
              </m.h1>
              <m.p 
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto backdrop-blur-sm bg-black/30 p-4 rounded-lg animate-on-scroll fade-up"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Chicago-quality design and printing, shipped directly to your door or preferred installer anywhere in the United States.
              </m.p>
            </div>
          </section>
          
          {/* Main Content */}
          <PrintShipSection />
          
          {/* Features Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4 animate-on-scroll fade-up">
                  Why Choose Our Print & Ship Service?
                </h2>
                <p className="text-wrap-grey text-lg max-w-3xl mx-auto animate-on-scroll fade-up">
                  We combine premium materials, expert design, and nationwide accessibility to deliver exceptional vehicle wraps wherever you are.
                </p>
              </div>
              
              <PrintShipFeatures />
            </div>
          </section>
        </main>
      </LazyMotion>
      <Footer />
    </>
  );
};

export default PrintShip;
