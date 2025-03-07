
import React from 'react';
import GalleryItem, { GalleryItem as GalleryItemType } from './GalleryItem';

interface GalleryGridProps {
  items: GalleryItemType[];
  townName: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items, townName }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <GalleryItem key={index} item={item} townName={townName} />
      ))}
    </div>
  );
};

export default GalleryGrid;
