
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Palette, Shield, MapPin } from 'lucide-react';

const PrintShipHeader: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span 
        className="inline-block px-4 py-1.5 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4"
        variants={itemVariants}
      >
        Premium Vehicle Wrap Services
      </motion.span>
      
      <motion.h2 
        className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-6 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Custom Vehicle Wraps, <span className="text-wrap-red">Delivered Nationwide</span>
      </motion.h2>
      
      <motion.p 
        className="text-wrap-grey text-lg max-w-3xl mx-auto mb-10"
        variants={itemVariants}
      >
        Professional-grade vehicle wraps designed and printed in Chicago, 
        shipped directly to you or your preferred installer across the United States. 
        Create your custom package below.
      </motion.p>
      
      {/* Feature highlights */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 md:gap-8" 
        variants={itemVariants}
      >
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <Truck className="text-wrap-red h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Nationwide Shipping</span>
        </div>
        
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <Palette className="text-wrap-blue h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Custom Design Services</span>
        </div>
        
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <Shield className="text-green-600 h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Premium Materials</span>
        </div>
        
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <MapPin className="text-amber-500 h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Installer Network</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrintShipHeader;
