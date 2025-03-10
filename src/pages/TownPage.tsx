
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTownData } from '@/utils/townFunctions';
import { normalizeSlug } from '@/utils/towns/slugUtils';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { createTownFAQs } from '@/components/town/data/TownFAQData';
import { toast } from 'sonner';
import TownPageLoading from '@/components/town/loading/TownPageLoading';
import TownPageError from '@/components/town/error/TownPageError';
import TownPageSEO from '@/components/town/seo/TownPageSEO';
import TownPageLayout from '@/components/town/layout/TownPageLayout';

const townBackgroundImages = [
  '/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png',  // MH Equipment
  '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',  // Shopping Truck
  '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png',  // Golden Tixx
  '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png'   // Green Lightning
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
  
  useEffect(() => {
    const img = new Image();
    img.src = townBackgroundImage;
    img.onload = () => console.log("Town background image loaded successfully:", townBackgroundImage);
    img.onerror = () => {
      console.error("Town background image failed to load, using fallback:", townBackgroundImage);
      const nextImageIndex = (townBackgroundImages.indexOf(townBackgroundImage) + 1) % townBackgroundImages.length;
      setTownBackgroundImage(townBackgroundImages[nextImageIndex]);
    };
  }, [townBackgroundImage]);
  
  useEffect(() => {
    if (!townSlug) {
      console.error("No townSlug provided");
      setError(true);
      setLoading(false);
      return;
    }
    
    try {
      const normalizedSlug = normalizeSlug(townSlug);
      
      const fetchedTownData = getTownData(normalizedSlug);
      console.log(`Attempting to find town with slug: "${normalizedSlug}"`);
      
      if (!fetchedTownData) {
        console.log(`Town not found for slug: ${normalizedSlug}, setting error state`);
        
        setError(true);
        setLoading(false);
        
        toast.error(`Town information for "${townSlug}" not found`, {
          description: "Please check our locations page for available towns.",
          duration: 5000,
        });
        
        return;
      }

      setTownData(fetchedTownData);
      
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
    return <TownPageLoading townSlug={townSlug} />;
  }
  
  if (error || !townData) {
    return <TownPageError townSlug={townSlug} />;
  }
  
  // Create FAQs for this town
  const locationFaqs = createTownFAQs({ townName: townData.name });

  return (
    <>
      <TownPageSEO 
        townData={townData} 
        townBackgroundImage={townBackgroundImage}
        locationFaqs={locationFaqs}
      />
      
      <TownPageLayout
        townData={townData}
        townBackgroundImage={townBackgroundImage}
        locationFaqs={locationFaqs}
      />
    </>
  );
};

export default TownPage;
