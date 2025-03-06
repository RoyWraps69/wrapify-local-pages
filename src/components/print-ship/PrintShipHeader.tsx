
import React from 'react';

const PrintShipHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
        Print & Ship Services
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
        Premium Wraps Delivered Nationwide
      </h2>
      <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
        High-quality vehicle wraps designed and printed in Chicago, shipped directly to you or your installer anywhere in the United States. Enhance your wrap with ceramic coating, PPF protection, or insurance coverage.
      </p>
    </div>
  );
};

export default PrintShipHeader;
