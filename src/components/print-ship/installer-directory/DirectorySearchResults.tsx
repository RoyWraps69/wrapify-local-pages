
import React from 'react';
import { Installer } from '../types/installer';
import InstallerCard from './InstallerCard';
import PremiumListingPromo from './PremiumListingPromo';
import { useShoppingCart } from '../shopping-cart/ShoppingCart';
import { Loader2 } from 'lucide-react';

interface DirectorySearchResultsProps {
  results: Installer[];
  isLoading: boolean;
  searchPerformed: boolean;
}

const DirectorySearchResults: React.FC<DirectorySearchResultsProps> = ({
  results,
  isLoading,
  searchPerformed
}) => {
  const { addItem } = useShoppingCart();
  
  if (isLoading) {
    return (
      <div className="text-center py-10">
        <Loader2 className="w-10 h-10 text-wrap-blue animate-spin mx-auto mb-4" />
        <p className="mt-2 text-wrap-grey">Searching for installers...</p>
      </div>
    );
  }

  if (results.length === 0 && searchPerformed) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2 text-wrap-blue">No installers found</h3>
        <p className="text-wrap-grey mb-4">
          We couldn't find any installers matching your search criteria. Try adjusting your search parameters or consider our Print & Ship service.
        </p>
        
        <div className="mt-6 max-w-md mx-auto">
          <PremiumListingPromo />
        </div>
      </div>
    );
  }

  if (!searchPerformed) {
    return (
      <div className="bg-white p-6 rounded-lg text-center">
        <div className="mb-4">
          <img 
            src="/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png" 
            alt="Installer network" 
            className="h-32 object-contain mx-auto opacity-20"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-wrap-blue">Find Professional Installers</h3>
        <p className="text-wrap-grey">
          Enter a location or service type above to find wrap installers in your area.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-wrap-blue p-3 rounded-md">
        <p className="font-medium">Found {results.length} installers matching your search criteria</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map(installer => (
              <InstallerCard key={installer.id} installer={installer} onSelect={() => {}} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <PremiumListingPromo />
        </div>
      </div>
    </div>
  );
};

export default DirectorySearchResults;
