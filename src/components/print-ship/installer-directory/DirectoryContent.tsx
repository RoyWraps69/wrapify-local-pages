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
  const { toast } = useToast();
  const { addItem } = useShoppingCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setFilteredInstallers(installers);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = installers.filter(
      installer => 
        installer.city.toLowerCase().includes(query) || 
        installer.state.toLowerCase().includes(query)
    );
    
    setFilteredInstallers(results);
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
    <>
      <DirectoryHeader 
        showSubmissionForm={showSubmissionForm} 
        setShowSubmissionForm={setShowSubmissionForm} 
      />
      
      {showSubmissionForm && (
        <div className="max-w-3xl mx-auto mb-10">
          <InstallerSubmissionForm />
        </div>
      )}

      <MiniCart />

      {!selectedInstaller ? (
        <DirectorySearchResults
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
          filteredInstallers={filteredInstallers}
          handleSelectInstaller={handleSelectInstaller}
          handleAddToCart={handleAddToCart}
        />
      ) : (
        <ContactForm 
          selectedInstaller={selectedInstaller}
          onBack={() => setSelectedInstaller(null)}
        />
      )}
    </>
  );
};

export default DirectoryContent;
