
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ShopFooterProps {
  setActiveCategory: (category: string) => void;
}

const ShopFooter: React.FC<ShopFooterProps> = ({ setActiveCategory }) => {
  return (
    <div className="mt-16 bg-gray-50 rounded-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-2">
          Can't Find What You're Looking For?
        </h2>
        <p className="text-wrap-grey mb-4">
          We offer a wide range of additional products and customization options.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          variant="outline"
          className="border-wrap-blue text-wrap-blue"
          onClick={() => window.location.href = '/contact'}
        >
          Contact Us
        </Button>
        
        <Button 
          variant="default"
          className="bg-wrap-red hover:bg-wrap-red/90"
          onClick={() => window.location.href = '/print-ship'}
        >
          Explore Print & Ship Services <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ShopFooter;
