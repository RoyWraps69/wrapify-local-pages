
import React from 'react';
import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';
import ServicesDropdown from './ServicesDropdown';
import ResourcesDropdown from './ResourcesDropdown';
import LocationsDropdown from './LocationsDropdown';

const DesktopNavigation: React.FC = () => {
  return (
    <nav className="hidden lg:flex items-center space-x-1">
      <Link
        to="/"
        className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
      >
        Home
      </Link>
      <ServicesDropdown />
      <Link
        to="/gallery"
        className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
      >
        Gallery
      </Link>
      <Link
        to="/print-ship"
        className="flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium shadow-neon-blue transform hover:scale-105 transition-all duration-300 group"
      >
        <Printer className="mr-1.5 group-hover:animate-pulse" size={18} />
        <span className="relative">
          Print & Ship
          <span className="absolute inset-0 w-full h-full bg-white/20 animate-light-streak"></span>
        </span>
      </Link>
      <LocationsDropdown />
      <ResourcesDropdown />
      <Link
        to="/contact"
        className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
