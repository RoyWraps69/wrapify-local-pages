
import React from 'react';
import { ShoppingCartProvider } from './shopping-cart/ShoppingCart';
import DirectoryContent from './installer-directory/DirectoryContent';

const InstallerDirectory: React.FC = () => {
  return (
    <div className="py-8 w-full max-w-full overflow-hidden">
      <ShoppingCartProvider>
        <DirectoryContent />
      </ShoppingCartProvider>
    </div>
  );
};

export default InstallerDirectory;
