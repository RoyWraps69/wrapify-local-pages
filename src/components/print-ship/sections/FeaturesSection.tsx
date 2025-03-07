
import React from 'react';
import PrintShipFeatures from '@/components/print-ship/PrintShipFeatures';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4 animate-on-scroll fade-up">
            Why Choose Our Print & Ship Service?
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto animate-on-scroll fade-up">
            We combine premium materials, expert design, and nationwide accessibility 
            to deliver exceptional vehicle wraps wherever you are.
          </p>
        </div>
        
        <PrintShipFeatures />
      </div>
    </section>
  );
};

export default FeaturesSection;
