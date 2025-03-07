
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalPageContent from '@/components/regions/RegionalPageContent';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';

interface RegionalLocation {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface RegionalPageTemplateProps {
  regionName: string;
  regionDescription: string;
  regionFocus: string;
  regionImage: string;
  citiesServed: RegionalLocation[];
  adjacentRegions: {name: string, slug: string}[];
  metaDescription: string;
  geoRegion: string;
  geoPosition: string;
  geoPlacename: string;
  canonicalUrl: string;
}

const RegionalPageTemplate: React.FC<RegionalPageTemplateProps> = ({
  regionName,
  regionDescription,
  regionFocus,
  regionImage,
  citiesServed,
  adjacentRegions,
  metaDescription,
  geoRegion,
  geoPosition,
  geoPlacename,
  canonicalUrl
}) => {
  const pageTitle = `${regionName} Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings`;
  const [latitude, longitude] = geoPosition.split(';');
  
  // Validate region image on component mount
  useEffect(() => {
    console.log(`RegionalPageTemplate - Loading for ${regionName}`);
    
    // Validate region image
    if (regionImage) {
      const img = new Image();
      img.src = regionImage;
      img.onload = () => console.log(`Region image for ${regionName} loaded successfully:`, regionImage);
      img.onerror = () => console.error(`ERROR: Region image for ${regionName} failed to load:`, regionImage);
    }
    
    // Log cities served for debugging
    console.log(`${regionName} - Cities served:`, citiesServed);
    
    // Scroll to top on region page load
    window.scrollTo(0, 0);
  }, [regionName, regionImage, citiesServed]);
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="geo.region" content={geoRegion} />
        <meta name="geo.placename" content={geoPlacename} />
        <meta name="geo.position" content={geoPosition} />
        <meta name="ICBM" content={`${latitude}, ${longitude}`} />
      </Helmet>

      <SEOSchema 
        townName={regionName}
        pageTitle={pageTitle}
        pageDescription={metaDescription}
        pageUrl={canonicalUrl}
      />

      <Navbar />
      <RegionalPageContent
        regionName={regionName}
        regionDescription={regionDescription}
        regionFocus={regionFocus}
        regionImage={regionImage}
        citiesServed={citiesServed}
        adjacentRegions={adjacentRegions}
      />
      <Footer />
    </>
  );
};

export default RegionalPageTemplate;
