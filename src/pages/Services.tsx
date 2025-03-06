
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';

const Services = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Professional Vehicle Wrapping, Ceramic Coating & Paint Protection | Wrapping The World"
        pageDescription="Discover our premium vehicle wrapping and protection services including commercial fleet branding, ceramic coatings, paint protection film, color change wraps, and custom vehicle graphics for businesses throughout Chicago."
        pageUrl="https://wrappingtheworld.com/services"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Professional Vehicle Wrapping, Ceramic Coating & Paint Protection Services in Chicago
          </h1>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            At Wrapping The World, we deliver industry-leading vehicle transformation and protection solutions designed to enhance and shield your vehicles. 
            Our comprehensive range of services includes commercial fleet branding, nano-ceramic paint protection, self-healing paint protection film, custom vehicle graphics, and premium color change wraps for businesses and individuals throughout Chicago and the surrounding suburbs.
          </p>
          <p className="text-wrap-grey text-lg mb-6 max-w-3xl">
            Using only the highest quality 3M and Avery Dennison vinyl materials and advanced ceramic coating technologies, our professional installation team ensures durable, weather-resistant finishes that protect your vehicle's original paint while delivering maximum visual impact and long-lasting protection. 
            From concept to completion, we provide end-to-end vehicle enhancement solutions tailored specifically to your business needs and protection requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Vehicle Wrapping Services</h2>
              <ul className="space-y-2 text-wrap-grey">
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Commercial fleet wraps for business vehicles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Full color change vehicle wraps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Partial wraps and vehicle graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Custom designs for food trucks and specialty vehicles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Construction and service vehicle branding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Mobile billboard advertising solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Vehicle Protection Services</h2>
              <ul className="space-y-2 text-wrap-grey">
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Hydrophobic ceramic coating protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Self-healing paint protection film (clear bra)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Stone chip and road debris protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>UV and environmental damage prevention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Chemical-resistant surface treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-wrap-red mr-2">✓</span>
                  <span>Winter protection against road salt and ice</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl">
            Whether you need complete fleet branding solutions for your Chicago business vehicles, advanced ceramic coating protection, self-healing paint protection film, custom color change wraps for personal vehicles, or 
            partial wraps and decals, our expertise and professional service ensure outstanding, head-turning results with superior protection every time.
          </p>
        </div>
        <ServicesSection townName="Chicago" />
        <BenefitsSection townName="Chicago" />
        <ProcessSection townName="Chicago" />
        <FAQSection townName="Chicago" />
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Services;
