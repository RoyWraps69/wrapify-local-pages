
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavbarLogo from './NavbarLogo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavButton from './MobileNavButton';
import ContactButton from './ContactButton';
import MobileNavigation from './MobileNavigation';

const NavbarContainer: React.FC = () => {
  console.log('NavbarContainer rendering');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  console.log('Current location:', location.pathname);

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

  // Force background to ensure visibility
  const headerStyle = {
    backgroundColor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    padding: '0.5rem 0',
    transition: 'all 0.3s ease-out'
  };

  return (
    <header 
      className="navbar-container"
      style={headerStyle}
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
