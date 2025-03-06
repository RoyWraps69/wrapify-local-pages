
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavbarState = () => {
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

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isLoggedIn,
    isRegionsOpen,
    setIsRegionsOpen,
    location
  };
};
