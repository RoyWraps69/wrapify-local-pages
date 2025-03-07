
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NationwideSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Generate our service area schema
  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nationwide Vehicle Wrap Print & Ship",
    "serviceType": "Vehicle Wrap Printing and Shipping",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Wrapping The World",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4711 N. Lamon Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60630",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceOutput": "Premium quality vehicle wraps",
    "description": "Professional vehicle wrap design, printing, and nationwide shipping services that allow customers across the country to access our premium wrapping solutions.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceAreaSchema)}
        </script>
      </Helmet>
      
      <section className="py-16 bg-gray-50" id="nationwide-service">
        <motion.div 
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
              Nationwide Service
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
              Premium Vehicle Wraps Available Across the USA
            </h2>
            <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
              Can't visit our Chicago location? No problem! We offer nationwide design, print, and shipping services for all your vehicle wrapping needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Custom Design</h3>
              <p className="text-wrap-grey mb-4">
                Our design team works with you remotely to create the perfect custom wrap design for your vehicle, no matter where you're located.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Premium Printing</h3>
              <p className="text-wrap-grey mb-4">
                We print your wrap using top-quality 3M and Avery Dennison materials in our state-of-the-art Chicago facility for exceptional durability and finish.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Nationwide Shipping</h3>
              <p className="text-wrap-grey mb-4">
                We ship your completed wrap directly to you or your preferred installer, anywhere in the United States, with secure packaging to ensure perfect condition upon arrival.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Quick Turnaround</h3>
              <p className="text-wrap-grey mb-4">
                Enjoy fast production times and expedited shipping options to get your vehicle wrap when you need it, with real-time project tracking.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">DIY Support</h3>
              <p className="text-wrap-grey mb-4">
                Get detailed instructions and video tutorials for DIY installation, or find professional installation options on our Print & Ship page.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-wrap-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3 text-wrap-blue">Remote Support</h3>
              <p className="text-wrap-grey mb-4">
                Get expert installation guidance and support through our virtual consultation services, ensuring a perfect application even from afar.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link to="/print-ship" className="inline-block px-8 py-3 bg-wrap-red text-white font-medium rounded-md hover:bg-wrap-red/90 transition-colors">
              Explore Print & Ship Options
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default NationwideSection;
