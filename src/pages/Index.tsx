
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import FAQSection from '@/components/FAQSection';
import NationwideSection from '@/components/nationwide/NationwideSection';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import { getAllTowns } from '@/utils/townData';
import { Helmet } from 'react-helmet-async';
import ChatbotWithSchema from '@/components/chatbot/ChatbotWithSchema';

const Index = () => {
  console.log("Index component rendering");
  const [showTowns, setShowTowns] = useState(false);
  
  useEffect(() => {
    console.log("Index component mounted");
  }, []);
  
  const towns = getAllTowns();
  console.log("Towns data:", towns);
  
  // Create list of town names for SEO
  const topTownNames = towns.slice(0, 15).map(town => town.name).join(", ");
  
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com" />
        <meta name="keywords" content={`vehicle wraps Chicago, car wraps Chicago, fleet wraps Chicago, ceramic coating Chicago, paint protection film Chicago, commercial vehicle wraps, mobile advertising, business vehicle branding, ${topTownNames} vehicle wraps`} />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago" />
        <meta name="geo.position" content="41.8781;-87.6298" />
        <meta name="ICBM" content="41.8781, -87.6298" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <Navbar />
      <main>
        <DynamicHeroSection townName="Chicago" />
        <ServicesSection townName="Chicago" />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                Chicago's Premier Vehicle Transformation Specialists
              </h2>
              <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
                Discover why businesses across Chicago and surrounding suburbs trust us with their vehicle branding and protection needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Premium Materials</h3>
                <p className="text-wrap-grey">
                  We use only top-quality 3M and Avery Dennison vinyl wraps and industry-leading ceramic coating formulations for outstanding durability and finish.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Expert Installation</h3>
                <p className="text-wrap-grey">
                  Our professional installation team ensures flawless application of vehicle wraps, ceramic coatings, and paint protection film every time.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Long-Lasting Protection</h3>
                <p className="text-wrap-grey">
                  Our vehicle wraps and ceramic coatings are engineered to withstand Chicago's harsh weather conditions for years of durable protection.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Custom Design Services</h3>
                <p className="text-wrap-grey">
                  From concept to completion, our design team creates eye-catching custom vehicle graphics that capture attention and build brand awareness.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Fleet Branding Solutions</h3>
                <p className="text-wrap-grey">
                  Transform your business vehicles into mobile billboards with our comprehensive fleet branding packages and commercial vehicle wrapping services.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Satisfaction Guaranteed</h3>
                <p className="text-wrap-grey">
                  We stand behind our ceramic coatings, paint protection film, and vehicle wraps with comprehensive warranties and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialSection townName="Chicago" />
        
        <NationwideSection />
        
        <PrintShipSection />
        
        <FAQSection townName="Chicago" />
        
        <section className="py-16 bg-gray-50" id="service-areas">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-semibold text-wrap-blue mb-4">Serving Chicago and Surrounding Areas</h2>
            <p className="text-wrap-grey text-lg mb-6 max-w-2xl mx-auto">Professional vehicle wrapping, ceramic coating, and paint protection services available throughout the Chicago metropolitan area.</p>
            
            <button 
              onClick={() => setShowTowns(!showTowns)}
              className="inline-flex items-center text-wrap-blue hover:text-wrap-red mb-8 transition-colors text-sm font-medium"
              aria-expanded={showTowns}
              aria-controls="town-list"
            >
              <span>{showTowns ? 'Hide' : 'View'} Service Locations</span>
              <svg className={`ml-1 w-4 h-4 transition-transform ${showTowns ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div id="town-list" className={showTowns ? 'block' : 'hidden'}>
              <p className="text-wrap-grey mb-4">Click on any location to view specific vehicle wrapping and ceramic coating services for that area:</p>
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
            </div>
          </div>
        </section>
      </main>
      <ChatbotWithSchema initialMessage="Hello! How can I help you with vehicle wraps or ceramic coatings today? Ask me about services, pricing, or locations near you." />
      <Footer />
    </>
  );
};

export default Index;
