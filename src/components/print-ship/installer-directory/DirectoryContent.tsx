
import React, { useState } from 'react';
import { Installer, ShopItem } from '../types/installer';
import { installers } from '../data/installers';
import { useToast } from '@/components/ui/use-toast';
import InstallerSubmissionForm from '../InstallerSubmissionForm';
import MiniCart from '../shopping-cart/MiniCart';
import SearchForm from './SearchForm';
import InstallersList from './InstallersList';
import ContactForm from './ContactForm';
import PremiumListingPromo from './PremiumListingPromo';
import DirectoryHeader from './DirectoryHeader';
import DirectorySearchResults from './DirectorySearchResults';
import { useShoppingCart } from '../shopping-cart/ShoppingCart';

const DirectoryContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredInstallers, setFilteredInstallers] = useState<Installer[]>(installers);
  const [selectedInstaller, setSelectedInstaller] = useState<Installer | null>(null);
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { toast } = useToast();
  const { addItem } = useShoppingCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchPerformed(true);
    
    setTimeout(() => {
      if (searchQuery.trim() === "") {
        setFilteredInstallers(installers);
      } else {
        const query = searchQuery.toLowerCase();
        const results = installers.filter(
          installer => 
            installer.city.toLowerCase().includes(query) || 
            installer.state.toLowerCase().includes(query)
        );
        setFilteredInstallers(results);
      }
      setIsLoading(false);
    }, 500); // Simulate loading for half a second
  };

  const handleSelectInstaller = (installer: Installer) => {
    setSelectedInstaller(installer);
  };
  
  const handleAddToCart = (item: ShopItem) => {
    addItem(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="px-4">
      <DirectoryHeader 
        showSubmissionForm={showSubmissionForm} 
        setShowSubmissionForm={setShowSubmissionForm} 
      />
      
      {showSubmissionForm ? (
        <div className="max-w-3xl mx-auto mb-6">
          <InstallerSubmissionForm />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-4">
          <MiniCart />
          
          {!selectedInstaller ? (
            <>
              <SearchForm 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={handleSearch}
              />
              
              <DirectorySearchResults
                results={filteredInstallers}
                isLoading={isLoading}
                searchPerformed={searchPerformed}
              />
            </>
          ) : (
            <ContactForm 
              selectedInstaller={selectedInstaller}
              onBack={() => setSelectedInstaller(null)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DirectoryContent;
