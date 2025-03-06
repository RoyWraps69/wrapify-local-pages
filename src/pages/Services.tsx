
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
        pageTitle="Professional Vehicle Wrapping & Ceramic Coating Services | Chicago Fleet Wraps"
        pageDescription="Discover our premium vehicle wrapping services including commercial fleet branding, ceramic coatings, color change wraps, and custom vehicle graphics for businesses throughout Chicago."
        pageUrl="https://chicagofleetwraps.com/services"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Professional Vehicle Wrapping & Ceramic Coating Services in Chicago
          </h1>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            At Chicago Fleet Wraps, we deliver industry-leading vehicle wrapping and ceramic coating solutions designed to transform and protect your vehicles. 
            Our comprehensive range of services includes commercial fleet branding, ceramic paint protection, custom vehicle graphics, and premium color change wraps for businesses and individuals throughout Chicago and the surrounding suburbs.
          </p>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            Using only the highest quality 3M and Avery Dennison vinyl materials and advanced ceramic coating technologies, our certified installation team ensures durable, weather-resistant finishes that protect your vehicle's original paint while delivering maximum visual impact and long-lasting protection. 
            From concept to completion, we provide end-to-end vehicle enhancement solutions tailored specifically to your business needs and protection requirements.
          </p>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            Whether you need complete fleet branding solutions for your Chicago business vehicles, advanced ceramic coating protection, custom color change wraps for personal vehicles, or 
            partial wraps and decals, our expertise and professional service ensure outstanding, head-turning results with superior protection every time.
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
