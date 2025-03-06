
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface NearbyRegionsSidebarProps {
  adjacentRegions: {name: string, slug: string}[];
}

const NearbyRegionsSidebar: React.FC<NearbyRegionsSidebarProps> = ({ adjacentRegions }) => {
  return (
    <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
        Nearby Regions
      </h3>
      <ul className="space-y-2">
        {adjacentRegions.map((region) => (
          <li key={region.slug}>
            <Link 
              to={`/regions/${region.slug}`}
              className="flex items-center gap-2 text-wrap-blue hover:text-wrap-red transition-colors"
            >
              <MapPin size={16} />
              <span>{region.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyRegionsSidebar;
