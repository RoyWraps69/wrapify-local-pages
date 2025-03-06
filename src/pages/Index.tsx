
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import SEOSchema from '@/components/SEOSchema';
import { getAllTowns } from '@/utils/townData';

const Index = () => {
  const towns = getAllTowns();
  
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Chicago Fleet Wraps | Professional Vehicle Wrapping Services"
        pageDescription="Transform your vehicles with premium wraps from Chicago Fleet Wraps. Commercial fleet wraps, color change wraps, and custom graphics for businesses across Chicago."
        pageUrl="https://chicagofleetwraps.com"
      />
      <Navbar />
      <main>
        <HeroSection townName="Chicago" />
        <ServicesSection townName="Chicago" />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif font-semibold text-wrap-blue mb-4">Serving Chicago and Surrounding Areas</h2>
            <p className="text-wrap-grey text-lg mb-12 max-w-2xl mx-auto">Professional vehicle wrapping services available throughout the Chicago metropolitan area.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {towns.map((town) => (
                <Link 
                  key={town.id}
                  to={`/locations/${town.id}`}
                  className="p-6 rounded-lg bg-white shadow-soft hover:bg-wrap-blue hover:text-white group transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{town.name}</h3>
                  <p className="text-wrap-grey group-hover:text-white/80">
                    Professional vehicle wraps in {town.name}
                  </p>
                  <div className="mt-4 text-sm text-wrap-grey/60 group-hover:text-white/60">
                    {town.distance} miles from Chicago
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
