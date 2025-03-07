
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const InsuranceCTASection: React.FC = () => {
  return (
    <div className="text-center mt-16 bg-gray-50 p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Ready to Protect Your Investment?</h3>
      <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
        Add an insurance plan to your vehicle wrap order or purchase coverage for your existing wrap.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          asChild
          className="bg-wrap-red hover:bg-red-600 text-white"
        >
          <Link to="/print-ship">
            Add to New Wrap Order
          </Link>
        </Button>
        
        <Button 
          asChild
          variant="outline"
          className="border-wrap-blue text-wrap-blue hover:bg-wrap-blue/5"
        >
          <Link to="/contact">
            Purchase for Existing Wrap
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InsuranceCTASection;
