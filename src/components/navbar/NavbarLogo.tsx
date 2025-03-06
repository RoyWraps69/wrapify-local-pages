
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavbarLogoProps {
  isScrolled: boolean;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ isScrolled }) => {
  return (
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
  );
};

export default NavbarLogo;
