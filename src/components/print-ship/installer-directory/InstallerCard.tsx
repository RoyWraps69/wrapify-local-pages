
import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Star, Award, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Installer } from '../types/installer';

interface InstallerCardProps {
  installer: Installer;
  onSelect: (installer: Installer) => void;
}

const InstallerCard: React.FC<InstallerCardProps> = ({ installer, onSelect }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md border ${
        installer.isPremium 
          ? "border-amber-400 shadow-lg" 
          : installer.isOurShop 
            ? "border-wrap-red shadow-lg" 
            : "border-gray-200"
      } p-5 hover:shadow-lg transition-shadow relative`}
    >
      {installer.featured && (
        <div className="absolute -top-3 -right-3">
          <div className="bg-amber-400 text-white text-xs px-3 py-1 rounded-full shadow-md">
            <Award className="w-3 h-3 inline-block mr-1" /> Featured
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-lg text-wrap-blue">{installer.name}</h4>
        <div className="flex flex-col items-end gap-1">
          {installer.isOurShop && (
            <span className="bg-wrap-red text-white text-xs px-2 py-1 rounded-full">
              Our Shop
            </span>
          )}
          {installer.isPremium && (
            <span className="bg-amber-400 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <Star className="w-3 h-3 mr-1" /> Premium
            </span>
          )}
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-start">
          <MapPin className="w-4 h-4 text-wrap-red mt-1 flex-shrink-0 mr-2" />
          <span className="text-sm text-wrap-grey">{installer.address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
          <a href={`tel:${installer.phone}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
            {installer.phone}
          </a>
        </div>
        <div className="flex items-center">
          <Mail className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
          <a href={`mailto:${installer.email}`} className="text-sm text-wrap-grey hover:text-wrap-blue">
            {installer.email}
          </a>
        </div>
        {installer.website && (
          <div className="flex items-center">
            <ExternalLink className="w-4 h-4 text-wrap-red flex-shrink-0 mr-2" />
            <a 
              href={`https://${installer.website}`} 
              className="text-sm text-wrap-grey hover:text-wrap-blue"
              target="_blank" 
              rel="noopener noreferrer"
            >
              {installer.website}
            </a>
          </div>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {installer.specialties.map((specialty, index) => (
          <span 
            key={index} 
            className={`text-xs ${
              installer.isPremium 
                ? "bg-amber-100 text-amber-800" 
                : installer.isOurShop 
                  ? "bg-wrap-red/10 text-wrap-red" 
                  : "bg-gray-100 text-wrap-grey"
            } px-2 py-1 rounded-full`}
          >
            {specialty}
          </span>
        ))}
      </div>
      
      {installer.isPremium && (
        <div className="bg-amber-50 rounded-md p-2 mb-4">
          <h5 className="text-xs font-semibold text-amber-800 mb-1 flex items-center">
            <Award className="w-3 h-3 mr-1" /> Premium Benefits
          </h5>
          <ul className="text-xs text-amber-700 space-y-1">
            <li className="flex items-center"><Check className="w-3 h-3 mr-1 text-amber-500" /> Priority placement in search results</li>
            <li className="flex items-center"><Check className="w-3 h-3 mr-1 text-amber-500" /> Custom business description</li>
            <li className="flex items-center"><Check className="w-3 h-3 mr-1 text-amber-500" /> Dedicated profile page</li>
          </ul>
        </div>
      )}
      
      <Button 
        variant={installer.isPremium ? "default" : installer.isOurShop ? "default" : "outline"}
        className={`w-full ${installer.isPremium ? "bg-amber-500 hover:bg-amber-600" : ""}`}
        onClick={() => onSelect(installer)}
      >
        Contact Installer
      </Button>
    </div>
  );
};

export default InstallerCard;
