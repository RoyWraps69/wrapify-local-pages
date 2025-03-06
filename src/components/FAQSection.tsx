
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
          Chicago Fleet Wraps provides premium vehicle wrapping services in {townName} and surrounding areas. 
          Our shop is conveniently located for all {townName} residents and businesses. 
          We offer comprehensive services including commercial fleet wraps, color change wraps, and custom vehicle graphics.
        </p>
      )
    },
    {
      question: `How much does it cost to wrap a vehicle in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            The cost of wrapping a vehicle in {townName} varies depending on several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle size and type (car, van, truck, etc.)</li>
            <li>Complexity of the vehicle's surface area</li>
            <li>Type of wrap (commercial graphics, color change, custom design)</li>
            <li>Quality of vinyl used</li>
            <li>Design complexity</li>
          </ul>
          <p className="mt-3">
            Contact us for a free, personalized quote specific to your vehicle and requirements in {townName}.
          </p>
        </div>
      )
    },
    {
      question: `How long does a vehicle wrap last in ${townName}'s climate?`,
      answer: (
        <p>
          A professional vehicle wrap installed by Chicago Fleet Wraps typically lasts 5-7 years in {townName}'s climate. 
          We use premium vinyl materials specifically designed to withstand local weather conditions, including hot summers and cold winters. 
          Proper maintenance can extend the life of your wrap even further.
        </p>
      )
    },
    {
      question: `Will a vehicle wrap damage my car's paint?`,
      answer: (
        <p>
          No, a professionally installed vehicle wrap from Chicago Fleet Wraps will not damage your car's paint. 
          In fact, wraps can actually protect your vehicle's original paint from UV rays, minor scratches, and small debris. 
          When removed correctly by our {townName} experts, your original paint will remain in the same condition as when it was wrapped.
        </p>
      )
    },
    {
      question: `How do I maintain my vehicle wrap in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            Maintaining your vehicle wrap in {townName} is simple:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Hand wash with mild soap and water</li>
            <li>Avoid high-pressure car washes</li>
            <li>Clean spills and stains promptly</li>
            <li>Park in shaded areas when possible to reduce UV exposure</li>
            <li>For winter months, remove ice and snow carefully to avoid scratching the wrap</li>
          </ul>
          <p className="mt-3">
            We provide all {townName} clients with detailed care instructions to maximize the lifespan of their wrap.
          </p>
        </div>
      )
    },
    {
      question: `Do you offer warranties on vehicle wraps in ${townName}?`,
      answer: (
        <p>
          Yes, Chicago Fleet Wraps offers warranties on all our vehicle wraps for {townName} clients. 
          Our warranties typically cover manufacturer defects, premature fading, cracking, and peeling. 
          The specific warranty terms depend on the type of vinyl used and its manufacturer. 
          We use only premium materials that come with strong manufacturer backing.
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
            Frequently Asked Questions
          </span>
          <h2 className="section-title">
            Common Questions About Vehicle Wraps in {townName}
          </h2>
          <p className="section-subtitle">
            Find answers to the most common questions about our vehicle wrapping services in {townName}.
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
            Have more questions about vehicle wraps in {townName}? We're here to help!
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
