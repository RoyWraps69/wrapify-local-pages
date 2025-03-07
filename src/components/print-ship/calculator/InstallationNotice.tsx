
import React from 'react';
import { Info } from 'lucide-react';

const InstallationNotice: React.FC = () => {
  return (
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="bg-gray-50 p-3 rounded-lg flex items-start">
        <Info className="text-wrap-blue w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
        <p className="text-sm text-wrap-blue">
          <strong>Expert Installation Included:</strong> All of our wrap packages include professional installation by our approved technicians. Our team ensures a perfect finish with our industry-leading installation techniques.
        </p>
      </div>
    </div>
  );
};

export default InstallationNotice;
