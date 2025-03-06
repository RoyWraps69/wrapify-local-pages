
import React from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarLogo from './navbar/NavbarLogo';
import NavbarMenu from './navbar/NavbarMenu';
import NavbarActions from './navbar/NavbarActions';
import MobileMenu from './navbar/MobileMenu';
import { useNavbarState } from './navbar/hooks/useNavbarState';

const Navbar = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isLoggedIn,
    isRegionsOpen,
    setIsRegionsOpen
  } = useNavbarState();

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
        <NavbarLogo isScrolled={isScrolled} />

        <NavbarMenu 
          isRegionsOpen={isRegionsOpen}
          setIsRegionsOpen={setIsRegionsOpen}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <NavbarActions isLoggedIn={isLoggedIn} />

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wrap-blue" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        isLoggedIn={isLoggedIn}
        isRegionsOpen={isRegionsOpen}
        setIsRegionsOpen={setIsRegionsOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </header>
  );
};

export default Navbar;
