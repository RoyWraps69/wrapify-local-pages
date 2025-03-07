
import React from 'react';
import { ShoppingCartProvider } from './shopping-cart/ShoppingCart';
import DirectoryContent from './installer-directory/DirectoryContent';

const InstallerDirectory: React.FC = () => {
  return (
    <div id="installer-network" className="py-6 w-full max-w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-xl shadow-md border border-gray-200">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wrap-red via-wrap-blue to-wrap-red opacity-70"></div>
      <ShoppingCartProvider>
        <DirectoryContent />
      </ShoppingCartProvider>
    </div>
  );
};

export default InstallerDirectory;
