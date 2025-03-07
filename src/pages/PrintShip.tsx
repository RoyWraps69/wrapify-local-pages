
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import PrintShipFeatures from '@/components/print-ship/PrintShipFeatures';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const PrintShip = () => {
  return (
    <>
      <Helmet>
        <title>Print & Ship Vehicle Wraps Nationwide | Wrapping The World</title>
        <meta name="description" content="Custom vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for premium materials." />
        <meta name="keywords" content="vehicle wrap printing, nationwide vehicle wraps, DIY vehicle wraps, print and ship car wraps, commercial fleet wrap printing" />
        <link rel="canonical" href="https://wrappingtheworld.com/print-ship" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Helmet>
      
      <SEOSchema 
        townName="Nationwide"
        pageTitle="Print & Ship Vehicle Wraps Nationwide | Wrapping The World"
        pageDescription="Custom vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for premium materials."
        pageUrl="https://wrappingtheworld.com/print-ship"
      />
      
      <Navbar />
      <LazyMotion features={domAnimation}>
        <main>
          {/* Hero Section with Vehicle Photography Only */}
          <section 
            className="py-20 relative overflow-hidden"
            style={{
              backgroundImage: `url('/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <m.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Premium Vehicle Wraps, <br />
                <span className="text-wrap-red">Delivered Nationwide</span>
              </m.h1>
              <m.p 
                className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
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
                <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                  Why Choose Our Print & Ship Service?
                </h2>
                <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
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
