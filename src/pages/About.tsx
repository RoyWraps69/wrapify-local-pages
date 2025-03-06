
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import TestimonialSection from '@/components/TestimonialSection';

const About = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="About Chicago Fleet Wraps | Professional Vehicle Wrapping"
        pageDescription="Learn about Chicago Fleet Wraps, our commitment to quality, and our expertise in professional vehicle wrapping services."
        pageUrl="https://chicagofleetwraps.com/about"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
            About Chicago Fleet Wraps
          </h1>
          <div className="max-w-3xl">
            <p className="text-wrap-grey text-lg mb-6">
              Chicago Fleet Wraps is your premier destination for professional vehicle wrapping services in the Chicago metropolitan area. 
              With years of experience and a commitment to excellence, we specialize in transforming vehicles with high-quality wraps 
              that make a lasting impression.
            </p>
            <p className="text-wrap-grey text-lg mb-6">
              Our team of certified installers uses only premium materials from industry leaders like 3M and Avery Dennison, ensuring 
              your vehicle wrap not only looks great but also stands the test of time.
            </p>
            <p className="text-wrap-grey text-lg mb-12">
              Whether you need fleet branding for your business vehicles or a custom color change for your personal car, our attention 
              to detail and professional service ensure outstanding results every time.
            </p>
          </div>
        </div>
        <TestimonialSection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default About;
