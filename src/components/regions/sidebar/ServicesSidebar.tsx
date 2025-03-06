
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface ServicesSidebarProps {
  regionName: string;
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ regionName }) => {
  return (
    <div className="bg-wrap-blue p-6 rounded-lg shadow-sm text-white">
      <h3 className="text-xl font-serif font-semibold mb-4">
        Our Services in {regionName}
      </h3>
      <ul className="space-y-2">
        <li>
          <Link to="/services/commercial-fleet-wraps" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
            <ExternalLink size={16} />
            <span>Commercial Fleet Wraps</span>
          </Link>
        </li>
        <li>
          <Link to="/services/color-change-wraps" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
            <ExternalLink size={16} />
            <span>Color Change Wraps</span>
          </Link>
        </li>
        <li>
          <Link to="/services/ceramic-coatings" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
            <ExternalLink size={16} />
            <span>Ceramic Coatings</span>
          </Link>
        </li>
        <li>
          <Link to="/services/paint-protection" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
            <ExternalLink size={16} />
            <span>Paint Protection Film</span>
          </Link>
        </li>
        <li>
          <Link to="/services/vehicle-graphics" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
            <ExternalLink size={16} />
            <span>Custom Vehicle Graphics</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServicesSidebar;
