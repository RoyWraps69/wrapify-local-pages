
import React, { useState, useEffect } from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string;
  longDescription: string;
  images?: string[];
}

// Fallback images if none are provided
const fallbackImages = [
  "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
  "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
  "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
];

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ 
  title, 
  description, 
  longDescription,
  images = fallbackImages
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      try {
        await Promise.all(
          images.map((src) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setImagesLoaded(true);
        console.log("All service images preloaded successfully");
      } catch (error) {
        console.error("Error preloading service images:", error);
        // Use fallback images if custom images fail
        if (images !== fallbackImages) {
          console.log("Using fallback images for service");
        }
      }
    };
    
    preloadImages();
    
    // Set up image rotation
    const rotationInterval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(rotationInterval);
  }, [images]);
  
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
          {imagesLoaded ? (
            <img 
              src={images[activeImageIndex]} 
              alt={`${title} example`} 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <div className="w-12 h-12 border-4 border-t-wrap-red border-gray-300 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
        
        {/* Thumbnail navigation */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex gap-2 justify-center">
            {images.map((image, index) => (
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
          {images.map((image, index) => (
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
