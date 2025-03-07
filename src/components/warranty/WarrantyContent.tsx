
import React from 'react';
import WarrantyHeader from './WarrantyHeader';
import WarrantyPromise from './WarrantyPromise';
import WarrantyAccordion from './WarrantyAccordion';
import WarrantyCTA from './WarrantyCTA';

const WarrantyContent = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <WarrantyHeader />
          <WarrantyPromise />
          <WarrantyAccordion />
          <WarrantyCTA />
        </div>
      </div>
    </main>
  );
};

export default WarrantyContent;
