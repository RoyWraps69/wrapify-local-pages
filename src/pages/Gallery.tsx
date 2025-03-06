
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import GalleryShowcase from '@/components/GalleryShowcase';
import CTASection from '@/components/CTASection';

const Gallery = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Professional Vehicle Wrap Gallery | Chicago Fleet Wraps Portfolio"
        pageDescription="Browse our extensive gallery of commercial fleet wraps, custom vehicle graphics, and color change wraps. See real examples of our premium vehicle wrapping work across Chicago."
        pageUrl="https://chicagofleetwraps.com/gallery"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Chicago Vehicle Wrap Portfolio & Project Gallery
          </h1>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            Explore our comprehensive portfolio of professional vehicle wraps and fleet graphics completed for businesses throughout Chicago and the surrounding areas. From small business branding to large commercial fleet transformations, our gallery showcases the quality and creativity Chicago Fleet Wraps brings to every project.
          </p>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            Each project in our gallery represents our commitment to excellence in vehicle wrapping, featuring premium materials from 3M and Avery Dennison, precision installation, and attention to detail. Browse through various categories including commercial fleet branding, color change wraps, custom graphics, and partial vehicle wraps to find inspiration for your next vehicle transformation.
          </p>
          <GalleryShowcase townName="Chicago" />
        </div>
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
