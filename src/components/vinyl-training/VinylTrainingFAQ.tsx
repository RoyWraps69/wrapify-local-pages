
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VinylTrainingFAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need any prior experience to take your vinyl wrap training courses?",
      answer: "No prior experience is necessary for our Beginner Workshop. For the Comprehensive Course, basic familiarity with vinyl materials is helpful but not required. Our Professional Certification program is designed for individuals with some experience in applying vinyl who want to take their skills to a master level."
    },
    {
      question: "What materials and tools will I need to bring to the training?",
      answer: "All materials and tools needed for the training are provided and included in the course fee. We use professional-grade vinyl materials and industry-standard tools during the training. After the course, you'll receive a comprehensive tool list if you wish to purchase your own professional kit, and we offer special student discounts on starter kits."
    },
    {
      question: "How many students are in each class?",
      answer: "We strictly limit our class sizes to a maximum of 6 students per instructor. This ensures that each student receives personalized attention and ample hands-on practice time. Our small class size is one of the key factors that sets our training apart from other programs."
    },
    {
      question: "Will I be working on actual vehicles during the training?",
      answer: "Yes, depending on your course selection. The Beginner Workshop includes practice on flat panels and simple curved surfaces. The Comprehensive Course includes installation practice on vehicle panels including doors, hoods, and bumpers. The Professional Certification course includes complete vehicle wrap installations."
    },
    {
      question: "Do you offer payment plans for the training courses?",
      answer: "Yes, we offer flexible payment plans for our Comprehensive and Professional Certification courses. A 50% deposit is required to secure your spot, with the balance due 7 days before the course begins. Please contact us for details on payment plan options."
    },
    {
      question: "What happens if I need to reschedule my training?",
      answer: "We understand that plans can change. You can reschedule your training up to 14 days before the start date with no additional fee. Rescheduling with less than 14 days' notice incurs a $100 administrative fee. If you need to reschedule within 48 hours of the course, a 25% rebooking fee applies."
    },
    {
      question: "Do you provide ongoing support after the training is complete?",
      answer: "Absolutely! All graduates receive 60 days of post-training support via email and phone. Professional Certification graduates receive an extended 6 months of support. We also have a private online community where graduates can share experiences, ask questions, and network with other professionals."
    },
    {
      question: "Is there a certification or credential I will receive after completing the training?",
      answer: "Yes, upon successful completion of any of our courses, you will receive a certificate of completion. Graduates of our Professional Certification program receive an industry-recognized professional installer certification after passing a comprehensive practical exam."
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
            Get answers to common questions about our vinyl wrap training programs
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-wrap-blue font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-wrap-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-wrap-grey">
            Still have questions? <a href="/contact" className="text-wrap-red hover:underline">Contact us</a> for more information about our vinyl wrap training programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingFAQ;
