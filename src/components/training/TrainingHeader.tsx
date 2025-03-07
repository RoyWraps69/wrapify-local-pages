
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const TrainingHeader: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-wrap-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4">
              <GraduationCap className="mr-2 h-4 w-4" />
              <span>Professional Training Program</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-wrap-blue mb-6">
              Master Vehicle Wrap Installation <span className="text-wrap-red">With 30 Years of Expertise</span>
            </h1>
            
            <p className="text-wrap-grey text-lg mb-8">
              Join our comprehensive hands-on training courses and learn the art of professional vinyl wrap installation from industry experts. Whether you're starting a new career or refining your skills, our certified instructors will guide you through every step of the process.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#courses" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors font-medium">
                View Our Courses
              </a>
              <a href="#contact" className="border border-wrap-blue text-wrap-blue hover:bg-wrap-blue/5 px-6 py-3 rounded-md transition-colors font-medium">
                Contact Us
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white p-3 shadow-lg rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png" 
                alt="Vehicle Wrap Training Class in Action" 
                className="w-full h-auto rounded-md object-cover aspect-video"
              />
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-wrap-blue text-2xl font-semibold mb-1">30+</div>
                <div className="text-wrap-grey text-sm">Years Experience</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-wrap-blue text-2xl font-semibold mb-1">5000+</div>
                <div className="text-wrap-grey text-sm">Students Trained</div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-wrap-blue text-2xl font-semibold mb-1">100%</div>
                <div className="text-wrap-grey text-sm">Hands-On</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingHeader;
