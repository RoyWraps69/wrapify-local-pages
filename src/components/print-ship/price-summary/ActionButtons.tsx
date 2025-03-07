
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ActionButtonsProps {
  handleAddToCart: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ handleAddToCart }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Button 
            onClick={handleAddToCart}
            className="w-full bg-wrap-red hover:bg-red-600 text-white font-medium py-6 transform transition"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1"
        >
          <Link 
            to="/contact" 
            className="w-full h-full flex items-center justify-center py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" /> Request Custom Quote
          </Link>
        </motion.div>
      </div>
      
      <div className="mt-4 text-center text-white/80 text-sm">
        <p>Or call us at (312) 597-1286 for immediate assistance</p>
      </div>
    </>
  );
};

export default ActionButtons;
