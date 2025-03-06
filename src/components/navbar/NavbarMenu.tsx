
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, ShoppingBag, Shield } from 'lucide-react';
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
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Home
        </Link>
        
        {/* Services Dropdown */}
        <div className="relative group">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            onMouseEnter={() => setIsServicesOpen(true)}
            className="text-wrap-dark font-medium hover:text-wrap-red transition-colors flex items-center gap-1"
          >
            <span>Services</span>
            <ChevronDown size={14} className={cn(
              "transition-transform",
              isServicesOpen ? "rotate-180" : ""
            )} />
          </button>
          
          {/* Dropdown for services */}
          <div 
            className={cn(
              "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50",
              isServicesOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="py-1">
              <Link 
                to="/services" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                All Services
              </Link>
              <Link 
                to="/print-ship" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100"
                onClick={() => setIsServicesOpen(false)}
              >
                Print & Ship
              </Link>
              <Link 
                to="/wrap-insurance" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100 flex items-center gap-1"
                onClick={() => setIsServicesOpen(false)}
              >
                <Shield size={14} />
                <span>Insurance</span>
              </Link>
              <Link 
                to="/shopping" 
                className="block px-4 py-2 text-sm text-wrap-blue hover:bg-gray-100 flex items-center gap-1"
                onClick={() => setIsServicesOpen(false)}
              >
                <ShoppingBag size={14} />
                <span>Shopping</span>
              </Link>
            </div>
          </div>
        </div>
        
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
        <Link to="/contact" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default NavbarMenu;
