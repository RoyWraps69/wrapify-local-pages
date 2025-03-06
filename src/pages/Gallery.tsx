
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import GalleryShowcase from '@/components/GalleryShowcase';

const Gallery = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap Gallery | Chicago Fleet Wraps"
        pageDescription="Browse our gallery of professional vehicle wraps and fleet graphics. See examples of our work across Chicago and surrounding areas."
        pageUrl="https://chicagofleetwraps.com/gallery"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Our Vehicle Wrap Gallery
          </h1>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            Browse through our portfolio of vehicle wraps and fleet graphics. From commercial fleet branding to custom color changes, 
            see how we've transformed vehicles across Chicago and surrounding areas.
          </p>
          <GalleryShowcase townName="Chicago" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
