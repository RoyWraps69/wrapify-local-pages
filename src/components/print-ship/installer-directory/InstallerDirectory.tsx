
import React from 'react';
import { ShoppingCartProvider } from '../shopping-cart/ShoppingCart';
import DirectoryContent from './DirectoryContent';

const InstallerDirectory: React.FC = () => {
  return (
    <div id="installer-network" className="py-6 w-full max-w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-xl shadow-md border border-gray-200 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-wrap-red via-wrap-blue to-wrap-red opacity-70"></div>
      
      {/* Corner decorations */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-wrap-blue/10 to-wrap-blue/0 rounded-bl-3xl"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-wrap-red/10 to-wrap-red/0 rounded-tr-3xl"></div>
      
      <ShoppingCartProvider>
        <DirectoryContent />
      </ShoppingCartProvider>
    </div>
  );
};

export default InstallerDirectory;
