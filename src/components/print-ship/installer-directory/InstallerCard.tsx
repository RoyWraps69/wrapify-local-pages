
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
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${
        installer.isPremium 
          ? "border-2 border-amber-300" 
          : installer.isOurShop 
            ? "border-2 border-wrap-red" 
            : "border border-gray-200"
      } p-4 relative`}
    >
      {installer.featured && (
        <div className="absolute -top-2 -right-2">
          <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs px-2 py-0.5 rounded-full shadow-md">
            <Award className="w-3 h-3 inline-block mr-1" /> Featured
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-semibold text-lg text-wrap-blue">{installer.name}</h4>
        <div className="flex items-center gap-1">
          {installer.isOurShop && (
            <span className="bg-gradient-to-r from-wrap-red to-red-600 text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
              Our Shop
            </span>
          )}
          {installer.isPremium && (
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs px-2 py-0.5 rounded-full flex items-center shadow-sm">
              <Star className="w-3 h-3 mr-1" /> Premium
            </span>
          )}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1 mb-3">
        {installer.specialties.slice(0, 3).map((specialty, index) => (
          <span 
            key={index} 
            className={`text-xs ${
              installer.isPremium 
                ? "bg-amber-50 text-amber-800 border border-amber-200" 
                : installer.isOurShop 
                  ? "bg-wrap-red/10 text-wrap-red border border-wrap-red/20" 
                  : "bg-gray-100 text-wrap-grey border border-gray-200"
            } px-2 py-0.5 rounded-full`}
          >
            {specialty}
          </span>
        ))}
        {installer.specialties.length > 3 && (
          <span className="text-xs bg-gray-100 text-wrap-grey px-2 py-0.5 rounded-full">
            +{installer.specialties.length - 3} more
          </span>
        )}
      </div>
      
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex items-start">
          <MapPin className="w-4 h-4 text-wrap-red mt-1 flex-shrink-0 mr-1" />
          <span className="text-xs text-wrap-grey">{installer.address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-4 h-4 text-wrap-red flex-shrink-0 mr-1" />
          <a href={`tel:${installer.phone}`} className="text-xs text-wrap-grey hover:text-wrap-blue underline">
            {installer.phone}
          </a>
        </div>
      </div>
      
      {installer.isPremium && (
        <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-md p-2 mb-3 text-center border border-amber-200">
          <span className="text-xs font-medium text-amber-800 flex items-center justify-center">
            <Award className="w-3 h-3 mr-1" /> Premium Installer Benefits
          </span>
        </div>
      )}
      
      <Button 
        variant={installer.isPremium ? "default" : installer.isOurShop ? "default" : "outline"}
        className={`w-full text-sm py-1 h-auto ${
          installer.isPremium 
            ? "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white" 
            : installer.isOurShop 
              ? "bg-gradient-to-r from-wrap-red to-red-600 hover:from-red-600 hover:to-red-700 text-white" 
              : ""
        }`}
        onClick={() => onSelect(installer)}
      >
        Contact Installer
      </Button>
    </div>
  );
};

export default InstallerCard;
