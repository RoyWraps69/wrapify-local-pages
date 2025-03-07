import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import PrintShipFeatures from '@/components/print-ship/PrintShipFeatures';
import PrintShipSEO from '@/components/print-ship/PrintShipSEO';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import InitImageObserver from '@/components/utils/ImageObserver';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import CartButton from '@/components/print-ship/shopping-cart/CartButton';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrintShip = () => {
  // Use the scroll animation hook for animated elements
  useScrollAnimation();
  
  // Hero background images with updated approach
  const heroBackgroundImage = '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png'; // Tesla Cybertruck camo wrap
  const commercialOverlayImage = '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png'; // Commercial fleet image
  const newHeroBackgroundImage = '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png'; // Using this existing image for better visibility
  
  // Verify image loads on component mount
  React.useEffect(() => {
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
    <>
      <PrintShipSEO />
      <InitImageObserver />
      <Navbar />
      <ShoppingCartProvider>
        <LazyMotion features={domAnimation}>
          <main>
            {/* Hero Section with Commercial Photography - Full Screen */}
            <section 
              className="min-h-screen w-full relative overflow-hidden flex items-center"
            >
              {/* Primary background image - enhanced with proper image display */}
              <div 
                className="absolute inset-0 bg-black"
              >
                <img 
                  src={newHeroBackgroundImage} 
                  alt="Vehicle wrap being professionally installed" 
                  className="w-full h-full object-cover object-center opacity-80"
                />
              </div>
              
              {/* Additional overlay image with blend mode for interesting effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 mix-blend-color-burn"
              ></div>
              
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
            
            {/* Main Content */}
            <PrintShipSection />
            
            {/* Features Section */}
            <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4 animate-on-scroll fade-up">
                    Why Choose Our Print & Ship Service?
                  </h2>
                  <p className="text-wrap-grey text-lg max-w-3xl mx-auto animate-on-scroll fade-up">
                    We combine premium materials, expert design, and nationwide accessibility 
                    to deliver exceptional vehicle wraps wherever you are.
                  </p>
                </div>
                
                <PrintShipFeatures />
              </div>
            </section>
            
            {/* Testimonial Section */}
            <section className="py-16 bg-wrap-blue/5">
              <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gradient-to-br from-wrap-blue to-wrap-blue-dark p-8 text-white flex items-center">
                      <div>
                        <div className="flex mb-6">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <blockquote className="text-xl italic font-medium mb-4">
                          "The quality of the wrap was incredible! Materials arrived on time and well-packaged. 
                          My local installer was impressed by the print quality."
                        </blockquote>
                        <div className="font-semibold">
                          James Wilson
                          <span className="block text-sm opacity-75 font-normal mt-1">Tesla Model 3 Owner, Colorado</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Hear From Our Customers</h3>
                      <p className="text-wrap-grey mb-6">
                        Our Print & Ship service has helped vehicle owners nationwide transform their rides with premium wraps.
                      </p>
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-wrap-grey">Nationwide shipping to your door or preferred installer</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-wrap-grey">Same premium quality as our in-house installations</span>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-wrap-grey">Custom design services and detailed installation instructions</span>
                        </li>
                      </ul>
                      <div className="mt-6">
                        <Link to="/testimonials" className="text-wrap-blue font-medium hover:text-wrap-red flex items-center">
                          Read more testimonials <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-wrap-blue to-wrap-red text-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Vehicle?</h2>
                <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
                  Get started with our Print & Ship service today and receive your premium vehicle wrap materials anywhere in the United States.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#print-ship" className="inline-flex items-center justify-center gap-2 bg-white text-wrap-blue px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    <ShoppingCart className="h-5 w-5" />
                    Start Your Custom Order
                  </a>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium backdrop-blur-sm border border-white/10">
                    <Phone className="h-5 w-5" />
                    Speak with a Wrap Expert
                  </Link>
                </div>
              </div>
            </section>
          </main>
        </LazyMotion>
      </ShoppingCartProvider>
      <Footer />
    </>
  );
};

export default PrintShip;
