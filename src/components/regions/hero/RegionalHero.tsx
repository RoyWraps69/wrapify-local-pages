
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Camera, ExternalLink, MapPin, Mail, MessageSquare } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage?: string;
}

// Define a set of reliable background images focused on commercial/fleet vehicles
const heroBackgrounds = [
  '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png', // MedX Waste Van
  '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png', // MH Equipment Service Van
  '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png', // Frontier Vans
  '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png', // Cement Truck
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // Pink Dodge
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // Silver Mercedes
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // Blue Camaro 
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png', // White Bentley
  '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png', // Golden Tixx SUV
  '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // Green car
];

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  // Get a random index for initial image selection
  const getRandomImageIndex = () => Math.floor(Math.random() * heroBackgrounds.length);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(getRandomImageIndex());
  
  // Use a valid background image for sure
  const bgImage = regionImage && regionImage.includes('/lovable-uploads/') 
    ? regionImage 
    : heroBackgrounds[currentImageIndex];
  
  // Log the image being used to troubleshoot
  console.log('Hero background image URL:', bgImage);
  
  // The location text for the map pin should always be Chicago for service pages
  const locationText = "Chicago";
  
  useEffect(() => {
    // Set up image rotation for random images
    const rotationInterval = setInterval(() => {
      if (!regionImage || !regionImage.includes('/lovable-uploads/')) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
      }
    }, 5000);
    
    return () => clearInterval(rotationInterval);
  }, [regionImage]);
  
  return (
    <section 
      className="text-white py-20 min-h-[90vh] flex items-center relative overflow-hidden"
      itemScope 
      itemType="https://schema.org/Service"
    >
      <meta itemProp="name" content={`Vehicle Wrapping Services in ${regionName}`} />
      <meta itemProp="serviceType" content="Vehicle Wrapping" />
      <meta itemProp="areaServed" content={locationText} />
      
      {/* Background image with direct inline styling */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      
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
              Premium commercial fleet wraps, ceramic coatings, and paint protection services throughout {locationText}. Your local source for exceptional vehicle transformation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                <Mail size={18} />
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
              <Link 
                to="/contact?subject=Quick%20Message" 
                className="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                <MessageSquare size={18} />
                Quick Message
              </Link>
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
                <span itemProp="serviceArea">Serving all of {locationText} and surrounding areas</span>
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
