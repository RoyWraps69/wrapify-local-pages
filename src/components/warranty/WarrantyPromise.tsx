
import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const WarrantyPromise = () => {
  return (
    <div className="bg-wrap-blue/5 p-8 rounded-lg mb-12">
      <div className="flex items-start mb-6">
        <div className="shrink-0 mr-4">
          <Shield className="h-12 w-12 text-wrap-blue" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-wrap-blue mb-2">Our 5-Year Warranty Promise</h2>
          <p className="text-wrap-grey">
            At Wrapping The World, we're confident in the quality of our materials and craftsmanship. That's why we offer a comprehensive 5-year warranty on all our professional installations. This warranty represents our commitment to excellence and customer satisfaction.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-wrap-red" />
          </div>
          <h3 className="font-medium text-lg mb-2 text-wrap-blue">Material Defects</h3>
          <p className="text-sm text-wrap-grey">
            Coverage for any manufacturer defects in vinyl wraps, ceramic coatings, and paint protection film.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-wrap-red" />
          </div>
          <h3 className="font-medium text-lg mb-2 text-wrap-blue">Installation Quality</h3>
          <p className="text-sm text-wrap-grey">
            Protection against bubbling, peeling, or lifting due to installation issues.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-wrap-red" />
          </div>
          <h3 className="font-medium text-lg mb-2 text-wrap-blue">Color Fastness</h3>
          <p className="text-sm text-wrap-grey">
            Warranty against excessive fading or discoloration beyond normal wear.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPromise;
