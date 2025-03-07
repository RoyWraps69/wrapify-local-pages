
import React from 'react';

export interface FAQ {
  question: string;
  answer: string;
}

interface InsuranceFAQSectionProps {
  faqs: FAQ[];
}

const InsuranceFAQSection: React.FC<InsuranceFAQSectionProps> = ({ faqs }) => {
  return (
    <div className="bg-wrap-blue/5 rounded-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-wrap-blue mb-4">Frequently Asked Questions</h2>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-medium text-wrap-blue text-lg mb-2">{faq.question}</h3>
            <p className="text-wrap-grey">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceFAQSection;
