
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialSection from '@/components/TestimonialSection';
import SEOSchema from '@/components/SEOSchema';
import CTASection from '@/components/CTASection';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Customer Testimonials | Wrapping The World"
        pageDescription="Read what our customers have to say about our professional vehicle wrapping, ceramic coating, and paint protection services in Chicago and surrounding areas."
        pageUrl="https://wrappingtheworld.com/testimonials"
      />
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-16 animate-on-scroll fade-up">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
              What Our Customers Say
            </h1>
            <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers across Chicago and surrounding areas 
              have to say about our professional vehicle wrapping and protection services.
            </p>
          </div>
          
          {/* Extended testimonials section with more detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 animate-on-scroll fade-right">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-wrap-dark text-lg italic mb-6">
                "Chicago Fleet Wraps made our delivery vans look amazing with graphics that show our brand perfectly. 
                The quality of their work is great. Our vans are now moving billboards that bring in new business wherever they go."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-wrap-blue font-bold">MJ</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-wrap-blue">Michael Johnson</h4>
                  <p className="text-wrap-grey text-sm">Business Owner</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs">
                    Fleet Wrapping
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-soft border border-gray-100 animate-on-scroll fade-left">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-wrap-dark text-lg italic mb-6">
                "I wanted something special for my sports car and the team went beyond what I hoped for. 
                The color change wrap not only looks amazing but the details around curves and edges are perfect. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-wrap-blue font-bold">SW</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-wrap-blue">Sarah Williams</h4>
                  <p className="text-wrap-grey text-sm">Car Lover</p>
                </div>
                <div className="ml-auto">
                  <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs">
                    Color Change Wrap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Regular testimonial section with all testimonials */}
        <TestimonialSection townName="Chicago" />
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
