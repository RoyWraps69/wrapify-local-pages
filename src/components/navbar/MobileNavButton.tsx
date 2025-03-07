
import React from 'react';
import { Menu, X } from 'lucide-react';

interface MobileNavButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavButton: React.FC<MobileNavButtonProps> = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="lg:hidden text-wrap-blue focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

export default MobileNavButton;
