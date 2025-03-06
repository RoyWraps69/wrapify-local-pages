
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import BenefitsSection from '@/components/BenefitsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import DynamicHeroSection from '@/components/DynamicHeroSection';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Services = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Professional Vehicle Wrapping, Ceramic Coating & Paint Protection | Wrapping The World"
        pageDescription="Discover our premium vehicle wrapping and protection services including commercial fleet branding, ceramic coatings, paint protection film, color change wraps, and custom vehicle graphics for businesses throughout Chicago."
        pageUrl="https://wrappingtheworld.com/services"
      />
      
      <Helmet>
        <meta name="keywords" content="vehicle wraps Chicago, commercial fleet wraps, ceramic coating Chicago, paint protection film, color change wraps, 3M vehicle wraps, Avery Dennison wraps, business vehicle branding, car wrap installation, mobile advertising Chicago, vehicle graphics Chicago, automotive paint protection, hydrophobic coating, car wrap pricing Chicago, premium vehicle wraps, custom car wraps, vinyl vehicle wrap, food truck wraps Chicago, construction vehicle branding, service van wraps" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/services" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Professional Vehicle Wrapping & Protection Services | Wrapping The World" />
        <meta property="og:description" content="Transform your vehicles with premium wraps, ceramic coatings, and paint protection film. Chicago's leading vehicle transformation specialists for businesses and individuals." />
        <meta property="og:url" content="https://wrappingtheworld.com/services" />
        <meta property="og:image" content="https://wrappingtheworld.com/og-services-image.jpg" />
        <meta property="og:image:alt" content="Professional vehicle wrap installation in Chicago" />
        <meta property="og:site_name" content="Wrapping The World" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Vehicle Wrapping & Protection Services | Wrapping The World" />
        <meta name="twitter:description" content="Transform your vehicles with premium wraps, ceramic coatings, and paint protection film. Chicago's leading vehicle transformation specialists for businesses and individuals." />
        <meta name="twitter:image" content="https://wrappingtheworld.com/twitter-services-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Wrapping The World" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago" />
        <meta name="geo.position" content="41.8781;-87.6298" />
        <meta name="ICBM" content="41.8781, -87.6298" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>
      
      <Navbar />
      <main itemScope itemType="https://schema.org/Service">
        <DynamicHeroSection townName="Chicago" />
        
        <div className="container mx-auto px-4 mb-16 pt-24">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6 animate-on-scroll fade-up" itemProp="name">
            Professional Vehicle Wrapping, Ceramic Coating & Paint Protection Services in Chicago
          </h1>
          <div itemProp="description">
            <p className="text-wrap-grey text-lg mb-6 max-w-3xl animate-on-scroll fade-up">
              At <span itemProp="provider" itemScope itemType="https://schema.org/LocalBusiness"><span itemProp="name">Wrapping The World</span></span>, we deliver industry-leading vehicle transformation and protection solutions designed to enhance and shield your vehicles. 
              Our comprehensive range of services includes commercial fleet branding, nano-ceramic paint protection, self-healing paint protection film, custom vehicle graphics, and premium color change wraps for businesses and individuals throughout Chicago and the surrounding suburbs.
            </p>
            <p className="text-wrap-grey text-lg mb-6 max-w-3xl animate-on-scroll fade-up">
              Using only the highest quality <strong>3M and Avery Dennison vinyl materials</strong> and advanced ceramic coating technologies, our professional installation team ensures durable, weather-resistant finishes that protect your vehicle's original paint while delivering maximum visual impact and long-lasting protection. 
              From concept to completion, we provide end-to-end vehicle enhancement solutions tailored specifically to your business needs and protection requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl tilt-card animate-on-scroll fade-right" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="itemListOrder" content="Unordered" />
              <meta itemProp="numberOfItems" content="6" />
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4" itemProp="name">Vehicle Wrapping Services</h2>
              <ul className="space-y-2 text-wrap-grey">
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="1" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Commercial fleet wraps for business vehicles</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="2" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Full color change vehicle wraps</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="3" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Partial wraps and vehicle graphics</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="4" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Custom designs for food trucks and specialty vehicles</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="5" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Construction and service vehicle branding</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="6" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Mobile billboard advertising solutions</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl tilt-card animate-on-scroll fade-left" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="itemListOrder" content="Unordered" />
              <meta itemProp="numberOfItems" content="6" />
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4" itemProp="name">Vehicle Protection Services</h2>
              <ul className="space-y-2 text-wrap-grey">
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="1" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Hydrophobic ceramic coating protection</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="2" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Self-healing paint protection film (clear bra)</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="3" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Stone chip and road debris protection</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="4" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">UV and environmental damage prevention</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="5" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Chemical-resistant surface treatments</span>
                </li>
                <li className="flex items-start" itemScope itemType="https://schema.org/ListItem">
                  <meta itemProp="position" content="6" />
                  <span className="text-wrap-red mr-2">✓</span>
                  <span itemProp="name">Winter protection against road salt and ice</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-wrap-grey text-lg mb-12 max-w-3xl animate-on-scroll fade-up">
            Whether you need complete fleet branding solutions for your Chicago business vehicles, advanced ceramic coating protection, self-healing paint protection film, custom color change wraps for personal vehicles, or 
            partial wraps and decals, our expertise and professional service ensure outstanding, head-turning results with superior protection every time.
          </p>
          
          <div className="mt-8 mb-16">
            <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
              Service Areas in Chicago and Surrounding Suburbs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">
              <Link to="/locations/chicago" className="text-wrap-blue hover:text-wrap-red transition-colors">Chicago</Link>
              <Link to="/locations/evanston" className="text-wrap-blue hover:text-wrap-red transition-colors">Evanston</Link>
              <Link to="/locations/oak-park" className="text-wrap-blue hover:text-wrap-red transition-colors">Oak Park</Link>
              <Link to="/locations/naperville" className="text-wrap-blue hover:text-wrap-red transition-colors">Naperville</Link>
              <Link to="/locations/schaumburg" className="text-wrap-blue hover:text-wrap-red transition-colors">Schaumburg</Link>
              <Link to="/locations/arlington-heights" className="text-wrap-blue hover:text-wrap-red transition-colors">Arlington Heights</Link>
              <Link to="/locations/skokie" className="text-wrap-blue hover:text-wrap-red transition-colors">Skokie</Link>
              <Link to="/locations/des-plaines" className="text-wrap-blue hover:text-wrap-red transition-colors">Des Plaines</Link>
              <Link to="/locations/palatine" className="text-wrap-blue hover:text-wrap-red transition-colors">Palatine</Link>
              <Link to="/locations/orland-park" className="text-wrap-blue hover:text-wrap-red transition-colors">Orland Park</Link>
            </div>
          </div>
        </div>
        
        <div id="services-section" className="services-section">
          <ServicesSection townName="Chicago" />
        </div>
        <BenefitsSection townName="Chicago" />
        <ProcessSection townName="Chicago" />
        
        {/* Enhanced FAQ Section with Schema.org markup */}
        <section className="py-16 bg-gray-50" id="vehicle-wrap-faq">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                Frequently Asked Questions About Vehicle Wrapping
              </h2>
              <p className="text-wrap-grey text-lg">
                Common questions about our professional vehicle wrapping and protection services
              </p>
            </div>
            <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
              <div className="mb-6 p-5 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
                <h3 className="text-xl font-medium text-wrap-blue mb-2" itemProp="name">How much does it cost to wrap a vehicle in Chicago?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-wrap-grey">
                      Vehicle wrap pricing in Chicago varies based on several factors: vehicle size, wrap complexity, material quality, and design requirements. For commercial fleet wraps, pricing typically ranges from $2,500-$5,000 per vehicle. Premium color change wraps range from $3,000-$6,000 depending on the vehicle. Partial wraps start at $1,200. Every project is unique, so we provide free, detailed quotes specific to your requirements.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 p-5 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
                <h3 className="text-xl font-medium text-wrap-blue mb-2" itemProp="name">How long do vehicle wraps last in Chicago's climate?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-wrap-grey">
                      Professionally installed vehicle wraps from Wrapping The World typically last 5-7 years in Chicago's varied climate. Our premium 3M and Avery Dennison vinyl materials are specifically engineered to withstand harsh Chicago winters, hot summers, road salt, and UV exposure. With proper maintenance and care, your vehicle wrap will maintain its vibrant appearance and promotional effectiveness throughout this period.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 p-5 bg-white rounded-lg shadow-md" itemScope itemType="https://schema.org/Question">
                <h3 className="text-xl font-medium text-wrap-blue mb-2" itemProp="name">Will a vehicle wrap damage my car's paint?</h3>
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <div itemProp="text">
                    <p className="text-wrap-grey">
                      No, our professionally installed vehicle wraps will not damage your car's original paint. In fact, high-quality vinyl wraps provide protection for your vehicle's factory paint from UV rays, minor scratches, and environmental contaminants. When properly removed by our Chicago experts, your original paint will remain in the same condition as when it was wrapped, often in better condition than exposed painted surfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <FAQSection townName="Chicago" />
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Services;
