
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RegionalPageTemplate from '@/components/regions/RegionalPageTemplate';
import PageSEO from '@/components/seo/PageSEO';
import { 
  generateRegionSchema,
  generateBreadcrumbSchema 
} from '@/utils/seo/schemaGenerator';

const Missouri = () => {
  // Region data
  const regionName = "Missouri";
  const regionIntro = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Missouri, including St. Louis, Kansas City, Springfield, and Columbia. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Show-Me State.";
  
  // Cities served in this region
  const citiesServed = [
    "St. Louis", "Kansas City", "Springfield", "Columbia", 
    "Independence", "Lee's Summit", "O'Fallon", "St. Joseph",
    "St. Charles", "Blue Springs", "Joplin", "Florissant",
    "Chesterfield", "Jefferson City", "Cape Girardeau"
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = ["Illinois", "Iowa", "Kansas"];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "St. Louis",
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
        description={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in St. Louis, Kansas City, and across the state.`}
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
        keywords={`${regionName} vehicle wraps, St. Louis fleet graphics, Kansas City car wraps, Missouri commercial wraps, Springfield vehicle branding, Columbia color change wraps, ${regionName} ceramic coating, ${regionName} paint protection film`}
        location={regionName}
        structuredData={[regionSchema, breadcrumbSchema]}
      />
      <Navbar />
      <RegionalPageTemplate 
        regionName={regionName}
        regionIntro={regionIntro}
        cities={citiesServed}
        regions={adjacentRegions}
        mainCity="St. Louis"
      />
      <Footer />
    </>
  );
};

export default Missouri;
