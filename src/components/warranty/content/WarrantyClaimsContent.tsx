
import React from 'react';

const WarrantyClaimsContent = () => {
  return (
    <>
      <p className="text-wrap-grey mb-4">
        Filing a warranty claim is simple. Follow these steps:
      </p>
      
      <ol className="space-y-3 text-wrap-grey list-decimal pl-5">
        <li>
          <span className="font-medium text-wrap-blue">Contact our service department</span>
          <p className="mt-1 text-sm">
            Call us at (312) 597-1286 or email warranty@wrappingtheworld.com to report the issue.
          </p>
        </li>
        
        <li>
          <span className="font-medium text-wrap-blue">Provide documentation</span>
          <p className="mt-1 text-sm">
            Send clear photos of the issue along with your original invoice number and vehicle information.
          </p>
        </li>
        
        <li>
          <span className="font-medium text-wrap-blue">Schedule an inspection</span>
          <p className="mt-1 text-sm">
            Our technicians will examine your vehicle to assess the warranty claim and determine the appropriate solution.
          </p>
        </li>
        
        <li>
          <span className="font-medium text-wrap-blue">Repair or replacement</span>
          <p className="mt-1 text-sm">
            If your claim is approved, we'll schedule the necessary repairs or replacement services at no cost to you.
          </p>
        </li>
      </ol>
      
      <div className="bg-gray-50 p-4 rounded-lg mt-4">
        <p className="text-sm text-wrap-grey italic">
          <strong>Note:</strong> For fastest service, please have your original invoice number, installation date, and vehicle information ready when filing a warranty claim.
        </p>
      </div>
    </>
  );
};

export default WarrantyClaimsContent;
