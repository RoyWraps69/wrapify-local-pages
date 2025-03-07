
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <img
        src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png"
        alt="WRAPPING THE WORLD"
        className="h-12 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;
