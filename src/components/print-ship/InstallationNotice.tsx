
import React from 'react';

const InstallationNotice: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 text-center">
      <p className="text-amber-800 font-medium">
        <span className="underline font-bold">Important:</span> Pricing below is for wrap materials and shipping only. Professional installation is not included.
        <a href="#installer-network" className="text-wrap-red hover:underline ml-1">
          Find a certified installer in your area below.
        </a>
      </p>
    </div>
  );
};

export default InstallationNotice;
