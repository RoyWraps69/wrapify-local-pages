
import React from 'react';

const InsurancePageHeader: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
        Wrap Protection Plans
      </span>
      <h1 className="text-3xl md:text-5xl font-serif font-semibold text-wrap-blue mb-4">
        Protect Your Vehicle Wrap Investment
      </h1>
      <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
        Our insurance plans safeguard your vehicle wrap against damage while providing guaranteed removal services and priority support when you need it most.
      </p>
      <p className="text-wrap-red font-medium mt-4">
        All plans are billed monthly, per vehicle wrapped
      </p>
    </div>
  );
};

export default InsurancePageHeader;
