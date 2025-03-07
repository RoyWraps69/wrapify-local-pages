
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WarrantyCTA = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold text-wrap-blue mb-4">
        Ready to Protect Your Vehicle Investment?
      </h2>
      <p className="text-wrap-grey mb-6">
        Our professional installations come with industry-leading warranty coverage for complete peace of mind.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          asChild
          className="bg-wrap-red hover:bg-red-600 text-white"
        >
          <Link to="/contact">
            Contact Us Today
          </Link>
        </Button>
        
        <Button 
          asChild
          variant="outline"
          className="border-wrap-blue text-wrap-blue hover:bg-wrap-blue/5"
        >
          <Link to="/wrap-insurance">
            Explore Insurance Options
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default WarrantyCTA;
