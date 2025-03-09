
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
  const regionDescription = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Missouri, including St. Louis, Kansas City, Springfield, and Columbia. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Show-Me State.";
  
  // Cities served in this region
  const citiesServed = [
    { name: "St. Louis", slug: "st-louis", county: "St. Louis", population: "301,578", distance: "0 miles" },
    { name: "Kansas City", slug: "kansas-city", county: "Jackson", population: "508,090", distance: "248 miles" },
    { name: "Springfield", slug: "springfield", county: "Greene", population: "169,176", distance: "216 miles" },
    { name: "Columbia", slug: "columbia", county: "Boone", population: "126,254", distance: "125 miles" },
    { name: "Independence", slug: "independence", county: "Jackson", population: "116,672", distance: "240 miles" },
    { name: "Lee's Summit", slug: "lees-summit", county: "Jackson", population: "101,108", distance: "230 miles" },
    { name: "O'Fallon", slug: "ofallon", county: "St. Charles", population: "91,316", distance: "35 miles" },
    { name: "St. Joseph", slug: "st-joseph", county: "Buchanan", population: "76,472", distance: "300 miles" },
    { name: "St. Charles", slug: "st-charles", county: "St. Charles", population: "71,028", distance: "25 miles" },
    { name: "Blue Springs", slug: "blue-springs", county: "Jackson", population: "55,829", distance: "230 miles" },
    { name: "Joplin", slug: "joplin", county: "Jasper", population: "50,944", distance: "285 miles" },
    { name: "Florissant", slug: "florissant", county: "St. Louis", population: "51,272", distance: "20 miles" },
    { name: "Chesterfield", slug: "chesterfield", county: "St. Louis", population: "47,484", distance: "22 miles" },
    { name: "Jefferson City", slug: "jefferson-city", county: "Cole", population: "42,838", distance: "130 miles" },
    { name: "Cape Girardeau", slug: "cape-girardeau", county: "Cape Girardeau", population: "41,104", distance: "115 miles" }
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = [
    { name: "Illinois", slug: "illinois" },
    { name: "Iowa", slug: "iowa" },
    { name: "Kansas", slug: "kansas" }
  ];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "St. Louis",
    description: regionDescription,
    cities: citiesServed.map(city => city.name),
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
        regionDescription={regionDescription}
        regionFocus={`Missouri businesses from St. Louis to Kansas City benefit from our professional vehicle wrapping services that enhance brand visibility and protect vehicle assets.`}
        regionImage="/images/regions/missouri-vehicle-wraps.jpg"
        citiesServed={citiesServed}
        adjacentRegions={adjacentRegions}
        metaDescription={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in St. Louis, Kansas City, and across the state.`}
        geoRegion="US-MO"
        geoPlacename="Missouri"
        geoPosition="38.5767;-92.1736"
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
      />
      <Footer />
    </>
  );
};

export default Missouri;
