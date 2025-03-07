
import React from 'react';
import { Link } from 'react-router-dom';
import { Printer, GraduationCap } from 'lucide-react';
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
        className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
      >
        <Printer className="mr-1" size={16} />
        Print & Ship
      </Link>
      <Link
        to="/training-classes"
        className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
      >
        <GraduationCap className="mr-1" size={16} />
        Training Classes
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
