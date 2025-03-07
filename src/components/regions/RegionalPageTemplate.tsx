import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionalHero from '@/components/regions/hero/RegionalHero';
import ServicesBreadcrumb from '@/components/ServicesBreadcrumb';
import RegionalMainContent from '@/components/regions/RegionalMainContent';
import CitiesServedGrid from '@/components/regions/CitiesServedGrid';
import ContactSidebar from '@/components/regions/ContactSidebar';
import ServicesSidebar from '@/components/regions/ServicesSidebar';
import NearbyRegionsSidebar from '@/components/regions/NearbyRegionsSidebar';
import RegionalCTA from '@/components/regions/RegionalCTA';
import { RegionInfo } from '@/data/regionsData';
import { ServiceInfo } from '@/data/serviceData';

interface RegionalPageTemplateProps {
  title: string;
  description: string;
  content: string;
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
  const heroImage = `/img/regions/${title.toLowerCase().replace(/\s+/g, '-')}-hero.jpg`;
  const pageTitle = `${title} | Wrapping The World`;
  const pageDescription = description;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://wrappingtheworld.com/locations/${title.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>
      <Navbar />
      <main>
        <RegionalHero 
          regionName={title} 
          regionImage={heroImage}
        />
        
        <ServicesBreadcrumb 
          currentPage={title}
          parentPage={breadcrumbParent || {
            name: "Locations",
            path: "/locations"
          }}
        />
        
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <RegionalMainContent
                title={title}
                description={description}
                content={content}
              />
              
              <CitiesServedGrid 
                mainCity={regionalCity || title}
                cities={nearbyRegions}
              />
            </div>
            
            <div className="w-full lg:w-1/3 space-y-8">
              <ContactSidebar 
                location={regionalLocation || title}
              />
              
              <ServicesSidebar 
                services={services}
              />
              
              <NearbyRegionsSidebar 
                regions={nearbyCity}
              />
            </div>
          </div>
        </div>
        
        <RegionalCTA region={title} />
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
