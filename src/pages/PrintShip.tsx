
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import PrintShipSEO from '@/components/print-ship/PrintShipSEO';
import { LazyMotion, domAnimation } from 'framer-motion';
import InitImageObserver from '@/components/utils/ImageObserver';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import HeroSection from '@/components/print-ship/hero/HeroSection';
import TestimonialSection from '@/components/print-ship/sections/TestimonialSection';
import CTASection from '@/components/print-ship/sections/CTASection';
import FeaturesSection from '@/components/print-ship/sections/FeaturesSection';

const PrintShip = () => {
  return (
    <>
      <PrintShipSEO />
      <InitImageObserver />
      <Navbar />
      <ShoppingCartProvider>
        <LazyMotion features={domAnimation}>
          <main>
            {/* Hero Section */}
            <HeroSection />
            
            {/* Main Content */}
            <PrintShipSection />
            
            {/* Features Section */}
            <FeaturesSection />
            
            {/* Testimonial Section */}
            <TestimonialSection />
            
            {/* CTA Section */}
            <CTASection />
          </main>
        </LazyMotion>
      </ShoppingCartProvider>
      <Footer />
    </>
  );
};

export default PrintShip;
