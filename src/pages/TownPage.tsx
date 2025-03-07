
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { getTownData, getNearbyTowns } from '@/utils/townFunctions';
import { normalizeSlug } from '@/utils/towns/slugUtils';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import TownStructuredData from '@/components/town/seo/TownStructuredData';
import TownPageContent from '@/components/town/layout/TownPageContent';
import { createTownFAQs } from '@/components/town/data/TownFAQData';
import { Helmet } from 'react-helmet-async';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import { toast } from 'sonner';

// Define reliable town background images
const townBackgroundImages = [
  '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
  '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png', // Blue car
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png', // Green car
  '/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png', // Vans
  '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png'  // White car
];

const TownPage: React.FC = () => {
  const { townSlug } = useParams<{ townSlug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [townData, setTownData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);
  const [townBackgroundImage, setTownBackgroundImage] = useState<string>(
    townBackgroundImages[Math.floor(Math.random() * townBackgroundImages.length)]
  );
  
  useScrollAnimation();
  
  console.log("TownPage rendering with townSlug:", townSlug);
  
  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = townBackgroundImage;
    img.onload = () => console.log("Town background image loaded successfully:", townBackgroundImage);
    img.onerror = () => {
      console.error("Town background image failed to load, using fallback:", townBackgroundImage);
      // If the image fails to load, try another one
      const nextImageIndex = (townBackgroundImages.indexOf(townBackgroundImage) + 1) % townBackgroundImages.length;
      setTownBackgroundImage(townBackgroundImages[nextImageIndex]);
    };
  }, [townBackgroundImage]);
  
  // Get town data and handle loading state
  useEffect(() => {
    if (!townSlug) {
      console.error("No townSlug provided");
      setError(true);
      setLoading(false);
      return;
    }
    
    try {
      // Normalize the slug for better matching
      const normalizedSlug = normalizeSlug(townSlug);
      
      const fetchedTownData = getTownData(normalizedSlug);
      console.log(`Attempting to find town with slug: "${normalizedSlug}"`);
      
      if (!fetchedTownData) {
        console.log(`Town not found for slug: ${normalizedSlug}, setting error state`);
        
        setError(true);
        setLoading(false);
        
        // Show a toast notification to inform the user
        toast.error(`Town information for "${townSlug}" not found`, {
          description: "Please check our locations page for available towns.",
          duration: 5000,
        });
        
        return;
      }

      setTownData(fetchedTownData);
      
      // Assign a consistent background image based on the town's ID
      const imageIndex = fetchedTownData.id.charCodeAt(0) % townBackgroundImages.length;
      setTownBackgroundImage(townBackgroundImages[imageIndex]);
      
      setLoading(false);
      window.scrollTo(0, 0);
      
      console.log(`Town page loaded successfully for: ${fetchedTownData?.name} with id: ${fetchedTownData?.id}`);
    } catch (err) {
      console.error("Error loading town data:", err);
      setError(true);
      setLoading(false);
      
      toast.error("Error loading town information", {
        description: "Please try again later or contact support if the problem persists.",
      });
    }
  }, [townSlug, navigate]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-wrap-grey">Loading information for {townSlug}...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !townData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <h1 className="text-3xl font-bold text-wrap-blue mb-4">Town Not Found</h1>
            <p className="text-wrap-grey mb-6">
              We couldn&apos;t find information for &quot;{townSlug}&quot;. This location may not be in our service area yet.
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
  
  const { name, state } = townData;
  
  // Format state name fully
  const stateFullName = 
    state === 'IL' ? 'Illinois' : 
    state === 'MI' ? 'Michigan' : 
    state === 'IN' ? 'Indiana' : 
    state === 'WI' ? 'Wisconsin' : state;
  
  const pageTitle = `Professional Vehicle Wraps & Ceramic Coatings in ${name}, ${stateFullName} | Wrapping The World`;
  const pageDescription = `Premium quality vehicle wraps, ceramic coatings, and paint protection film in ${name}, ${stateFullName}. Transform your business vehicles with custom wraps from the Midwest's top-rated vehicle enhancement company.`;
  const pageUrl = `https://wrappingtheworld.com/locations/${townSlug}`;
  const canonicalUrl = `https://wrappingtheworld.com/locations/${townSlug}`;

  // Generate location-specific FAQs
  const locationFaqs = createTownFAQs({ townName: name });

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <TownStructuredData 
        townData={townData}
        townSlug={townSlug || ''}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
        canonicalUrl={canonicalUrl}
      />
      
      <SEOSchema 
        townName={name}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageUrl={pageUrl}
      />
      
      <Navbar />
      
      {/* Hero Section with town name and guaranteed image */}
      <RegionalHero regionName={name} regionImage={townBackgroundImage} />
      
      <TownPageContent 
        townData={townData}
        locationFaqs={locationFaqs}
      />
      
      <Footer />
    </>
  );
};

export default TownPage;
