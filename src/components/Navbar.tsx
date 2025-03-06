
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShoppingBag, User, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check if user is logged in
    const checkAuth = () => {
      const isAuthenticated = localStorage.getItem('isAuthenticated');
      setIsLoggedIn(!!isAuthenticated);
    };

    window.addEventListener('scroll', handleScroll);
    checkAuth();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check login status when location changes
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(!!isAuthenticated);
  }, [location]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
            alt="Wrapping The World Logo" 
            className={cn(
              "transition-all duration-300",
              isScrolled ? "h-10" : "h-12"
            )}
          />
        </Link>

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

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+13125971286" 
            className="flex items-center space-x-2 text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">312-597-1286</span>
          </a>
          <Link 
            to="/shopping" 
            className="flex items-center space-x-1 text-wrap-blue hover:text-wrap-red mr-2 transition-colors"
          >
            <ShoppingBag size={18} />
          </Link>
          
          {isLoggedIn ? (
            <Link 
              to="/member-dashboard" 
              className="flex items-center space-x-1 text-wrap-blue hover:text-wrap-red mr-2 transition-colors"
            >
              <User size={18} />
              <span className="font-medium">My Account</span>
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="flex items-center space-x-1 text-wrap-blue hover:text-wrap-red mr-2 transition-colors"
            >
              <User size={18} />
              <span className="font-medium">Login</span>
            </Link>
          )}
          
          <Link 
            to="/contact" 
            className="btn-primary whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wrap-blue" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "mobile-menu fixed top-[60px] left-0 w-full h-screen bg-white z-40 md:hidden p-6",
          isMobileMenuOpen ? "open" : "closed"
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
          <Link 
            to="/services" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          
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
            to="/print-ship" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Print & Ship
          </Link>
          <Link 
            to="/wrap-insurance" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Insurance
          </Link>
          <Link 
            to="/shopping" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shopping
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
    </header>
  );
};

export default Navbar;
