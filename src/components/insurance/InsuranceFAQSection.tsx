
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
}

interface InsuranceFAQSectionProps {
  faqs: FAQ[];
}

const InsuranceFAQSection: React.FC<InsuranceFAQSectionProps> = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-wrap-blue/5 rounded-lg p-8 max-w-4xl mx-auto mt-16">
      <h2 className="text-2xl font-semibold text-wrap-blue mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-medium text-wrap-blue text-lg">{faq.question}</h3>
              {openFaq === index ? (
                <ChevronUp className="h-5 w-5 text-wrap-blue" />
              ) : (
                <ChevronDown className="h-5 w-5 text-wrap-blue" />
              )}
            </button>
            
            <div 
              className={`bg-white p-4 transition-all duration-300 ease-in-out ${
                openFaq === index ? 'max-h-96' : 'max-h-0 h-0 p-0 overflow-hidden'
              }`}
            >
              <p className="text-wrap-grey">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceFAQSection;
