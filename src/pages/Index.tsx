
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import SEOSchema from '@/components/SEOSchema';
import { getAllTowns } from '@/utils/townData';

const Index = () => {
  console.log("Index component rendering");
  const [showTowns, setShowTowns] = useState(false);
  
  useEffect(() => {
    console.log("Index component mounted");
  }, []);
  
  const towns = getAllTowns();
  console.log("Towns data:", towns);
  
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
        <TestimonialSection townName="Chicago" />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-semibold text-wrap-blue mb-4">Serving Chicago and Surrounding Areas</h2>
            <p className="text-wrap-grey text-lg mb-6 max-w-2xl mx-auto">Professional vehicle wrapping services available throughout the Chicago metropolitan area.</p>
            
            <button 
              onClick={() => setShowTowns(!showTowns)}
              className="inline-flex items-center text-wrap-blue hover:text-wrap-red mb-8 transition-colors text-sm font-medium"
            >
              <span>{showTowns ? 'Hide' : 'View'} Service Locations</span>
              <svg className={`ml-1 w-4 h-4 transition-transform ${showTowns ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showTowns && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-left">
                {towns.map((town) => (
                  <Link 
                    key={town.id}
                    to={`/locations/${town.id}`}
                    className="p-3 text-sm rounded-md bg-white shadow-md hover:bg-wrap-blue hover:text-white group transition-all duration-300"
                  >
                    <p className="font-medium">{town.name}</p>
                    <p className="text-xs text-wrap-grey/80 group-hover:text-white/80">
                      {town.distance} miles from Chicago
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
