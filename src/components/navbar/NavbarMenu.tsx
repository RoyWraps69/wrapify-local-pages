
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavbarMenuProps {
  isRegionsOpen: boolean;
  setIsRegionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ 
  isRegionsOpen, 
  setIsRegionsOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) => {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Home
        </Link>
        <Link to="/services" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Services
        </Link>
        <div className="relative group">
          <button
            onClick={() => setIsRegionsOpen(!isRegionsOpen)}
            onMouseEnter={() => setIsRegionsOpen(true)}
            className="text-wrap-dark font-medium hover:text-wrap-red transition-colors flex items-center gap-1"
          >
            <MapPin size={16} />
            <span>Regions</span>
            <ChevronDown size={14} className={cn(
              "transition-transform",
              isRegionsOpen ? "rotate-180" : ""
            )} />
          </button>
          
          {/* Dropdown for regions */}
          <div 
            className={cn(
              "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50",
              isRegionsOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
            onMouseLeave={() => setIsRegionsOpen(false)}
          >
            <div className="py-1">
              <Link 
                to="/regions/illinois" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsRegionsOpen(false)}
              >
                Illinois
              </Link>
              <Link 
                to="/regions/michigan" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsRegionsOpen(false)}
              >
                Michigan
              </Link>
              <Link 
                to="/regions/indiana" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsRegionsOpen(false)}
              >
                Indiana
              </Link>
              <Link 
                to="/regions/wisconsin" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsRegionsOpen(false)}
              >
                Wisconsin
              </Link>
            </div>
          </div>
        </div>
        <Link to="/gallery" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Gallery
        </Link>
        <Link to="/print-ship" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Print & Ship
        </Link>
        <Link to="/wrap-insurance" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Insurance
        </Link>
        <Link to="/shopping" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Shopping
        </Link>
        <Link to="/contact" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavbarMenu;
