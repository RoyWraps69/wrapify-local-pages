
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import ServicesDropdown from '../components/navbar/ServicesDropdown';
import ResourcesDropdown from '../components/navbar/ResourcesDropdown';
import LocationsDropdown from '../components/navbar/LocationsDropdown';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png"
              alt="WRAPPING THE WORLD"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
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
            <LocationsDropdown />
            <ResourcesDropdown />
            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+13125971286"
              className="flex items-center gap-2 bg-wrap-red text-white px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors"
            >
              <Phone size={18} />
              <span>312-597-1286</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-wrap-blue focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                Services
              </Link>
              <Link
                to="/gallery"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/locations"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                Locations
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
              >
                Contact
              </Link>
              <a
                href="tel:+13125971286"
                className="flex items-center gap-2 bg-wrap-red text-white px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors"
              >
                <Phone size={18} />
                <span>312-597-1286</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
