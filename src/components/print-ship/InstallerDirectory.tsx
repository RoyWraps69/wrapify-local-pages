
import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import InstallerSubmissionForm from './InstallerSubmissionForm';
import SearchForm from './installer-directory/SearchForm';
import InstallersList from './installer-directory/InstallersList';
import ContactForm from './installer-directory/ContactForm';
import PremiumListingPromo from './installer-directory/PremiumListingPromo';
import MiniCart from './shopping-cart/MiniCart';
import { ShoppingCartProvider, useShoppingCart } from './shopping-cart/ShoppingCart';
import { Installer, ShopItem } from './types/installer';
import { installers } from './data/installers';

const InstallerDirectoryContent: React.FC = () => {
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
  };

  return (
    <div className="py-8">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-3">
          Find Local Wrap Installers
        </h3>
        <p className="text-wrap-grey max-w-3xl mx-auto">
          Professional installation rates vary by location. Connect with top-rated wrap installers in major cities across the USA.
        </p>
        <div className="mt-4">
          <Button 
            variant="outline" 
            onClick={() => setShowSubmissionForm(!showSubmissionForm)}
            className="mx-auto"
          >
            <UserPlus className="mr-2 h-4 w-4" />
            {showSubmissionForm ? "Hide Application Form" : "Apply to Join Our Installer Network"}
          </Button>
        </div>
      </div>

      {showSubmissionForm && (
        <div className="max-w-3xl mx-auto mb-10">
          <InstallerSubmissionForm />
        </div>
      )}

      <MiniCart />

      {!selectedInstaller ? (
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
      ) : (
        <ContactForm 
          selectedInstaller={selectedInstaller}
          onBack={() => setSelectedInstaller(null)}
        />
      )}
    </div>
  );
};

const InstallerDirectory: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <InstallerDirectoryContent />
    </ShoppingCartProvider>
  );
};

export default InstallerDirectory;
