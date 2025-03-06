
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
  // Default FAQs with town name integration
  const defaultFaqs: FAQItem[] = [
    {
      question: `Where can I get a car wrap in ${townName}?`,
      answer: (
        <p>
          Chicago Fleet Wraps provides top car wrapping services in {townName} and nearby areas. 
          Our shop is easy to get to for all {townName} residents and businesses. 
          We offer full services including business fleet wraps, color change wraps, and custom car graphics.
        </p>
      )
    },
    {
      question: `How much does it cost to wrap a car in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            The cost of wrapping a car in {townName} depends on several things:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Car size and type (car, van, truck, etc.)</li>
            <li>How complex the car's surface is</li>
            <li>Type of wrap (business graphics, color change, custom design)</li>
            <li>Quality of vinyl used</li>
            <li>How complex the design is</li>
          </ul>
          <p className="mt-3">
            Contact us for a free quote for your specific car and needs in {townName}.
          </p>
        </div>
      )
    },
    {
      question: `How long does a car wrap last in ${townName}'s weather?`,
      answer: (
        <p>
          A professional car wrap installed by Chicago Fleet Wraps usually lasts 5-7 years in {townName}'s weather. 
          We use high-quality vinyl materials made to handle local weather, including hot summers and cold winters. 
          Good care can make your wrap last even longer.
        </p>
      )
    },
    {
      question: `Will a car wrap damage my car's paint?`,
      answer: (
        <p>
          No, a professionally installed car wrap from Chicago Fleet Wraps will not damage your car's paint. 
          In fact, wraps can actually protect your car's original paint from sun rays, small scratches, and road debris. 
          When removed correctly by our {townName} experts, your original paint will stay in the same condition as when it was wrapped.
        </p>
      )
    },
    {
      question: `How do I take care of my car wrap in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            Taking care of your car wrap in {townName} is easy:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hand wash with mild soap and water</li>
            <li>Avoid high-pressure car washes</li>
            <li>Clean spills and stains quickly</li>
            <li>Park in shade when possible to reduce sun damage</li>
            <li>For winter, remove ice and snow carefully to avoid scratching the wrap</li>
          </ul>
          <p className="mt-3">
            We give all {townName} clients detailed care tips to help your wrap last as long as possible.
          </p>
        </div>
      )
    },
    {
      question: `Do you offer warranties on car wraps in ${townName}?`,
      answer: (
        <p>
          Yes, Chicago Fleet Wraps offers warranties on all our car wraps for {townName} clients. 
          Our warranties typically cover factory defects, early fading, cracking, and peeling. 
          The specific warranty terms depend on the type of vinyl used and its maker. 
          We only use top materials that come with strong maker backing.
        </p>
      )
    },
  ];

  // Use provided FAQs or default to town-specific ones
  const displayFaqs = faqs || defaultFaqs;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Common Questions
          </span>
          <h2 className="section-title">
            Questions About Car Wraps in {townName}
          </h2>
          <p className="section-subtitle">
            Find answers to the most common questions about our car wrapping services in {townName}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-wrap-blue hover:text-wrap-red">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-wrap-grey mb-6">
            Have more questions about car wraps in {townName}? We're here to help!
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
