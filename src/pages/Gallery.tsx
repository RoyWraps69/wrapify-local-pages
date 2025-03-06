
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import GalleryShowcase from '@/components/GalleryShowcase';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Chicago Vehicle Wrap Portfolio & Project Gallery
          </h1>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl mx-auto">
            Explore our comprehensive portfolio of professional vehicle wraps and fleet graphics completed for businesses throughout Chicago and the surrounding areas. From small business branding to large commercial fleet transformations, our gallery showcases the quality and creativity Chicago Fleet Wraps brings to every project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/services/commercial-fleet-wraps" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
              Commercial Fleet Wraps
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <Link to="/services/color-change-wraps" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
              Color Change Wraps
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <Link to="/services/vehicle-graphics" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
              Custom Vehicle Graphics
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
            <Link to="/services/ceramic-coatings" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
              Ceramic Coatings
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl mx-auto">
            Each project in our gallery represents our commitment to excellence in vehicle wrapping, featuring premium materials from <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">3M</a> and <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">Avery Dennison</a>, precision installation, and attention to detail. Browse through various categories including commercial fleet branding, color change wraps, custom graphics, and partial vehicle wraps to find inspiration for your next vehicle transformation.
          </p>
        </div>
        
        {/* Using the GalleryShowcase component without the item limit to show all projects */}
        <GalleryShowcase townName="Chicago" />
        
        <div className="container mx-auto px-4 text-center my-16">
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-wrap-grey text-lg mb-8 max-w-3xl mx-auto">
            Whether you're looking to brand your business fleet, change the color of your personal vehicle, or protect your investment with ceramic coating, our team of experts is here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
        
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
