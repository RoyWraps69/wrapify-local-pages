
import React from 'react';
import { Shield } from 'lucide-react';

const WarrantyHeader = () => {
  return (
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
        Our Commitment To Quality
      </span>
      <h1 className="text-3xl md:text-5xl font-serif font-semibold text-wrap-blue mb-4">
        Warranty Information
      </h1>
      <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
        We stand behind our work with comprehensive warranty coverage for all our professional vehicle enhancement services.
      </p>
    </div>
  );
};

export default WarrantyHeader;
