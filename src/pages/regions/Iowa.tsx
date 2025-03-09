
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionalPageTemplate from '@/components/regions/RegionalPageTemplate';
import PageSEO from '@/components/seo/PageSEO';
import { 
  generateRegionSchema,
  generateBreadcrumbSchema 
} from '@/utils/seo/schemaGenerator';

const Iowa = () => {
  // Region data
  const regionName = "Iowa";
  const regionIntro = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Iowa, including Des Moines, Cedar Rapids, Davenport, and Iowa City. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Hawkeye State.";
  
  // Cities served in this region
  const citiesServed = [
    "Des Moines", "Cedar Rapids", "Davenport", "Iowa City", 
    "Waterloo", "Ames", "West Des Moines", "Council Bluffs",
    "Ankeny", "Urbandale", "Cedar Falls", "Bettendorf",
    "Sioux City", "Marion", "Dubuque"
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = ["Illinois", "Wisconsin", "Missouri"];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "Des Moines",
    description: regionIntro,
    cities: citiesServed,
  });
  
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Regions", url: "https://wrappingtheworld.com/regions" },
    { name: regionName, url: `https://wrappingtheworld.com/regions/${regionName.toLowerCase()}` }
  ]);

  return (
    <>
      <PageSEO 
        title={`Vehicle Wraps in ${regionName} | Commercial Fleet Graphics`}
        description={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Des Moines, Cedar Rapids, and across the state.`}
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
        keywords={`${regionName} vehicle wraps, Des Moines fleet graphics, Cedar Rapids car wraps, Iowa commercial wraps, Davenport vehicle branding, Iowa City color change wraps, ${regionName} ceramic coating, ${regionName} paint protection film`}
        location={regionName}
        structuredData={[regionSchema, breadcrumbSchema]}
      />
      <Navbar />
      <RegionalPageTemplate 
        regionName={regionName}
        regionIntro={regionIntro}
        cities={citiesServed}
        regions={adjacentRegions}
        mainCity="Des Moines"
      />
      <Footer />
    </>
  );
};

export default Iowa;
