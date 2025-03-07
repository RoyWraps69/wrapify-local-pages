
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, HelpCircle, MapPin, Facebook, Instagram, Camera } from 'lucide-react';
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
      
      {/* Social Check-in Section */}
      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 text-center">
          Check-In & Save on Your Vehicle Wrap
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Facebook className="h-5 w-5 text-blue-600" />
            </div>
            <h4 className="font-medium mb-2">Facebook Check-In</h4>
            <p className="text-sm text-wrap-grey mb-3">Check in on Facebook when you visit our shop</p>
            <div className="text-wrap-blue font-semibold">Save 10%</div>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Instagram className="h-5 w-5 text-pink-600" />
            </div>
            <h4 className="font-medium mb-2">Instagram Post</h4>
            <p className="text-sm text-wrap-grey mb-3">Tag us in your post with your wrapped vehicle</p>
            <div className="text-wrap-blue font-semibold">Save 15%</div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="font-medium mb-2">Share Your Photos</h4>
            <p className="text-sm text-wrap-grey mb-3">Submit photos of your wrapped vehicle for our gallery</p>
            <div className="text-wrap-blue font-semibold">Get Featured + 10% Off</div>
          </div>
        </div>
        <p className="text-xs text-center text-wrap-grey mt-4">
          *Discounts apply to your next service or purchase. Cannot be combined with other offers. 
          Must be claimed within 90 days.
        </p>
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
