
import React from 'react';
import { Calculator, Info } from 'lucide-react';

const CalculatorHeader: React.FC = () => {
  return (
    <>
      <div className="flex items-center gap-2 mb-5">
        <div className="bg-wrap-blue p-2 rounded-full">
          <Calculator className="text-white w-5 h-5" />
        </div>
        <h3 className="text-2xl font-semibold text-wrap-blue">Build Your Wrap Package</h3>
      </div>
      
      {/* Installation included notice */}
      <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-3 text-sm rounded-r">
        <div className="flex items-start">
          <Info className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
          <p className="text-green-700">
            <span className="font-medium">Complete Service:</span> All pricing includes premium materials, 
            professional design, shipping, and professional installation by our approved technicians.
          </p>
        </div>
      </div>
    </>
  );
};

export default CalculatorHeader;
