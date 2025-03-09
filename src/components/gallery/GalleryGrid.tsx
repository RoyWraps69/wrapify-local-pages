
import React from 'react';
import GalleryItemCard from './GalleryItemCard';
import { GalleryGridProps } from './types';

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <GalleryItemCard key={index} item={item} />
      ))}
    </div>
  );
};

export default GalleryGrid;
