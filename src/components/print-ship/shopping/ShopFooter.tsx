
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, HelpCircle, MapPin } from 'lucide-react';
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
          We offer a wide range of additional products and customization options for vehicle wraps near Chicago and surrounding areas.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          variant="outline"
          className="border-wrap-blue text-wrap-blue"
          onClick={() => window.location.href = '/contact'}
        >
          <Mail className="mr-2 h-4 w-4" />
          Get Answers to Your Questions
        </Button>
        
        <a
          href="tel:+13125971286"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-wrap-blue text-white hover:bg-wrap-blue/90 transition-colors"
        >
          <Phone className="h-4 w-4" />
          Speak to a Vehicle Wrap Expert
        </a>
        
        <Button 
          variant="default"
          className="bg-wrap-red hover:bg-wrap-red/90"
          onClick={() => window.location.href = '/locations'}
        >
          <MapPin className="mr-2 h-4 w-4" />
          Find Vehicle Wraps Near Me
        </Button>
        
        <Button 
          variant="default"
          className="bg-wrap-blue hover:bg-wrap-blue/90"
          onClick={() => window.location.href = '/print-ship'}
        >
          Explore Print & Ship Services <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 flex items-center justify-center">
          <HelpCircle className="mr-2 h-5 w-5" />
          Frequently Asked Questions About Vehicle Wraps
        </h3>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-wrap-grey text-sm">
          <div>
            <p className="font-medium mb-1">How much do vehicle wraps cost near Chicago?</p>
            <p>Vehicle wrap pricing varies based on size, design complexity, and materials. Commercial wraps typically range from $2,500-$5,000.</p>
          </div>
          <div>
            <p className="font-medium mb-1">Where can I get a vehicle wrap near me?</p>
            <p>Wrapping The World provides vehicle wrapping services throughout Chicago and all surrounding suburbs with expert installation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopFooter;
