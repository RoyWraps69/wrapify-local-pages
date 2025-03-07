
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TrainingFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What experience do I need before taking a class?",
      answer: "No prior experience is required for our 1-day and 3-day courses. For the 5-day professional certification course, basic familiarity with vinyl application is recommended but not mandatory."
    },
    {
      question: "What materials are included with the course?",
      answer: "All necessary tools and materials for training are provided, including high-quality vinyl, application tools, cleaning supplies, and a comprehensive training manual. You'll also receive a starter kit to take home."
    },
    {
      question: "How many students are in each class?",
      answer: "We maintain small class sizes with a maximum of 6 students per instructor to ensure personalized attention and ample hands-on practice time for each participant."
    },
    {
      question: "Do you offer payment plans for the training courses?",
      answer: "Yes, we offer flexible payment plans for our 3-day and 5-day courses. A 50% deposit is required to secure your spot, with the balance due before the start of the class."
    },
    {
      question: "What happens if I need to reschedule my training?",
      answer: "We understand that plans can change. You can reschedule your training up to 14 days before the start date at no additional cost. Rescheduling with less than 14 days' notice incurs a $100 administrative fee."
    },
    {
      question: "Is there ongoing support after completing the training?",
      answer: "Absolutely! All graduates receive 3 months of post-training support via email and phone consultations. We also have a private online community where graduates can share experiences and ask questions."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Everything you need to know about our vinyl wrap training programs
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-wrap-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TrainingFAQ;
