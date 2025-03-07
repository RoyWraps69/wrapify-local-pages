
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, ExternalLink, MapPin } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage?: string;
}

// Define a set of reliable background images focused on commercial/fleet vehicles
const heroBackgrounds = [
  '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png', // Van
  '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png', // Box Truck
  '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png', // MedX Waste Van
  '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png', // Cement Truck
];

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Use the provided regionImage or cycle through our reliable image set
  const bgImage = regionImage || heroBackgrounds[currentImageIndex];
  
  useEffect(() => {
    // Preload all background images
    Promise.all(
      heroBackgrounds.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    )
      .then(() => {
        console.log("All hero images preloaded successfully");
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading hero images:", error);
        setImageError(true);
      });
    
    // Set up image rotation
    const rotationInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 5000);
    
    return () => clearInterval(rotationInterval);
  }, []);
  
  return (
    <section 
      className="text-white py-20 min-h-[90vh] flex items-center relative overflow-hidden bg-wrap-blue"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <meta itemProp="name" content={`Vehicle Wrapping Services in ${regionName}`} />
      <meta itemProp="serviceType" content="Vehicle Wrapping" />
      <meta itemProp="areaServed" content={regionName} />
      
      {/* Background image with improved error handling */}
      {imagesLoaded ? (
        <div 
          className="absolute inset-0 z-0 w-full h-full bg-cover bg-center bg-gray-800 transition-opacity duration-1000"
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-wrap-blue to-black z-0">
          <div className="flex items-center justify-center h-full">
            <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
      
      {/* Darker overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-70 z-1" aria-hidden="true"></div>
      
      {/* Image navigation controls - smaller size */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {heroBackgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-8 h-8 rounded-md overflow-hidden border-2 transition-all ${
              currentImageIndex === index ? 'border-wrap-red scale-110' : 'border-white/30'
            }`}
            aria-label={`Select background image ${index + 1}`}
          >
            <img 
              src={heroBackgrounds[index]} 
              alt={`Background option ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="md:max-w-2xl backdrop-blur-sm bg-black/40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" itemProp="description">
              <span className="font-bold">WRAPPING THE WORLD</span>
              <br />
              in {regionName}
            </h1>
            <p className="text-xl max-w-2xl mb-8">
              Premium commercial fleet wraps, ceramic coatings, and paint protection services throughout {regionName}. Your local source for exceptional vehicle transformation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors">
                Request a Free Quote
              </Link>
              <a 
                href="tel:+13125971286" 
                className="bg-white hover:bg-gray-100 text-wrap-blue px-6 py-3 rounded-md transition-colors flex items-center gap-2"
                itemProp="telephone"
                content="+13125971286"
              >
                <Phone size={18} />
                <span>312-597-1286</span>
              </a>
            </div>
            
            <div className="mt-6 flex items-center gap-3">
              <Link to="/gallery" className="text-white hover:text-wrap-red transition-colors flex items-center">
                <Camera size={18} className="mr-1" />
                View Our Portfolio
              </Link>
              <span className="text-white/50">|</span>
              <Link to="/services" className="text-white hover:text-wrap-red transition-colors flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Our Services
              </Link>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center text-white/80">
                <MapPin size={18} className="mr-2 text-wrap-red" />
                <span itemProp="serviceArea">Serving all of {regionName} and surrounding areas</span>
              </div>
            </div>
          </div>
          <img 
            src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
            alt={`WRAPPING THE WORLD in ${regionName}`} 
            className="w-40 h-auto mt-6 md:mt-0 drop-shadow-lg object-contain"
            itemProp="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default RegionalHero;
