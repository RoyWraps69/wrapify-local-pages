
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import ServicesBreadcrumb from '@/components/ServicesBreadcrumb';
import { ServiceInfo } from '@/data/serviceData';

// Import from the correct paths with content/ prefix
import RegionalMainContent from '@/components/regions/content/RegionalMainContent';
import CitiesServedGrid from '@/components/regions/cities/CitiesServedGrid';
import ContactSidebar from '@/components/regions/sidebar/ContactSidebar';
import ServicesSidebar from '@/components/regions/sidebar/ServicesSidebar';
import NearbyRegionsSidebar from '@/components/regions/sidebar/NearbyRegionsSidebar';
import RegionalCTA from '@/components/regions/cta/RegionalCTA';

// Define city and region interfaces
interface City {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface AdjacentRegion {
  name: string;
  slug: string;
}

interface RegionalPageTemplateProps {
  // Update props to match what's used in the region components
  regionName: string;
  regionDescription: string;
  regionFocus: string;
  regionImage: string;
  citiesServed: City[];
  adjacentRegions: AdjacentRegion[];
  metaDescription: string;
  geoRegion: string;
  geoPlacename: string;
  geoPosition: string;
  canonicalUrl: string;
  
  // Optional props from the original interface
  title?: string;
  description?: string;
  content?: string;
  regionalCity?: string;
  nearbyRegions?: string[];
  services?: ServiceInfo[];
  breadcrumbParent?: {
    name: string;
    path: string;
  };
  regionalLocation?: string;
  nearbyCity?: string[];
}

const RegionalPageTemplate: React.FC<RegionalPageTemplateProps> = ({
  // Add the new props first
  regionName,
  regionDescription,
  regionFocus,
  regionImage,
  citiesServed,
  adjacentRegions,
  metaDescription,
  geoRegion,
  geoPlacename,
  geoPosition,
  canonicalUrl,
  
  // Original props
  title,
  description,
  content,
  regionalCity,
  nearbyRegions,
  services,
  breadcrumbParent,
  regionalLocation,
  nearbyCity,
}) => {
  // Use regionName as title if title is not provided
  const pageTitle = title || `${regionName} | Wrapping The World`;
  const pageDescription = description || metaDescription;
  const heroImage = regionImage || `/img/regions/${regionName.toLowerCase().replace(/\s+/g, '-')}-hero.jpg`;
  
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl || `https://wrappingtheworld.com/locations/${regionName.toLowerCase().replace(/\s+/g, '-')}`} />
        {/* Add geo meta tags */}
        {geoRegion && <meta name="geo.region" content={geoRegion} />}
        {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}
        {geoPosition && <meta name="geo.position" content={geoPosition} />}
      </Helmet>
      <Navbar />
      <main>
        <RegionalHero 
          regionName={regionName} 
          regionImage={heroImage}
        />
        
        <ServicesBreadcrumb 
          currentPage={regionName}
          parentPage={breadcrumbParent || {
            name: "Locations",
            path: "/locations"
          }}
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <RegionalMainContent
                regionName={regionName}
                regionDescription={regionDescription}
                regionFocus={regionFocus || content || ""}
                citiesServed={citiesServed}
                title={title}
                description={description}
                content={content}
              />
              
              {/* Display cities served section */}
              {citiesServed && citiesServed.length > 0 && (
                <CitiesServedGrid 
                  regionName={regionName}
                  citiesServed={citiesServed}
                  mainCity={regionalCity}
                  cities={citiesServed.map(city => city.name)}
                />
              )}
            </div>
            
            <div className="w-full lg:w-1/3 space-y-8">
              <ContactSidebar 
                regionName={regionName}
                location={regionalLocation || regionName}
              />
              
              <ServicesSidebar 
                regionName={regionName}
                services={services}
              />
              
              <NearbyRegionsSidebar 
                adjacentRegions={adjacentRegions}
                regions={nearbyCity || adjacentRegions?.map(region => region.name)}
              />
            </div>
          </div>
        </div>
        
        <RegionalCTA 
          regionName={regionName} 
          region={regionName}
        />
      </main>
      <Footer />
    </>
  );
};

RegionalPageTemplate.defaultProps = {
  nearbyRegions: [],
  services: [],
  nearbyCity: [],
};

export default RegionalPageTemplate;
