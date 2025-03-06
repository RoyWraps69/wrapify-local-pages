
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSectionProps {
  townName?: string;
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  townName = 'Chicago',
  faqs
}) => {
  // Simplified FAQs
  const defaultFaqs: FAQItem[] = [
    {
      question: `How much does it cost to wrap a vehicle?`,
      answer: (
        <p>
          The cost depends on vehicle size, wrap type, and design complexity. 
          Commercial fleet wraps typically range from $2,500-$5,000 per vehicle, 
          while premium color change wraps range from $3,000-$6,000.
        </p>
      )
    },
    {
      question: `How long does a vehicle wrap last?`,
      answer: (
        <p>
          A professionally installed vehicle wrap typically lasts 5-7 years 
          with proper care and maintenance.
        </p>
      )
    },
    {
      question: `Will a wrap damage my car's paint?`,
      answer: (
        <p>
          No, a professionally installed wrap will not damage your car's paint. 
          In fact, it provides protection for your vehicle's original paint from 
          UV rays, small scratches, and road debris.
        </p>
      )
    }
  ];

  // Use provided FAQs or default to simplified ones
  const displayFaqs = faqs || defaultFaqs;

  return (
    <section className="py-16 bg-gray-50" id="faqs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-wrap-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-8">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
