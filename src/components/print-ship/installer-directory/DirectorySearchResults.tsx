
import React from 'react';
import { Installer, ShopItem } from '../types/installer';
import SearchForm from './SearchForm';
import InstallersList from './InstallersList';
import PremiumListingPromo from './PremiumListingPromo';

interface DirectorySearchResultsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  filteredInstallers: Installer[];
  handleSelectInstaller: (installer: Installer) => void;
  handleAddToCart: (item: ShopItem) => void;
}

const DirectorySearchResults: React.FC<DirectorySearchResultsProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  filteredInstallers,
  handleSelectInstaller,
  handleAddToCart
}) => {
  return (
    <>
      <SearchForm 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InstallersList 
            installers={filteredInstallers}
            onSelectInstaller={handleSelectInstaller}
            searchQuery={searchQuery}
          />
        </div>
        <div>
          <PremiumListingPromo addToCart={handleAddToCart} />
        </div>
      </div>
    </>
  );
};

export default DirectorySearchResults;
