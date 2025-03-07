
import React from 'react';

const VehicleWrapsContent = () => {
  return (
    <>
      <ul className="space-y-2 text-wrap-grey">
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>5-year warranty on premium 3M and Avery Dennison commercial vinyl wraps</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>3-year warranty on color change wraps</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Coverage for peeling, bubbling, and excessive fading</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Free repairs for installation-related issues</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Prorated coverage for partial replacement if needed</span>
        </li>
      </ul>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="font-medium text-wrap-blue mb-2">Warranty Exclusions:</h4>
        <p className="text-sm text-wrap-grey mb-2">
          Our warranty does not cover damage resulting from:
        </p>
        <ul className="space-y-1 text-sm text-wrap-grey">
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Improper cleaning or maintenance</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Accidents, vandalism, or negligence</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Abrasive car washing methods (automated car washes)</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Chemical spills or harsh contaminants</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VehicleWrapsContent;
