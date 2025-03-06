
import React from 'react';
import RegionalHero from './hero/RegionalHero';
import RegionalMainContent from './content/RegionalMainContent';
import ContactSidebar from './sidebar/ContactSidebar';
import ServicesSidebar from './sidebar/ServicesSidebar';
import NearbyRegionsSidebar from './sidebar/NearbyRegionsSidebar';
import RegionalCTA from './cta/RegionalCTA';

interface RegionalLocation {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface RegionalPageContentProps {
  regionName: string;
  regionDescription: string;
  regionFocus: string;
  regionImage: string;
  citiesServed: RegionalLocation[];
  adjacentRegions: {name: string, slug: string}[];
}

const RegionalPageContent: React.FC<RegionalPageContentProps> = ({
  regionName,
  regionDescription,
  regionFocus,
  regionImage,
  citiesServed,
  adjacentRegions
}) => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <RegionalHero regionName={regionName} regionImage={regionImage} />
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <RegionalMainContent 
              regionName={regionName}
              regionDescription={regionDescription}
              regionFocus={regionFocus}
              citiesServed={citiesServed}
            />
            
            <div className="md:col-span-1">
              <ContactSidebar regionName={regionName} />
              <ServicesSidebar regionName={regionName} />
              <NearbyRegionsSidebar adjacentRegions={adjacentRegions} />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <RegionalCTA regionName={regionName} />
    </main>
  );
};

export default RegionalPageContent;
