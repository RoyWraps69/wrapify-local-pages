
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ResourcesDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors focus:outline-none"
      >
        <span>Resources</span>
        {isOpen ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <Link
              to="/resources/vinyl-wrap-care-guide"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Vinyl Wrap Care Guide
            </Link>
            <Link
              to="/resources/ceramic-coating-faq"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Ceramic Coating FAQ
            </Link>
            <Link
              to="/resources/design-template-library"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Design Templates
            </Link>
            <Link
              to="/blog"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Blog
            </Link>
            <Link
              to="/case-studies"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-wrap-red"
              role="menuitem"
            >
              Case Studies
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesDropdown;
