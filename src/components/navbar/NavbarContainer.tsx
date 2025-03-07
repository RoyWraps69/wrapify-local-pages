
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavButton from './MobileNavButton';
import ContactButton from './ContactButton';
import MobileNavigation from './MobileNavigation';

const NavbarContainer: React.FC = () => {
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
          <NavbarLogo />
          <DesktopNavigation />
          <ContactButton />
          <MobileNavButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>

        {isOpen && <MobileNavigation />}
      </div>
    </header>
  );
};

export default NavbarContainer;
