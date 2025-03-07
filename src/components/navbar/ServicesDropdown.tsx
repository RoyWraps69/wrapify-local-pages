
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors focus:outline-none"
      >
        <span>Services</span>
        {isOpen ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              to="/services/vehicle-wraps"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Vehicle Wraps
            </Link>
            <Link
              to="/services/fleet-graphics"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Fleet Graphics
            </Link>
            <Link
              to="/services/commercial-fleet-wraps"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Commercial Fleet Wraps
            </Link>
            <Link
              to="/services/color-change-wraps"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Color Change Wraps
            </Link>
            <Link
              to="/services/paint-protection-film"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Paint Protection Film
            </Link>
            <Link
              to="/services/ceramic-coatings"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Ceramic Coating
            </Link>
            <Link
              to="/services/vehicle-graphics"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Vehicle Graphics
            </Link>
            <Link
              to="/services/partial-wraps"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Partial Wraps
            </Link>
            <Link
              to="/services"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red font-medium"
              role="menuitem"
            >
              All Services
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
