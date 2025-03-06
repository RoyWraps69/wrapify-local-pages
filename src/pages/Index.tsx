
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
        <HeroSection 
          title="Professional Vehicle Wraps in Chicago" 
          subtitle="Transform your fleet with high-quality custom wraps" 
          townName="Chicago"
        />
        <ServicesSection intro="Our premium vehicle wrapping services" townName="Chicago" />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="section-title text-center mb-12">Serving Chicago and Surrounding Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {towns.map((town) => (
                <Link 
                  key={town.slug}
                  to={`/locations/${town.slug}`}
                  className="feature-card hover:bg-wrap-blue hover:text-white group transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{town.name}</h3>
                  <p className="text-wrap-grey group-hover:text-white/80">Professional vehicle wraps in {town.name}</p>
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
