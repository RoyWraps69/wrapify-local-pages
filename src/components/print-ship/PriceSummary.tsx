
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InfoIcon, ShoppingCart, CreditCard, Shield, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

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
  
  return (
    <motion.div variants={itemVariants}>
      <div className="bg-gradient-to-br from-wrap-blue to-wrap-blue-dark text-white p-6 rounded-lg shadow-lg mb-8 border border-wrap-blue-dark/20">
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <CreditCard className="w-5 h-5" />
          </div>
          Your Custom Quote
        </h3>
        
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg mb-4">
          <div className="flex items-start">
            <InfoIcon className="inline-block w-4 h-4 mr-2 mt-1 flex-shrink-0" /> 
            <p className="text-white/90 text-sm">
              This quote includes wrap materials, design work and shipping. Installation services can be arranged separately through our nationwide network.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between border-b border-white/20 pb-3 pt-1">
            <span className="flex items-center">
              <Truck className="w-4 h-4 mr-2 text-white/70" />
              Material ({price.totalSqFt.toFixed(0)} sq ft)
            </span>
            <span>{formatCurrency(price.subtotal)}</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-3">
            <span className="flex items-center">
              <Palette className="w-4 h-4 mr-2 text-white/70" />
              Design Fee
            </span>
            <span>{formatCurrency(price.designFee)}</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-3">
            <span className="flex items-center">
              <Truck className="w-4 h-4 mr-2 text-white/70" />
              Shipping
            </span>
            <span>{formatCurrency(price.shippingFee)}</span>
          </div>
          
          {(selectedAddOns?.length > 0 && price.addOnsFee) && (
            <div className="flex justify-between border-b border-white/20 pb-3">
              <span className="flex items-center">
                <Plus className="w-4 h-4 mr-2 text-white/70" />
                Add-ons
              </span>
              <span>{formatCurrency(price.addOnsFee)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-xl font-bold bg-white/10 p-3 rounded-lg mt-4">
            <span>Total Price</span>
            <span>{formatCurrency(price.total)}</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={handleAddToCart}
            className="flex-1 bg-wrap-red hover:bg-red-600 text-white font-medium py-6 transform transition hover:scale-[1.02]"
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          
          <Link 
            to="/contact" 
            className="flex-1 flex items-center justify-center py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors"
          >
            <Phone className="mr-2 h-4 w-4" /> Request Custom Quote
          </Link>
        </div>
        
        <div className="mt-4 text-center text-white/80 text-sm">
          <p>Or call us at (312) 555-WRAP for immediate assistance</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
        <div className="flex items-start gap-3 mb-4">
          <Shield className="text-wrap-blue w-5 h-5 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-wrap-blue">Premium Quality Guarantee</h4>
            <p className="text-sm text-wrap-grey">Our premium materials and expert craftsmanship ensure exceptional results for your vehicle wrap project.</p>
          </div>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="text-green-600 text-xs w-3 h-3" />
            </div>
            <span className="text-sm text-wrap-grey">Chicago-quality design and printing, nationwide delivery</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="text-green-600 text-xs w-3 h-3" />
            </div>
            <span className="text-sm text-wrap-grey">Perfect for DIY installers or local wrap shops</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="text-green-600 text-xs w-3 h-3" />
            </div>
            <span className="text-sm text-wrap-grey">Comprehensive installation instructions included</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <CheckCircle className="text-green-600 text-xs w-3 h-3" />
            </div>
            <span className="text-sm text-wrap-grey">Installer referrals available in most major cities</span>
          </li>
        </ul>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-green-700">4,293 satisfied customers</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import { Palette, Phone, Plus } from 'lucide-react';
export default PriceSummary;
