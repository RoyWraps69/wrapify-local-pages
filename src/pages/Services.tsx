
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';

const Services = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Professional Vehicle & Fleet Wrapping Services | Chicago Fleet Wraps"
        pageDescription="Discover our premium vehicle wrapping services including commercial fleet branding, color change wraps, and custom vehicle graphics for businesses throughout Chicago."
        pageUrl="https://chicagofleetwraps.com/services"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Professional Vehicle Wrapping Services in Chicago
          </h1>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            At Chicago Fleet Wraps, we deliver industry-leading vehicle wrapping solutions designed to transform your vehicles into powerful marketing assets. 
            Our comprehensive range of services includes commercial fleet branding, custom vehicle graphics, and premium color change wraps for businesses and individuals throughout Chicago and the surrounding suburbs.
          </p>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            Using only the highest quality 3M and Avery Dennison vinyl materials, our certified installation team ensures durable, weather-resistant wraps that protect your vehicle's original paint while delivering maximum visual impact. 
            From concept to completion, we provide end-to-end vehicle branding solutions tailored specifically to your business needs and marketing objectives.
          </p>
        </div>
        <ServicesSection townName="Chicago" />
        <BenefitsSection townName="Chicago" />
        <ProcessSection townName="Chicago" />
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Services;
