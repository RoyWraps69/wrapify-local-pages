
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
          <Link to="/case-studies" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Case Studies
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/blog" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
