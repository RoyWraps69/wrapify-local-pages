
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import RegionalPageContent from '@/components/regions/RegionalPageContent';
import { toast } from 'sonner';

// Define reliable region background images
const regionBackgroundImages = [
  '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // Green car
  '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png', // Vans
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'  // White car
];

const RegionPage: React.FC = () => {
  const { regionName } = useParams<{ regionName: string }>();
  const navigate = useNavigate();
  const [regionImage, setRegionImage] = useState<string>(
    regionBackgroundImages[Math.floor(Math.random() * regionBackgroundImages.length)]
  );
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Format region name for display (convert "illinois" to "Illinois")
  const formattedRegionName = regionName 
    ? regionName.charAt(0).toUpperCase() + regionName.slice(1) 
    : '';
  
  // Preload the background image and fallback if needed
  useEffect(() => {
    const img = new Image();
    img.src = regionImage;
    img.onload = () => {
      console.log("Region background image loaded successfully:", regionImage);
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Region background image failed to load, using fallback");
      // If the image fails to load, try another one
      const nextImageIndex = (regionBackgroundImages.indexOf(regionImage) + 1) % regionBackgroundImages.length;
      setRegionImage(regionBackgroundImages[nextImageIndex]);
    };
  }, [regionImage]);
  
  // Validate region name
  useEffect(() => {
    const validRegions = ['illinois', 'indiana', 'michigan', 'wisconsin'];
    
    if (regionName && !validRegions.includes(regionName.toLowerCase())) {
      toast.error(`Region "${regionName}" not found`, {
        description: "Please check our locations page for available regions.",
      });
      navigate('/locations');
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [regionName, navigate]);
  
  if (!formattedRegionName) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <h1 className="text-3xl font-bold text-wrap-blue mb-4">Region Not Found</h1>
            <p className="text-wrap-grey mb-6">
              We couldn&apos;t find information for this region. Please select from our available service areas.
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/locations')} 
                className="bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
              >
                See All Locations
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrapping Services in {formattedRegionName} | Wrapping The World</title>
        <meta 
          name="description" 
          content={`Professional vehicle wrapping, ceramic coatings, and paint protection services throughout ${formattedRegionName}. Transform your business vehicles with custom wraps from Wrapping The World.`} 
        />
        <link rel="canonical" href={`https://wrappingtheworld.com/regions/${regionName}`} />
      </Helmet>
      
      <Navbar />
      
      <RegionalHero 
        regionName={formattedRegionName} 
        regionImage={regionImage} 
      />
      
      <RegionalPageContent regionName={formattedRegionName} />
      
      <Footer />
    </>
  );
};

export default RegionPage;
