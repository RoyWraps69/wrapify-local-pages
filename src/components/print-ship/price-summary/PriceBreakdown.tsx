
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Palette, Wrench, Plus } from 'lucide-react';

interface PriceBreakdownProps {
  price: {
    subtotal: number;
    designFee: number;
    shippingFee: number;
    addOnsFee?: number;
    total: number;
    pricePerSqFt: number;
    totalSqFt: number;
  };
  selectedAddOns?: string[];
  formatCurrency: (amount: number) => string;
}

const PriceBreakdown: React.FC<PriceBreakdownProps> = ({ 
  price, 
  selectedAddOns = [], 
  formatCurrency 
}) => {
  return (
    <div className="space-y-4 mb-6">
      <motion.div 
        className="flex justify-between border-b border-white/20 pb-3 pt-1"
        whileHover={{ x: 5 }}
      >
        <span className="flex items-center">
          <Truck className="w-4 h-4 mr-2 text-white/70" />
          Material ({price.totalSqFt.toFixed(0)} sq ft)
        </span>
        <span>{formatCurrency(price.subtotal)}</span>
      </motion.div>
      
      <motion.div 
        className="flex justify-between border-b border-white/20 pb-3"
        whileHover={{ x: 5 }}
      >
        <span className="flex items-center">
          <Palette className="w-4 h-4 mr-2 text-white/70" />
          Design Fee
        </span>
        <span>{formatCurrency(price.designFee)}</span>
      </motion.div>
      
      <motion.div 
        className="flex justify-between border-b border-white/20 pb-3"
        whileHover={{ x: 5 }}
      >
        <span className="flex items-center">
          <Wrench className="w-4 h-4 mr-2 text-white/70" />
          Professional Installation
        </span>
        <span>Included</span>
      </motion.div>
      
      <motion.div 
        className="flex justify-between border-b border-white/20 pb-3"
        whileHover={{ x: 5 }}
      >
        <span className="flex items-center">
          <Truck className="w-4 h-4 mr-2 text-white/70" />
          Shipping
        </span>
        <span>{formatCurrency(price.shippingFee)}</span>
      </motion.div>
      
      {(selectedAddOns?.length > 0 && price.addOnsFee) && (
        <motion.div 
          className="flex justify-between border-b border-white/20 pb-3"
          whileHover={{ x: 5 }}
        >
          <span className="flex items-center">
            <Plus className="w-4 h-4 mr-2 text-white/70" />
            Add-ons
          </span>
          <span>{formatCurrency(price.addOnsFee)}</span>
        </motion.div>
      )}
      
      <motion.div 
        className="flex justify-between text-xl font-bold bg-white/10 p-3 rounded-lg mt-4"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <span>Total Price</span>
        <span>{formatCurrency(price.total)}</span>
      </motion.div>
    </div>
  );
};

export default PriceBreakdown;
