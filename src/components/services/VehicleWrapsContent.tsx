
import React from 'react';
import { ArrowRight } from 'lucide-react';

const VehicleWrapsContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8 mb-12">
      <div className="bg-wrap-blue/5 rounded-lg p-6 border border-wrap-blue/10">
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
          Professional Vehicle Wraps for Every Need
        </h3>
        <p className="text-wrap-grey mb-4">
          Whether you're looking to transform your personal vehicle with a stunning color change, 
          create eye-catching branding for your business fleet, or add protective elements to 
          preserve your vehicle's value, our expert team delivers exceptional results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <a href="/services/color-change-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
            <ArrowRight className="h-4 w-4 mr-2" />
            <span>Color Change Wraps</span>
          </a>
          <a href="/services/commercial-fleet-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
            <ArrowRight className="h-4 w-4 mr-2" />
            <span>Commercial Fleet Wraps</span>
          </a>
          <a href="/services/paint-protection-film" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
            <ArrowRight className="h-4 w-4 mr-2" />
            <span>Paint Protection Film</span>
          </a>
          <a href="/services/partial-wraps" className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors">
            <ArrowRight className="h-4 w-4 mr-2" />
            <span>Partial Wraps</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VehicleWrapsContent;
