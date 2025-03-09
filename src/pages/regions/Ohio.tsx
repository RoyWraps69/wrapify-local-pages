
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionalPageTemplate from '@/components/regions/RegionalPageTemplate';
import PageSEO from '@/components/seo/PageSEO';
import { 
  generateRegionSchema,
  generateBreadcrumbSchema 
} from '@/utils/seo/schemaGenerator';

const Ohio = () => {
  // Region data
  const regionName = "Ohio";
  const regionIntro = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Ohio, including Columbus, Cleveland, Cincinnati, and Toledo. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Buckeye State.";
  
  // Cities served in this region
  const citiesServed = [
    "Columbus", "Cleveland", "Cincinnati", "Toledo", 
    "Akron", "Dayton", "Parma", "Canton",
    "Youngstown", "Lorain", "Hamilton", "Springfield",
    "Kettering", "Elyria", "Lakewood"
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = ["Michigan", "Indiana", "Kentucky", "Pennsylvania"];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "Columbus",
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
        description={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Columbus, Cleveland, and across the state.`}
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
        keywords={`${regionName} vehicle wraps, Columbus fleet graphics, Cleveland car wraps, Ohio commercial wraps, Cincinnati vehicle branding, Toledo color change wraps, ${regionName} ceramic coating, ${regionName} paint protection film`}
        location={regionName}
        structuredData={[regionSchema, breadcrumbSchema]}
      />
      <Navbar />
      <RegionalPageTemplate 
        regionName={regionName}
        regionIntro={regionIntro}
        cities={citiesServed}
        regions={adjacentRegions}
        mainCity="Columbus"
      />
      <Footer />
    </>
  );
};

export default Ohio;
