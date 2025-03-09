
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
  const regionDescription = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Iowa, including Des Moines, Cedar Rapids, Davenport, and Iowa City. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Hawkeye State.";
  
  // Cities served in this region
  const citiesServed = [
    { name: "Des Moines", slug: "des-moines", county: "Polk", population: "214,133", distance: "0 miles" },
    { name: "Cedar Rapids", slug: "cedar-rapids", county: "Linn", population: "136,467", distance: "130 miles" },
    { name: "Davenport", slug: "davenport", county: "Scott", population: "101,590", distance: "165 miles" },
    { name: "Iowa City", slug: "iowa-city", county: "Johnson", population: "74,596", distance: "115 miles" },
    { name: "Waterloo", slug: "waterloo", county: "Black Hawk", population: "67,587", distance: "112 miles" },
    { name: "Ames", slug: "ames", county: "Story", population: "66,427", distance: "30 miles" },
    { name: "West Des Moines", slug: "west-des-moines", county: "Polk", population: "65,608", distance: "10 miles" },
    { name: "Council Bluffs", slug: "council-bluffs", county: "Pottawattamie", population: "62,230", distance: "130 miles" },
    { name: "Ankeny", slug: "ankeny", county: "Polk", population: "65,284", distance: "15 miles" },
    { name: "Urbandale", slug: "urbandale", county: "Polk", population: "44,379", distance: "12 miles" },
    { name: "Cedar Falls", slug: "cedar-falls", county: "Black Hawk", population: "40,713", distance: "105 miles" },
    { name: "Bettendorf", slug: "bettendorf", county: "Scott", population: "39,102", distance: "165 miles" },
    { name: "Sioux City", slug: "sioux-city", county: "Woodbury", population: "82,514", distance: "200 miles" },
    { name: "Marion", slug: "marion", county: "Linn", population: "39,127", distance: "128 miles" },
    { name: "Dubuque", slug: "dubuque", county: "Dubuque", population: "58,276", distance: "180 miles" }
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = [
    { name: "Illinois", slug: "illinois" },
    { name: "Wisconsin", slug: "wisconsin" },
    { name: "Missouri", slug: "missouri" }
  ];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "Des Moines",
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
        description={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Des Moines, Cedar Rapids, and across the state.`}
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
        keywords={`${regionName} vehicle wraps, Des Moines fleet graphics, Cedar Rapids car wraps, Iowa commercial wraps, Davenport vehicle branding, Iowa City color change wraps, ${regionName} ceramic coating, ${regionName} paint protection film`}
        location={regionName}
        structuredData={[regionSchema, breadcrumbSchema]}
      />
      <Navbar />
      <RegionalPageTemplate 
        regionName={regionName}
        regionDescription={regionDescription}
        regionFocus={`Iowa's agricultural and manufacturing sectors benefit greatly from professionally branded vehicle wraps that increase visibility across the state's highways and rural communities.`}
        regionImage="/images/regions/iowa-vehicle-wraps.jpg"
        citiesServed={citiesServed}
        adjacentRegions={adjacentRegions}
        metaDescription={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Des Moines, Cedar Rapids, and across the state.`}
        geoRegion="US-IA"
        geoPlacename="Iowa"
        geoPosition="41.8780;-93.0977"
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
      />
      <Footer />
    </>
  );
};

export default Iowa;
