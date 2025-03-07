
import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div>
      <h4 className="text-xl font-medium mb-6">Quick Links</h4>
      <ul className="space-y-3">
        <li>
          <Link to="/" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Our Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Project Gallery
          </Link>
        </li>
        <li>
          <Link to="/print-ship" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Print & Ship
          </Link>
        </li>
        <li>
          <Link to="/wrap-insurance" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Insurance
          </Link>
        </li>
        <li>
          <Link to="/resources/vinyl-wrap-care-guide" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Resources
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
