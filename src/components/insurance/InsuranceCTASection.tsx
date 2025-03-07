
import React from 'react';
import { Link } from 'react-router-dom';

const InsuranceCTASection: React.FC = () => {
  return (
    <div className="text-center mt-12">
      <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Ready to Protect Your Investment?</h3>
      <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
        Add an insurance plan to your vehicle wrap order or purchase coverage for your existing wrap.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/print-ship" 
          className="px-6 py-3 bg-wrap-red text-white font-medium rounded-md hover:bg-red-600 transition-colors"
        >
          Add to New Wrap Order
        </Link>
        <Link 
          to="/contact" 
          className="px-6 py-3 bg-gray-100 text-wrap-blue font-medium rounded-md hover:bg-gray-200 transition-colors"
        >
          Purchase for Existing Wrap
        </Link>
      </div>
    </div>
  );
};

export default InsuranceCTASection;
