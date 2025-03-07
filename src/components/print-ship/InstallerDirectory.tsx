
import React from 'react';
import { ShoppingCartProvider } from './shopping-cart/ShoppingCart';
import DirectoryContent from './installer-directory/DirectoryContent';

const InstallerDirectory: React.FC = () => {
  return (
    <div className="py-6 w-full max-w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm border border-gray-100">
      <ShoppingCartProvider>
        <DirectoryContent />
      </ShoppingCartProvider>
    </div>
  );
};

export default InstallerDirectory;
