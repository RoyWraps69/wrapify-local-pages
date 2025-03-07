
import React from 'react';

const CeramicCoatingContent = () => {
  return (
    <>
      <ul className="space-y-2 text-wrap-grey">
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>5-year warranty on professional ceramic coating applications</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Guaranteed hydrophobic properties for the warranty period</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Coverage for coating failure, delamination, or loss of gloss</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Annual inspection and maintenance service included</span>
        </li>
        <li className="flex items-start">
          <span className="text-wrap-red mr-2">•</span>
          <span>Free reapplication if coating fails prematurely</span>
        </li>
      </ul>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h4 className="font-medium text-wrap-blue mb-2">Maintaining Your Warranty:</h4>
        <p className="text-sm text-wrap-grey mb-2">
          To maintain your ceramic coating warranty:
        </p>
        <ul className="space-y-1 text-sm text-wrap-grey">
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Schedule annual inspection and maintenance service</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Follow proper washing techniques using pH-neutral products</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Avoid automatic car washes with abrasive brushes</span>
          </li>
          <li className="flex items-start">
            <span className="text-wrap-red mr-2">•</span>
            <span>Clean bird droppings and tree sap promptly</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CeramicCoatingContent;
