
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Clock, Award } from 'lucide-react';

const TrainingHeader: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-wrap-blue/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.span 
              className="inline-block px-4 py-1 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Professional Training Programs
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Master the Art of Vinyl Wrap Installation
            </motion.h1>
            
            <motion.p 
              className="text-wrap-grey text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn from industry experts with over 30 years of experience. Our hands-on training programs provide the skills and knowledge needed to become a professional vinyl wrap installer.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-wrap-red/10 flex items-center justify-center mr-3">
                  <GraduationCap className="h-5 w-5 text-wrap-red" />
                </div>
                <span className="text-wrap-grey">
                  <strong>Expert Instructors</strong>
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-wrap-red/10 flex items-center justify-center mr-3">
                  <Clock className="h-5 w-5 text-wrap-red" />
                </div>
                <span className="text-wrap-grey">
                  <strong>Flexible Course Options</strong>
                </span>
              </div>
              
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-wrap-red/10 flex items-center justify-center mr-3">
                  <Award className="h-5 w-5 text-wrap-red" />
                </div>
                <span className="text-wrap-grey">
                  <strong>Certification Provided</strong>
                </span>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src="/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png" 
              alt="Vehicle Wrap Training" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wrap-blue/5 to-transparent z-0"></div>
    </section>
  );
};

export default TrainingHeader;
