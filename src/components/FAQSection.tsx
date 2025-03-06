
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
  // Default FAQs with town name integration - Optimized for search intent and with schema markup
  const defaultFaqs: FAQItem[] = [
    {
      question: `Where can I get professional vehicle wraps in ${townName}?`,
      answer: (
        <p>
          Chicago Fleet Wraps provides top-quality vehicle wrapping services in {townName} and surrounding areas. 
          Our service center is conveniently located and accessible for all {townName} residents and businesses. 
          We offer complete wrapping solutions including commercial fleet branding, full color change wraps, custom graphics, 
          ceramic coatings, and paint protection film for businesses and individuals in {townName}.
        </p>
      )
    },
    {
      question: `How much does it cost to wrap a vehicle in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            The cost of wrapping a vehicle in {townName} depends on several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle size and type (sedan, SUV, van, truck, etc.)</li>
            <li>Surface complexity of the vehicle</li>
            <li>Type of wrap (commercial graphics, full color change, partial wrap)</li>
            <li>Quality of vinyl materials selected (standard vs. premium)</li>
            <li>Design complexity and customization needs</li>
          </ul>
          <p className="mt-3">
            For {townName} businesses and residents, commercial fleet wraps typically range from $2,500-$5,000 per vehicle, 
            while premium color change wraps range from $3,000-$6,000 depending on vehicle size. 
            Contact us for a personalized quote specific to your {townName} vehicle wrapping project.
          </p>
        </div>
      )
    },
    {
      question: `How long does a vehicle wrap last in ${townName}'s climate?`,
      answer: (
        <p>
          A professionally installed vehicle wrap from Chicago Fleet Wraps typically lasts 5-7 years in {townName}'s climate. 
          We use premium 3M and Avery Dennison vinyl materials specifically engineered to withstand local weather conditions, 
          including hot summers and cold winters with snow and salt. With proper care and maintenance, including regular gentle 
          washing and indoor storage when possible, your {townName} vehicle wrap can maintain its vibrant appearance and 
          promotional effectiveness throughout this period.
        </p>
      )
    },
    {
      question: `Will a vehicle wrap damage my car's paint in ${townName}?`,
      answer: (
        <p>
          No, a professionally installed vehicle wrap from Chicago Fleet Wraps will not damage your car's paint. 
          In fact, wraps provide valuable protection for your vehicle's original paint from UV rays, small scratches, 
          and road debris common on {townName} streets and highways. When properly removed by our {townName} experts, 
          your original paint will remain in the same condition as when it was wrapped, and often in better condition 
          than exposed painted surfaces due to the protection the wrap provides against environmental elements.
        </p>
      )
    },
    {
      question: `What types of businesses in ${townName} benefit most from vehicle wraps?`,
      answer: (
        <div>
          <p className="mb-3">
            Many types of businesses in {townName} see significant benefits from professional vehicle wraps:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service businesses (plumbing, electrical, HVAC, landscaping)</li>
            <li>Construction and contracting companies</li>
            <li>Food trucks and catering businesses</li>
            <li>Delivery services and couriers</li>
            <li>Real estate agencies</li>
            <li>Local retailers with delivery vehicles</li>
            <li>Home service providers</li>
          </ul>
          <p className="mt-3">
            Any {townName} business with vehicles that travel throughout the area can transform them into powerful 
            mobile billboards. A wrapped vehicle in {townName} can generate 30,000-80,000 impressions daily, 
            providing exceptional local marketing value and brand recognition.
          </p>
        </div>
      )
    },
    {
      question: `Do you offer ceramic coating services in ${townName}?`,
      answer: (
        <p>
          Yes, Chicago Fleet Wraps offers premium ceramic coating services for vehicles in {townName}. Our nano-ceramic 
          coatings provide superior protection against environmental contaminants, UV damage, bird droppings, tree sap, 
          and road salt common in {townName} during winter months. The hydrophobic properties make your vehicle easier to 
          clean while maintaining a deep, glossy finish. Our ceramic coating packages for {townName} clients are designed 
          to provide long-lasting protection with various warranty options. We also offer combination packages with paint 
          protection film for comprehensive vehicle protection.
        </p>
      )
    },
  ];

  // Use provided FAQs or default to town-specific ones
  const displayFaqs = faqs || defaultFaqs;

  return (
    <section className="py-20 bg-gray-50" id="faqs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Vehicle Wrap & Protection FAQs for {townName}
          </h2>
          <p className="text-lg text-wrap-grey max-w-3xl mx-auto">
            Find answers to the most common questions about our vehicle wrapping and protection services in {townName}.
          </p>
        </div>

        <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="w-full">
            {displayFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <AccordionTrigger className="text-left text-lg font-medium text-wrap-blue hover:text-wrap-red" itemProp="name">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap-grey" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-wrap-grey mb-6">
            Have more questions about vehicle wraps or protection services in {townName}? We're here to help!
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us For {townName} Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
