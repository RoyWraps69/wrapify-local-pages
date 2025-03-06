
import React from 'react';
import { Button } from '@/components/ui/button';

interface ShopHeaderProps {
  setActiveCategory: (category: string) => void;
}

const ShopHeader: React.FC<ShopHeaderProps> = ({ setActiveCategory }) => {
  return (
    <div className="mb-8">
      <p className="text-lg text-wrap-grey mb-6">
        Browse our selection of professional-grade vehicle wrap materials, merchandise, and design services. 
        Everything you need for your next wrap project, delivered directly to your door.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Need Premium Installation?</h3>
          <p className="mb-4">Find certified installers in your area through our nationwide network.</p>
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '/print-ship#installer-directory'}
          >
            Find Installers
          </Button>
        </div>
        
        <div className="bg-gradient-to-r from-wrap-blue to-blue-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">Bulk Ordering Available</h3>
          <p className="mb-4">Special pricing for wrap shops and fleet managers. Contact us for details.</p>
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '/contact'}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
