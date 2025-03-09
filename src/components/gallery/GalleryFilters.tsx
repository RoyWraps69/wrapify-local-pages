
import React from 'react';
import { cn } from '@/lib/utils';
import { GalleryFilterProps } from './types';

const GalleryFilters: React.FC<GalleryFilterProps> = ({ 
  activeFilter, 
  setActiveFilter, 
  filters 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      {filters.map((filter) => (
        <button 
          key={filter.id || 'all'}
          onClick={() => setActiveFilter(filter.id)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeFilter === filter.id 
              ? "bg-wrap-blue text-white" 
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          )}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilters;
