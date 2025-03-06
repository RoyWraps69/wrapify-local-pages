
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesLinks = () => {
  return (
    <div>
      <h4 className="text-xl font-medium mb-6">Our Services</h4>
      <ul className="space-y-3">
        <li>
          <Link to="/services/commercial-fleet-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Commercial Fleet Wraps
          </Link>
        </li>
        <li>
          <Link to="/services/color-change-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Color Change Wraps
          </Link>
        </li>
        <li>
          <Link to="/services/custom-vehicle-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Custom Vehicle Designs
          </Link>
        </li>
        <li>
          <Link to="/services/vehicle-graphics" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Vehicle Graphics
          </Link>
        </li>
        <li>
          <Link to="/services/paint-protection-film" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Paint Protection Films
          </Link>
        </li>
        <li>
          <Link to="/services/ceramic-coatings" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            Ceramic Coatings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesLinks;
