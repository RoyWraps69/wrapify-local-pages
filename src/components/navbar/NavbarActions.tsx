
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShoppingBag, User } from 'lucide-react';

interface NavbarActionsProps {
  isLoggedIn: boolean;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ isLoggedIn }) => {
  return (
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
  );
};

export default NavbarActions;
