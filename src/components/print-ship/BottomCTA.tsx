
import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Shield } from 'lucide-react';

const BottomCTA: React.FC = () => {
  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Ready to Transform Your Vehicle?</h3>
      <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
        Whether you need vehicle wraps for your nationwide business locations or a single custom wrap shipped to your door, we've got you covered.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/contact" 
          className="px-6 py-3 bg-wrap-red text-white font-medium rounded-md hover:bg-red-600 transition-colors inline-flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Get Started
        </Link>
        <Link 
          to="/wrap-insurance" 
          className="px-6 py-3 bg-gray-100 text-wrap-blue font-medium rounded-md hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2"
        >
          <Shield className="w-4 h-4" />
          View Insurance Options
        </Link>
      </div>
    </div>
  );
};

export default BottomCTA;
