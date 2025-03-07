
import React from 'react';
import WarrantyHeader from './WarrantyHeader';
import WarrantyPromise from './WarrantyPromise';
import WarrantyAccordion from './WarrantyAccordion';
import WarrantyCTA from './WarrantyCTA';
import ChatbotWithSchema from '../chatbot/ChatbotWithSchema';

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
      
      <ChatbotWithSchema initialMessage="Hello! I'm your virtual warranty assistant. I can answer any questions about our 5-year warranty coverage for vehicle wraps, ceramic coatings, and PPF. How can I help you today?" />
    </main>
  );
};

export default WarrantyContent;
