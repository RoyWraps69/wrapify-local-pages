
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {installers.map(installer => (
        <InstallerCard 
          key={installer.id} 
          installer={installer}
          onSelect={onSelectInstaller}
        />
      ))}
      
      {installers.length === 0 && (
        <div className="text-center py-8 col-span-full">
          <p className="text-wrap-grey">No installers found for "{searchQuery}". Try another city or state.</p>
        </div>
      )}
    </div>
  );
};

export default InstallersList;
