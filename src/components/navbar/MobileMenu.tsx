
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronDown, Phone, ShoppingBag, Shield, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  isLoggedIn: boolean;
  isRegionsOpen: boolean;
  setIsRegionsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  isLoggedIn,
  isRegionsOpen,
  setIsRegionsOpen,
  setIsMobileMenuOpen
}) => {
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  return (
    <div 
      className={cn(
        "mobile-menu fixed top-[60px] left-0 w-full h-screen bg-white z-40 md:hidden p-6",
        isOpen ? "open" : "closed"
      )}
    >
      <div className="flex flex-col space-y-6">
        <Link 
          to="/" 
          className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Home
        </Link>
        
        {/* Mobile Services Dropdown */}
        <div className="py-2 border-b border-gray-100">
          <div 
            className="flex items-center justify-between text-wrap-blue font-medium text-xl"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <span>Services</span>
            <ChevronDown 
              size={18} 
              className={cn(
                "transition-transform",
                isServicesOpen ? "rotate-180" : ""
              )} 
            />
          </div>
          
          {isServicesOpen && (
            <div className="mt-2 ml-8 flex flex-col space-y-3">
              <Link 
                to="/services" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Services
              </Link>
              <Link 
                to="/print-ship" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Print & Ship
              </Link>
              <Link 
                to="/print-ship/#installer-network" 
                className="text-wrap-blue flex items-center gap-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users size={14} />
                <span>Installer Network</span>
              </Link>
              <Link 
                to="/wrap-insurance" 
                className="text-wrap-blue flex items-center gap-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield size={14} />
                <span>Insurance</span>
              </Link>
              <Link 
                to="/shopping" 
                className="text-wrap-blue flex items-center gap-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag size={14} />
                <span>Shopping</span>
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Regions Dropdown */}
        <div className="py-2 border-b border-gray-100">
          <div 
            className="flex items-center justify-between text-wrap-blue font-medium text-xl"
            onClick={() => setIsRegionsOpen(!isRegionsOpen)}
          >
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Regions
            </span>
            <ChevronDown 
              size={18} 
              className={cn(
                "transition-transform",
                isRegionsOpen ? "rotate-180" : ""
              )} 
            />
          </div>
          
          {isRegionsOpen && (
            <div className="mt-2 ml-8 flex flex-col space-y-3">
              <Link 
                to="/regions/illinois" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Illinois
              </Link>
              <Link 
                to="/regions/michigan" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Michigan
              </Link>
              <Link 
                to="/regions/indiana" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Indiana
              </Link>
              <Link 
                to="/regions/wisconsin" 
                className="text-wrap-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Wisconsin
              </Link>
            </div>
          )}
        </div>
        
        <Link 
          to="/gallery" 
          className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Gallery
        </Link>
        <Link 
          to="/contact" 
          className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
        
        {isLoggedIn ? (
          <Link 
            to="/member-dashboard" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            My Account
          </Link>
        ) : (
          <>
            <Link 
              to="/login" 
              className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
          </>
        )}
        
        <div className="pt-4 flex flex-col space-y-4">
          <a 
            href="tel:+13125971286" 
            className="flex items-center space-x-2 text-wrap-blue"
          >
            <Phone size={18} />
            <span className="font-medium">312-597-1286</span>
          </a>
          <Link 
            to="/shopping"
            className="flex items-center space-x-2 text-wrap-blue mb-2"
          >
            <ShoppingBag size={18} />
            <span className="font-medium">View Cart</span>
          </Link>
          <Link 
            to="/contact" 
            className="btn-primary text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
