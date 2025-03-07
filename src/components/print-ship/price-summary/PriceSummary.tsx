
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoIcon, CreditCard } from 'lucide-react';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

// Import smaller components
import PriceBreakdown from './PriceBreakdown';
import ActionButtons from './ActionButtons';
import QualityGuarantee from './QualityGuarantee';
import DiscountBadge from './DiscountBadge';

interface PriceSummaryProps {
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
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ price, selectedAddOns = [] }) => {
  const { addItem, setIsCartOpen } = useShoppingCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  
  const handleAddToCart = () => {
    // Create a complete wrap package item
    const wrapPackage = {
      id: `wrap_package_${Date.now()}`,
      name: 'Custom Wrap Package',
      description: `Complete wrap package with ${price.totalSqFt.toFixed(0)} sq ft of material and all selected add-ons`,
      price: price.total,
      category: 'wrap_material' as const,
    };
    
    addItem(wrapPackage);
    toast({
      title: "Added to cart!",
      description: "Your custom wrap package has been added to the cart.",
    });
    setIsCartOpen(true);
  };
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Format currency helper
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Simulate showing a discount after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiscount(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <motion.div
      initial="hidden"
      animate="visible" 
      variants={itemVariants}
      className="relative"
    >
      <DiscountBadge showDiscount={showDiscount} />

      <div className="bg-gradient-to-br from-wrap-blue to-wrap-blue-dark text-white p-6 rounded-lg shadow-lg mb-8 border border-wrap-blue-dark/20">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <CreditCard className="w-5 h-5" />
          </div>
          Your Complete Quote
        </h3>
        
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-4">
          <div className="flex items-start">
            <InfoIcon className="inline-block w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
            <p className="text-white/90 text-sm">
              This all-inclusive quote covers materials, design, professional installation, and shipping to transform your vehicle with our premium wrap services.
            </p>
          </div>
        </div>
        
        <PriceBreakdown 
          price={price} 
          selectedAddOns={selectedAddOns} 
          formatCurrency={formatCurrency} 
        />
        
        <ActionButtons handleAddToCart={handleAddToCart} />
      </div>
      
      <QualityGuarantee />
    </motion.div>
  );
};

export default PriceSummary;
