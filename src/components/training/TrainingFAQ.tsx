
import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const TrainingFAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need any prior experience to take these courses?",
      answer: "For our 1-Day Fundamentals course, no prior experience is necessary. For the 3-Day Professional and 5-Day Master courses, basic familiarity with wrapping concepts is helpful but not required. We tailor our instruction to match each student's experience level."
    },
    {
      question: "What materials and tools are provided during the training?",
      answer: "All necessary tools, vinyl materials, and practice surfaces are provided as part of your course fee. You'll work with premium industry-standard materials from leading manufacturers, just as you would in a professional setting."
    },
    {
      question: "Is certification provided after completing a course?",
      answer: "Yes, all students receive a certificate of completion. Students who complete the 5-Day Master Certification course receive our professional certification after successfully passing the final assessment."
    },
    {
      question: "How many students are in each class?",
      answer: "We maintain small class sizes with a maximum of 8 students per instructor to ensure personalized attention and optimal hands-on learning experience."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "While we don't formally place students in jobs, we maintain strong industry connections and regularly share job opportunities with our graduates. Many employers specifically seek out our certified graduates."
    },
    {
      question: "Can I bring my own vehicle to work on?",
      answer: "For the 5-Day Master course, students may have the opportunity to work on their own vehicles during the final days, subject to approval and scheduling. Contact us in advance to discuss this possibility."
    },
    {
      question: "Where are the classes held?",
      answer: "Our primary training facility is located in Chicago, Illinois. We occasionally offer satellite classes in other major cities - check our schedule for upcoming locations."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Cancellations made more than 14 days before the course start date receive a full refund. Cancellations within 14 days receive a 75% refund or the option to reschedule for a future class at no additional cost."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-wrap-grey text-lg">
              Find answers to common questions about our vehicle wrap training programs.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-wrap-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-wrap-grey">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-wrap-grey mb-4">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors font-medium"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFAQ;
