
import React from 'react';

const PPFContent = () => {
  return (
    <>
      <ul className="space-y-2 text-wrap-grey">
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>5-year warranty on self-healing paint protection film</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Coverage for yellowing, bubbling, cracking, or peeling</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Guaranteed self-healing properties for minor scratches</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Free replacement if film fails within warranty period</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Transferable warranty for one-time vehicle ownership change</span>
        </li>
      </ul>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="font-medium text-wrap-blue mb-2">Self-Healing Activation:</h4>
        <p className="text-sm text-wrap-grey">
          The self-healing properties of our paint protection film are activated by heat. Minor scratches and swirl marks will disappear when exposed to warm water or sunlight. For faster healing in colder months, you can use a hairdryer on low heat to restore the film's appearance.
        </p>
      </div>
    </>
  );
};

export default PPFContent;
