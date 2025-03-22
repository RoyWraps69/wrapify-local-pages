
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const VinylTrainingHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-wrap-blue/10 to-white pt-32 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span 
              className="inline-block px-4 py-1 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hands-On Professional Training
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Become a Vinyl Wrap Installation Expert
            </motion.h1>
            
            <motion.p 
              className="text-wrap-grey text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Master the art of vinyl wrapping with our comprehensive hands-on training courses. 
              Learn directly from industry professionals with decades of real-world experience.
            </motion.p>
            
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-wrap-red mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-wrap-grey">Small class sizes with <span className="font-medium text-wrap-blue">personalized instruction</span></p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-wrap-red mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-wrap-grey">Work with <span className="font-medium text-wrap-blue">professional-grade materials</span> on real vehicles</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-wrap-red mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-wrap-grey">Gain a <span className="font-medium text-wrap-blue">competitive edge</span> in the $10.8 billion vehicle wrap industry</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/contact?subject=Vinyl%20Wrap%20Training%20Inquiry"
                className="inline-flex items-center justify-center bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-wrap-red/90 transition-colors"
              >
                Reserve Your Spot <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <a 
                href="tel:+13125971286"
                className="inline-flex items-center justify-center bg-white border border-wrap-blue text-wrap-blue px-6 py-3 rounded-md hover:bg-wrap-blue/5 transition-colors"
              >
                Call for Details
              </a>
            </motion.div>
          </div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png" 
                alt="Vinyl wrap training session" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg md:w-48">
              <div className="text-wrap-blue font-semibold">Next Class:</div>
              <div className="text-wrap-red">June 15-19, 2023</div>
              <div className="text-xs text-wrap-grey mt-1">Limited spots available!</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-wrap-blue/5 to-transparent z-0"></div>
    </section>
  );
};

export default VinylTrainingHero;
