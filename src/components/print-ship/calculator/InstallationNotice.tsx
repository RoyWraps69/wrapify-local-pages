
import React from 'react';

const InstallationNotice: React.FC = () => {
  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-center">
      <p className="text-green-800 font-medium">
        <span className="underline font-bold">Good news:</span> All pricing includes professional printing and installation!
        <span className="text-wrap-blue ml-1">
          No separate installation fees required.
        </span>
      </p>
    </div>
  );
};

export default InstallationNotice;
