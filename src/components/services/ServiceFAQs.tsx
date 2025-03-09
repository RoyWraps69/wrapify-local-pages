
import React from 'react';
import { ServiceInfo } from '@/data/serviceData';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQ } from '@/data/services/types';

interface ServiceFAQsProps {
  service: ServiceInfo;
}

// Default FAQs to use when a service doesn't have specific ones
const defaultFAQs: FAQ[] = [
  {
    question: "How long does a vehicle wrap typically last?",
    answer: "With proper care and maintenance, a high-quality vehicle wrap can last between 5-7 years. Factors like exposure to harsh weather conditions, frequent washing, and storage can affect longevity."
  },
  {
    question: "Can I take my wrapped vehicle through a car wash?",
    answer: "We recommend hand washing your wrapped vehicle. If you must use a car wash, choose a touchless automatic wash without brushes. Avoid high-pressure washes directed at the edges of the wrap."
  },
  {
    question: "Will removing the wrap damage my vehicle's paint?",
    answer: "When professionally installed and removed, vehicle wraps should not damage factory paint. In fact, they often protect the original paint from UV damage and minor scratches during the time they're applied."
  },
  {
    question: "How much does a professional vehicle wrap cost?",
    answer: "The cost varies based on vehicle size, wrap complexity, and coverage area. Full wraps generally range from $3,000-$5,000+ for cars and $5,000-$8,000+ for larger vehicles like trucks and vans. Partial wraps start around $1,500."
  },
  {
    question: "How long does the installation process take?",
    answer: "A full vehicle wrap typically takes 3-5 business days to complete, including preparation, installation, and finishing. Partial wraps may take 1-2 days depending on complexity."
  }
];

const ServiceFAQs: React.FC<ServiceFAQsProps> = ({ service }) => {
  // Use service-specific FAQs if available, otherwise use default FAQs
  const faqs = service.faqs && service.faqs.length > 0 ? service.faqs : defaultFAQs;
  
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-8 text-center">
            Frequently Asked Questions About {service.title}
          </h2>
          
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm p-1">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-lg font-medium text-wrap-blue hover:text-wrap-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-wrap-grey">
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQs;
