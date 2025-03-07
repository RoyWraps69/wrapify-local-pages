
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Printer } from 'lucide-react';
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
            <Link
              to="/print-ship"
              className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
            >
              <Printer className="mr-1" size={16} />
              Print & Ship
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
              <div className="px-3 py-2">
                <p className="font-medium text-wrap-grey mb-2">Services</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/services/vehicle-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Vehicle Wraps
                  </Link>
                  <Link to="/services/fleet-graphics" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Fleet Graphics
                  </Link>
                  <Link to="/services/commercial-fleet-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Commercial Fleet Wraps
                  </Link>
                  <Link to="/services" className="text-sm font-medium text-wrap-grey hover:text-wrap-red">
                    View All Services
                  </Link>
                </div>
              </div>
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
              <div className="px-3 py-2">
                <p className="font-medium text-wrap-grey mb-2">Locations</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/regions/illinois" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Illinois Region
                  </Link>
                  <Link to="/regions/michigan" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Michigan Region
                  </Link>
                  <Link to="/regions/indiana" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Indiana Region
                  </Link>
                  <Link to="/regions/wisconsin" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Wisconsin Region
                  </Link>
                </div>
              </div>
              <div className="px-3 py-2">
                <p className="font-medium text-wrap-grey mb-2">Resources</p>
                <div className="pl-4 flex flex-col space-y-2">
                  <Link to="/vinyl-wrap-care-guide" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Vinyl Wrap Care Guide
                  </Link>
                  <Link to="/about" className="text-sm text-wrap-grey hover:text-wrap-red">
                    About Us
                  </Link>
                  <Link to="/blog" className="text-sm text-wrap-grey hover:text-wrap-red">
                    Blog
                  </Link>
                </div>
              </div>
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
