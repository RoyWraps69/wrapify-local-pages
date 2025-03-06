
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';

const Services = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Professional Vehicle Wrapping Services | Chicago Fleet Wraps"
        pageDescription="Explore our comprehensive vehicle wrapping services including fleet branding, color changes, and custom graphics for businesses in Chicago."
        pageUrl="https://chicagofleetwraps.com/services"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Our Vehicle Wrap Services
          </h1>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            From full fleet branding to custom vehicle graphics, we offer professional vehicle wrapping solutions 
            tailored to your business needs in Chicago and surrounding areas.
          </p>
        </div>
        <ServicesSection townName="Chicago" />
        <BenefitsSection townName="Chicago" />
        <ProcessSection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Services;
