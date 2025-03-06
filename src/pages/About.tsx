
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';

const About = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="About Chicago Fleet Wraps | Expert Vehicle Wrapping & Protection Services"
        pageDescription="Learn about Chicago Fleet Wraps, the premier provider of professional vehicle wrapping, ceramic coatings, paint protection film, fleet graphics, and commercial vehicle branding in Chicago and surrounding areas."
        pageUrl="https://chicagofleetwraps.com/about"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Chicago's Leading Vehicle Wrap & Protection Specialists
          </h1>
          <div className="max-w-3xl">
            <p className="text-wrap-grey text-lg mb-6">
              <strong>Chicago Fleet Wraps</strong> is the premier destination for professional vehicle wrapping and protection services across the Chicago metropolitan area. 
              With over a decade of industry-leading experience and a steadfast commitment to excellence, we specialize in transforming commercial fleets and personal vehicles 
              with high-quality vinyl wraps and ceramic coatings that make a lasting impression, maximize your brand visibility, and protect your investment.
            </p>
            <p className="text-wrap-grey text-lg mb-6">
              Our team of professional installers uses only premium materials from industry leaders, ensuring 
              your vehicle wrap and ceramic coating not only looks stunning but also withstands Chicago's challenging weather conditions. We combine cutting-edge printing technology with 
              precision installation techniques to deliver vehicle graphics and protection that exceed expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">Our Vehicle Wrap Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Commercial fleet wrapping services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Full color change vehicle wraps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Partial wraps and custom graphics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Food truck and specialty vehicle wraps</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Mobile billboard advertising solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">Our Protection Services</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Nano-ceramic coating application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Self-healing paint protection film</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Hydrophobic surface treatments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>UV and environmental protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wrap-red mr-2">✓</span>
                    <span>Stone chip and road debris protection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <p className="text-wrap-grey text-lg mb-6">
              What sets us apart is our comprehensive approach to vehicle branding and protection. From initial concept and professional design to meticulous installation and 
              follow-up care, we handle every aspect of your project with attention to detail and customer-focused service.
            </p>
            <p className="text-wrap-grey text-lg mb-12">
              Whether you need complete fleet branding solutions for your Chicago business vehicles, custom color change wraps for personal vehicles, ceramic coating protection, paint protection film, or 
              partial wraps and decals, our expertise and professional service ensure outstanding, head-turning results with lasting protection every time.
            </p>
          </div>
        </div>
        <TestimonialSection townName="Chicago" />
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default About;
