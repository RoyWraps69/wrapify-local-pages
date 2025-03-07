
import React from 'react';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const QualityGuarantee: React.FC = () => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg border border-gray-200 shadow-md"
      whileHover={{
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        <Shield className="text-wrap-blue w-5 h-5 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-wrap-blue">Premium Quality Guarantee</h4>
          <p className="text-sm text-wrap-grey">Our premium materials, expert craftmanship, and professional installation ensure exceptional results for your vehicle wrap project.</p>
        </div>
      </div>
      
      <ul className="space-y-3">
        {[
          "Complete professional installation by approved technicians",
          "Chicago-quality design and printing",
          "Factory-grade finish with our expert installation team",
          "Industry-leading warranty on materials and workmanship"
        ].map((benefit, index) => (
          <motion.li 
            key={index}
            className="flex items-start gap-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="text-green-600 text-xs w-3 h-3" />
            </div>
            <span className="text-sm text-wrap-grey">{benefit}</span>
          </motion.li>
        ))}
      </ul>
      
      <motion.div 
        className="mt-4 pt-4 border-t border-gray-200"
        whileHover={{ y: -3 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="w-2 h-2 bg-green-500 rounded-full"></div>
            ))}
          </div>
          <span className="text-sm font-medium text-green-700">4,293 satisfied customers</span>
        </div>
      </motion.div>

      <motion.div 
        className="mt-4 pt-2 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/testimonials" className="inline-flex items-center text-wrap-blue text-sm hover:text-wrap-red">
          <span>Read customer testimonials</span>
          <ArrowRight className="ml-1 w-3 h-3" />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default QualityGuarantee;
