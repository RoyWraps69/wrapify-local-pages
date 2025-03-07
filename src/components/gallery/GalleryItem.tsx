
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ThumbsUp } from 'lucide-react';

export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  serviceLink?: string;
  isCustomerSubmission?: boolean;
  customerName?: string;
  location?: string;
}

interface GalleryItemProps {
  item: GalleryItem;
  townName: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, townName }) => {
  return (
    <div className="group overflow-hidden rounded-xl relative h-64 md:h-72 shadow-soft transition-all duration-300 hover:shadow-lg">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          console.log(`Failed to load image: ${target.src}`);
          target.src = "/placeholder.svg"; // Fallback image if original fails to load
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <div className="flex items-center justify-between w-full">
          <span className="inline-block px-3 py-1 bg-wrap-red text-white rounded-full text-xs font-medium mb-2">
            {item.category}
          </span>
          
          {item.isCustomerSubmission && (
            <span className="inline-flex items-center px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium mb-2">
              <ThumbsUp className="mr-1 h-3 w-3" /> Customer Photo
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
        
        {item.isCustomerSubmission && item.customerName && (
          <p className="text-white/90 text-sm mb-1">
            Submitted by: {item.customerName}
          </p>
        )}
        
        <p className="text-white/80 text-sm mb-3">
          {item.location || `Project completed in ${townName} area`}
        </p>
        
        {item.serviceLink && (
          <Link to={item.serviceLink} className="inline-flex items-center text-white hover:text-wrap-red transition-colors text-sm">
            <span>Learn more about this service</span>
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default GalleryItem;
