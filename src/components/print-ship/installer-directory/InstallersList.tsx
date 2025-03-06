
import React from 'react';
import { Installer } from '../types/installer';
import InstallerCard from './InstallerCard';

interface InstallersListProps {
  installers: Installer[];
  onSelectInstaller: (installer: Installer) => void;
  searchQuery: string;
}

const InstallersList: React.FC<InstallersListProps> = ({ 
  installers, 
  onSelectInstaller,
  searchQuery 
}) => {
  // Sort installers: featured premium first, then premium, then our shop, then regular
  const sortedInstallers = [...installers].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    if (a.isPremium && !b.isPremium) return -1;
    if (!a.isPremium && b.isPremium) return 1;
    if (a.isOurShop && !b.isOurShop) return -1;
    if (!a.isOurShop && b.isOurShop) return 1;
    return 0;
  });

  return (
    <div>
      {sortedInstallers.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sortedInstallers.map(installer => (
            <InstallerCard 
              key={installer.id} 
              installer={installer}
              onSelect={onSelectInstaller}
            />
          ))}
        </div>
      )}
      
      {installers.length === 0 && (
        <div className="text-center py-8">
          <p className="text-wrap-grey">No installers found for "{searchQuery}". Try another city or state.</p>
        </div>
      )}
    </div>
  );
};

export default InstallersList;
