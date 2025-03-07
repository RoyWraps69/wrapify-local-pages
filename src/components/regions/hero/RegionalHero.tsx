
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

interface RegionalHeroProps {
  regionName: string;
  regionImage: string;
}

// Vehicle background images for carousel - matching the main hero images with numbered comments
const vehicleBackgrounds = [
  '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png', // #1 Blue Ford truck
  '/lovable-uploads/f8f4b8b6-d0df-43f3-9ce0-d9f83e7eddb0.png', // #2 Tesla Cybertruck green camo
  '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png', // #3 Tesla Cybertruck black
  '/lovable-uploads/6f06c0f2-2138-4d06-87b1-52a216974632.png', // #4 Blue Lexus sports car
  '/lovable-uploads/82b9909a-f0d1-4fd3-aa13-a2e8c40659af.png', // #5 Fighting Illini bus
  '/lovable-uploads/39af2f7f-a89b-42b4-833b-75a980a647ba.png', // #6 Red vintage car
  '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png', // #7 Bratcher fleet vans
  '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png', // #8 White Chevy truck
  '/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png', // #9 White BMW sedan
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // #10 Tesla Model 3
  '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png', // #11 Jeep Wrangler
  '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png', // #12 Ford Transit van
  '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png'  // #13 Corvette sports car
];

// Default fallback image if all else fails
const fallbackImage = '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png'; // Bratcher fleet vans

const RegionalHero: React.FC<RegionalHeroProps> = ({ regionName, regionImage }) => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  
  // Use the first image from our array if no specific region image is provided
  const heroImageUrl = regionImage && regionImage.startsWith('http') 
    ? vehicleBackgrounds[currentBgIndex] // If regionImage is an external URL, use our local images instead
    : (regionImage || vehicleBackgrounds[currentBgIndex] || fallbackImage);
  
  // Implement background carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % vehicleBackgrounds.length);
    }, 5000);
    
    // Log for debugging
    console.log("RegionalHero - All background images:", vehicleBackgrounds);
    console.log("RegionalHero - Current image:", heroImageUrl);
    console.log("RegionalHero - Current index:", currentBgIndex);
    
    return () => clearInterval(intervalId);
  }, [heroImageUrl, currentBgIndex]);
  
  return (
    <section className="text-white py-20 min-h-[90vh] flex items-center relative overflow-hidden bg-transparent">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in-out'
        }}
      />
      
      {/* Add dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-1"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-8">
          <div className="md:max-w-2xl backdrop-blur-sm bg-black/40 p-6 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
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
              <a href="tel:+13125971286" className="bg-white hover:bg-gray-100 text-wrap-blue px-6 py-3 rounded-md transition-colors flex items-center gap-2">
                <Phone size={18} />
                <span>312-597-1286</span>
              </a>
            </div>
          </div>
          <img 
            src="/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png" 
            alt="WRAPPING THE WORLD" 
            className="w-48 h-auto mt-6 md:mt-0 drop-shadow-lg object-contain"
          />
        </div>
      </div>
      
      {/* Background image indicators - repositioned higher */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2 z-10">
        {vehicleBackgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${index === currentBgIndex ? 'bg-wrap-red scale-110' : 'bg-white/70'}`}
            onClick={() => setCurrentBgIndex(index)}
            aria-label={`Switch to background ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RegionalHero;
