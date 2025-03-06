
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PrintShipSection from '@/components/print-ship/PrintShipSection';
import { Helmet } from 'react-helmet-async';
import SEOSchema from '@/components/SEOSchema';

const PrintShip = () => {
  return (
    <>
      <Helmet>
        <title>Print & Ship Vehicle Wraps Nationwide | Wrapping The World</title>
        <meta name="description" content="Custom vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for premium materials." />
        <meta name="keywords" content="vehicle wrap printing, nationwide vehicle wraps, DIY vehicle wraps, print and ship car wraps, commercial fleet wrap printing" />
        <link rel="canonical" href="https://wrappingtheworld.com/print-ship" />
      </Helmet>
      
      <SEOSchema 
        townName="Nationwide"
        pageTitle="Print & Ship Vehicle Wraps Nationwide | Wrapping The World"
        pageDescription="Custom vehicle wraps designed and printed in Chicago, shipped nationwide. Perfect for DIY installers, fleet managers, and wrap shops looking for premium materials."
        pageUrl="https://wrappingtheworld.com/print-ship"
      />
      
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-wrap-blue to-wrap-blue-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Premium Vehicle Wraps, <br />
              <span className="text-wrap-red">Delivered Nationwide</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Chicago-quality design and printing, shipped directly to your door or preferred installer anywhere in the United States.
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <PrintShipSection />
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                Why Choose Our Print & Ship Service?
              </h2>
              <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
                We combine premium materials, expert design, and nationwide accessibility to deliver exceptional vehicle wraps wherever you are.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">Premium Quality Materials</h3>
                <p className="text-wrap-grey">
                  We use only top-of-the-line 3M and Avery Dennison vinyl with UV-resistant lamination for exceptional durability and appearance.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">Expert Design Services</h3>
                <p className="text-wrap-grey">
                  Our professional design team creates eye-catching graphics optimized for vehicle contours and maximum brand visibility.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">Quick Turnaround Times</h3>
                <p className="text-wrap-grey">
                  From design approval to delivery, our streamlined process ensures your vehicle wraps arrive when you need them.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">DIY-Friendly Installation</h3>
                <p className="text-wrap-grey">
                  Each shipment includes detailed installation instructions, toolkit recommendations, and access to tutorial videos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">Installer Network</h3>
                <p className="text-wrap-grey">
                  Need professional installation? We'll connect you with our trusted network of certified installers across the country.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-wrap-blue">Material Warranty</h3>
                <p className="text-wrap-grey">
                  All our printed wraps are backed by manufacturer warranties and our satisfaction guarantee for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrintShip;
