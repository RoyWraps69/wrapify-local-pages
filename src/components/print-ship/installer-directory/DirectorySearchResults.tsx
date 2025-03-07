
import React from 'react';
import { Installer } from '../types/installer';
import InstallerCard from './InstallerCard';
import PremiumListingPromo from './PremiumListingPromo';
import { useShoppingCart } from '../shopping-cart/ShoppingCart';

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
      <div className="text-center py-6">
        <div className="spinner-border text-wrap-blue" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
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
        
        <div className="mt-4">
          <PremiumListingPromo />
        </div>
      </div>
    );
  }

  if (!searchPerformed) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm text-center">
        <h3 className="text-xl font-semibold mb-2 text-wrap-blue">Search for installers</h3>
        <p className="text-wrap-grey">
          Enter a location or service type above to find wrap installers in your area.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 bg-gray-50 border border-gray-200 text-wrap-blue p-3 rounded-md">
        <p className="font-medium">Found {results.length} installers matching your search criteria</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="space-y-4">
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
