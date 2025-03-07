
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShopFooterProps {
  setActiveCategory: (category: string) => void;
}

const ShopFooter: React.FC<ShopFooterProps> = ({ setActiveCategory }) => {
  return (
    <div className="mt-16 bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
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
          <Mail className="mr-2 h-4 w-4" />
          Contact Us
        </Button>
        
        <a
          href="tel:+13125971286"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-wrap-blue text-white hover:bg-wrap-blue/90 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        
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
