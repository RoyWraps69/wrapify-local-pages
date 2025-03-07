
import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface DiscountBadgeProps {
  showDiscount: boolean;
}

const DiscountBadge: React.FC<DiscountBadgeProps> = ({ showDiscount }) => {
  // Animation variants
  const discountBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }
  };

  if (!showDiscount) return null;

  return (
    <motion.div 
      variants={discountBadgeVariants}
      initial="hidden"
      animate="visible"
      className="absolute -top-6 -right-6 bg-wrap-red text-white rounded-full py-2 px-4 shadow-lg z-10 flex items-center gap-1"
    >
      <Sparkles size={16} className="animate-pulse" />
      <span className="font-bold">10% OFF: FIRSTORDER</span>
    </motion.div>
  );
};

export default DiscountBadge;
