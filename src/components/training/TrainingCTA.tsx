
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingCTA: React.FC = () => {
  return (
    <section className="py-16 bg-wrap-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Master the Art of Vinyl Wrapping?
          </motion.h2>
          
          <motion.p 
            className="text-white/90 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take the first step toward becoming a skilled wrap installer. Our expert instructors are ready to help you develop professional-level skills that will set you apart in the industry.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact?subject=Training%20Enrollment"
              className="inline-flex items-center justify-center bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            
            <a
              href="tel:+13125971286"
              className="inline-flex items-center justify-center bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-wrap-red/90 transition-colors"
            >
              Call to Reserve Your Spot
            </a>
          </motion.div>
          
          <motion.p 
            className="text-white/80 text-sm mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Classes fill up quickly! Reserve your spot today to guarantee availability.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TrainingCTA;
