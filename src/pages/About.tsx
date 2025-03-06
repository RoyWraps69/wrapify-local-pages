
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
        pageTitle="About Chicago Fleet Wraps | Expert Vehicle Wrapping Services"
        pageDescription="Learn about Chicago Fleet Wraps, the premier provider of professional vehicle wrapping, fleet graphics, and commercial vehicle branding in Chicago and surrounding areas."
        pageUrl="https://chicagofleetwraps.com/about"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            Chicago's Leading Vehicle Wrap Specialists
          </h1>
          <div className="max-w-3xl">
            <p className="text-wrap-grey text-lg mb-6">
              <strong>Chicago Fleet Wraps</strong> is the premier destination for professional vehicle wrapping services across the Chicago metropolitan area. 
              With over a decade of industry-leading experience and a steadfast commitment to excellence, we specialize in transforming commercial fleets and personal vehicles 
              with high-quality vinyl wraps that make a lasting impression and maximize your brand visibility.
            </p>
            <p className="text-wrap-grey text-lg mb-6">
              Our team of certified 3M Preferred and Avery Dennison certified installers uses only premium materials from industry leaders, ensuring 
              your vehicle wrap not only looks stunning but also withstands Chicago's challenging weather conditions. We combine cutting-edge printing technology with 
              precision installation techniques to deliver vehicle graphics that exceed expectations.
            </p>
            <p className="text-wrap-grey text-lg mb-6">
              What sets us apart is our comprehensive approach to vehicle branding. From initial concept and professional design to meticulous installation and 
              follow-up care, we handle every aspect of your fleet graphics project with attention to detail and customer-focused service.
            </p>
            <p className="text-wrap-grey text-lg mb-12">
              Whether you need complete fleet branding solutions for your Chicago business vehicles, custom color change wraps for personal vehicles, or 
              partial wraps and decals, our expertise and professional service ensure outstanding, head-turning results every time.
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
