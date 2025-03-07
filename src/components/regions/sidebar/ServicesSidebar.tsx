
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { ServiceInfo } from '@/data/serviceData';

interface ServicesSidebarProps {
  regionName: string;
  services?: ServiceInfo[];
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ 
  regionName,
  services = [],
}) => {
  const defaultServices = [
    { path: "/services/commercial-fleet-wraps", label: "Commercial Fleet Wraps" },
    { path: "/services/color-change-wraps", label: "Color Change Wraps" },
    { path: "/services/ceramic-coatings", label: "Ceramic Coatings" },
    { path: "/services/paint-protection-film", label: "Paint Protection Film" },
    { path: "/services/vehicle-graphics", label: "Custom Vehicle Graphics" },
  ];

  return (
    <div className="bg-wrap-blue p-6 rounded-lg shadow-sm text-white">
      <h3 className="text-xl font-serif font-semibold mb-4">
        Our Services in {regionName}
      </h3>
      <ul className="space-y-2">
        {services && services.length > 0 ? (
          services.map((service, index) => (
            <li key={index}>
              <Link 
                to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 hover:text-wrap-red transition-colors"
              >
                <ExternalLink size={16} />
                <span>{service.title}</span>
              </Link>
            </li>
          ))
        ) : (
          defaultServices.map((service, index) => (
            <li key={index}>
              <Link 
                to={service.path}
                className="flex items-center gap-2 hover:text-wrap-red transition-colors"
              >
                <ExternalLink size={16} />
                <span>{service.label}</span>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ServicesSidebar;
