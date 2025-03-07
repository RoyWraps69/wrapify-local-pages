
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import RegionalPageContent from '@/components/regions/RegionalPageContent';

const RegionPage: React.FC = () => {
  const { regionName } = useParams<{ regionName: string }>();
  
  // Format region name for display (convert "illinois" to "Illinois")
  const formattedRegionName = regionName 
    ? regionName.charAt(0).toUpperCase() + regionName.slice(1) 
    : '';
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Background image for the region - ensure we always have an image
  const regionBackgroundImage = '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png';
  
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
        regionImage={regionBackgroundImage} 
      />
      
      <RegionalPageContent regionName={formattedRegionName} />
      
      <Footer />
    </>
  );
};

export default RegionPage;
