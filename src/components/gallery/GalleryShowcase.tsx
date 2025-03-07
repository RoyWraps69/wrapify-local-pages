
import React, { useState } from 'react';
import GalleryHeader from './GalleryHeader';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';
import PhotoSubmissionCTA from './PhotoSubmissionCTA';
import GalleryCTA from './GalleryCTA';
import QuoteCTA from './QuoteCTA';
import { galleryItems } from './galleryData';

interface GalleryShowcaseProps {
  townName?: string;
  itemLimit?: number;
}

const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ 
  townName = 'Chicago',
  itemLimit
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const categories = [...new Set(galleryItems.map(item => item.category))];
  
  const filters = [
    { id: null, name: 'All Projects' },
    ...categories.map(category => ({ id: category, name: category })),
    { id: 'customer', name: 'Customer Submissions' }
  ];
  
  const filteredItems = activeFilter === 'customer'
    ? galleryItems.filter(item => item.isCustomerSubmission)
    : activeFilter 
      ? galleryItems.filter(item => item.category === activeFilter) 
      : galleryItems;
    
  const displayItems = itemLimit ? filteredItems.slice(0, itemLimit) : filteredItems;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <GalleryHeader townName={townName} />
        
        <GalleryFilters 
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        <div className="mt-8">
          <GalleryGrid items={displayItems} townName={townName} />
        </div>

        <PhotoSubmissionCTA townName={townName} />
        
        <GalleryCTA itemLimit={itemLimit} totalItems={galleryItems.length} />
        
        <QuoteCTA />
      </div>
    </section>
  );
};

export default GalleryShowcase;
