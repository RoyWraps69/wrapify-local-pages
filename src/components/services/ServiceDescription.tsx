
import React, { useState, useEffect } from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string;
  longDescription: string;
  images?: string[];
}

// More relevant service-related fallback images
const fallbackImages = [
  "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png", // Blue car wrap
  "/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png", // White Bentley wrap
  "/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png", // Silver Mercedes wrap
];

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ 
  title, 
  description, 
  longDescription,
  images = fallbackImages
}) => {
  // Don't render anything if we have the "Service Not Found" title
  if (title === 'Service Not Found') {
    return null;
  }
  
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Get appropriate images based on title if none provided
  const displayImages = images && images.length > 0 ? images : fallbackImages;
  
  // Log the images we're using
  console.log(`Using ${displayImages.length} images for ${title}:`, displayImages);
  
  // Set up image rotation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % displayImages.length);
    }, 4000);
    
    return () => clearInterval(rotationInterval);
  }, [displayImages]);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg">
        <h1 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
          {title}
        </h1>
        <p className="mb-6 text-wrap-grey text-lg">
          {description}
        </p>
      </div>
      
      {/* Featured image display */}
      <div className="my-8 bg-gray-100 rounded-lg overflow-hidden shadow-md">
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={displayImages[activeImageIndex]} 
            alt={`${title} example`} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        
        {/* Thumbnail navigation */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2 justify-center">
            {displayImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                  activeImageIndex === index ? 'border-wrap-red scale-105' : 'border-gray-200'
                }`}
              >
                <img 
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Service images gallery */}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {displayImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img 
                src={image} 
                alt={`${title} example ${index + 1}`} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="prose prose-lg">
        <p className="mb-6 text-wrap-grey text-lg">
          {longDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceDescription;
