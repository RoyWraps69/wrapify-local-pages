
import React from 'react';
import { Link } from 'react-router-dom';
import { InfoIcon } from 'lucide-react';

interface PriceSummaryProps {
  price: {
    subtotal: number;
    designFee: number;
    shippingFee: number;
    total: number;
    pricePerSqFt: number;
    totalSqFt: number;
  };
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ price }) => {
  return (
    <div>
      <div className="bg-wrap-blue text-white p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-2xl font-semibold mb-6">Your Custom Quote</h3>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span>Material Cost ({price.totalSqFt.toFixed(0)} sq ft)</span>
            <span>${price.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span>Design Fee</span>
            <span>${price.designFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between border-b border-white/20 pb-2">
            <span>Shipping</span>
            <span>${price.shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total Price</span>
            <span>${price.total.toFixed(2)}</span>
          </div>
        </div>
        
        <Link 
          to="/contact" 
          className="block w-full py-3 text-center bg-wrap-red hover:bg-red-600 text-white font-medium rounded-md transition-colors"
        >
          Request Detailed Quote
        </Link>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="flex items-start gap-3 mb-4">
          <InfoIcon className="text-wrap-blue w-5 h-5 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-wrap-blue">Print & Ship Benefits</h4>
            <p className="text-sm text-wrap-grey">Our print and ship service allows you to receive professional-grade vehicle wraps anywhere in the country.</p>
          </div>
        </div>
        
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-wrap-red text-xs">✓</span>
            </div>
            <span className="text-sm text-wrap-grey">Chicago-quality design and printing, nationwide delivery</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-wrap-red text-xs">✓</span>
            </div>
            <span className="text-sm text-wrap-grey">Perfect for DIY installers or local wrap shops</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-wrap-red text-xs">✓</span>
            </div>
            <span className="text-sm text-wrap-grey">Comprehensive installation instructions included</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-5 h-5 rounded-full bg-wrap-red/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-wrap-red text-xs">✓</span>
            </div>
            <span className="text-sm text-wrap-grey">Installer referrals available in most major cities</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PriceSummary;
