
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const QuoteCTA: React.FC = () => {
  return (
    <div className="mt-16 text-center">
      <Link 
        to="/contact" 
        className="inline-flex items-center justify-center px-6 py-3 bg-wrap-red text-white rounded-lg hover:bg-wrap-red/90 transition-all shadow-md"
      >
        <span>Get a Free Car Wrap Quote</span>
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default QuoteCTA;
