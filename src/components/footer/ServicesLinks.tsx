
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesLinks = () => {
  return (
    <div className="mb-8 md:mb-0">
      <h3 className="font-serif font-semibold text-lg text-white mb-4">Our Services</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/services/vehicle-wraps" className="text-white/80 hover:text-wrap-red transition-colors">
            Vehicle Wraps
          </Link>
        </li>
        <li>
          <Link to="/services/commercial-fleet-wraps" className="text-white/80 hover:text-wrap-red transition-colors">
            Commercial Fleet Wraps
          </Link>
        </li>
        <li>
          <Link to="/services/fleet-graphics" className="text-white/80 hover:text-wrap-red transition-colors">
            Fleet Graphics
          </Link>
        </li>
        <li>
          <Link to="/services/color-change-wraps" className="text-white/80 hover:text-wrap-red transition-colors">
            Color Change Wraps
          </Link>
        </li>
        <li>
          <Link to="/services/ceramic-coatings" className="text-white/80 hover:text-wrap-red transition-colors">
            Ceramic Coatings
          </Link>
        </li>
        <li>
          <Link to="/services/paint-protection-film" className="text-white/80 hover:text-wrap-red transition-colors">
            Paint Protection Film
          </Link>
        </li>
        <li>
          <Link to="/services/vehicle-graphics" className="text-white/80 hover:text-wrap-red transition-colors">
            Vehicle Graphics
          </Link>
        </li>
        <li>
          <Link to="/print-ship" className="text-white/80 hover:text-wrap-red transition-colors">
            Print & Ship Service
          </Link>
        </li>
      </ul>
      
      <h3 className="font-serif font-semibold text-lg text-white mt-6 mb-4">Regions Served</h3>
      <ul className="space-y-2">
        <li>
          <Link to="/regions/illinois" className="text-white/80 hover:text-wrap-red transition-colors">
            Illinois
          </Link>
        </li>
        <li>
          <Link to="/regions/michigan" className="text-white/80 hover:text-wrap-red transition-colors">
            Michigan
          </Link>
        </li>
        <li>
          <Link to="/regions/indiana" className="text-white/80 hover:text-wrap-red transition-colors">
            Indiana
          </Link>
        </li>
        <li>
          <Link to="/regions/wisconsin" className="text-white/80 hover:text-wrap-red transition-colors">
            Wisconsin
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesLinks;
