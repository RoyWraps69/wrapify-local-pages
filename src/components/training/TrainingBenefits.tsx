
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TrainingBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Hands-On Experience',
      description: 'Work directly on vehicles during training with professional-grade materials and tools',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    },
    {
      title: 'Small Class Sizes',
      description: 'Maximum of 6 students per class ensures personalized attention from instructors',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    },
    {
      title: 'Business Development',
      description: 'Learn pricing strategies, marketing techniques, and business operations for wrap shops',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    },
    {
      title: 'Problem-Solving Skills',
      description: 'Master techniques for handling complex curves, recesses, and challenging installations',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    },
    {
      title: 'Post-Training Support',
      description: 'Ongoing access to instructor guidance and resources after completion',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    },
    {
      title: 'Professional Recognition',
      description: 'Receive documentation of your training completion to enhance your professional profile',
      icon: <CheckCircle className="h-5 w-5 text-white" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Training Benefits
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Our professional training program offers numerous advantages that will enhance your skills and business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 h-10 w-10 rounded-full bg-wrap-red flex items-center justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-2">
                {benefit.title}
              </h3>
              <p className="text-wrap-grey">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
