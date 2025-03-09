
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
  const regionDescription = "WRAPPING THE WORLD provides premium vehicle wrapping services throughout Ohio, including Columbus, Cleveland, Cincinnati, and Toledo. Our expert installers deliver professional fleet graphics, color change wraps, and commercial vehicle branding solutions across the Buckeye State.";
  
  // Cities served in this region
  const citiesServed = [
    { name: "Columbus", slug: "columbus", county: "Franklin", population: "905,748", distance: "0 miles" },
    { name: "Cleveland", slug: "cleveland", county: "Cuyahoga", population: "372,624", distance: "142 miles" },
    { name: "Cincinnati", slug: "cincinnati", county: "Hamilton", population: "309,317", distance: "107 miles" },
    { name: "Toledo", slug: "toledo", county: "Lucas", population: "270,871", distance: "148 miles" },
    { name: "Akron", slug: "akron", county: "Summit", population: "190,469", distance: "126 miles" },
    { name: "Dayton", slug: "dayton", county: "Montgomery", population: "140,407", distance: "71 miles" },
    { name: "Parma", slug: "parma", county: "Cuyahoga", population: "78,103", distance: "135 miles" },
    { name: "Canton", slug: "canton", county: "Stark", population: "70,872", distance: "144 miles" },
    { name: "Youngstown", slug: "youngstown", county: "Mahoning", population: "60,068", distance: "186 miles" },
    { name: "Lorain", slug: "lorain", county: "Lorain", population: "65,211", distance: "128 miles" },
    { name: "Hamilton", slug: "hamilton", county: "Butler", population: "62,092", distance: "114 miles" },
    { name: "Springfield", slug: "springfield", county: "Clark", population: "58,662", distance: "44 miles" },
    { name: "Kettering", slug: "kettering", county: "Montgomery", population: "55,525", distance: "67 miles" },
    { name: "Elyria", slug: "elyria", county: "Lorain", population: "53,883", distance: "132 miles" },
    { name: "Lakewood", slug: "lakewood", county: "Cuyahoga", population: "50,942", distance: "137 miles" }
  ];
  
  // Adjacent regions for sidebar
  const adjacentRegions = [
    { name: "Michigan", slug: "michigan" },
    { name: "Indiana", slug: "indiana" },
    { name: "Kentucky", slug: "kentucky" },
    { name: "Pennsylvania", slug: "pennsylvania" }
  ];
  
  // Create schema.org structured data for this region
  const regionSchema = generateRegionSchema({
    regionName,
    mainCity: "Columbus",
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
        description={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Columbus, Cleveland, and across the state.`}
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
        keywords={`${regionName} vehicle wraps, Columbus fleet graphics, Cleveland car wraps, Ohio commercial wraps, Cincinnati vehicle branding, Toledo color change wraps, ${regionName} ceramic coating, ${regionName} paint protection film`}
        location={regionName}
        structuredData={[regionSchema, breadcrumbSchema]}
      />
      <Navbar />
      <RegionalPageTemplate 
        regionName={regionName}
        regionDescription={regionDescription}
        regionFocus={`Ohio is known for its diverse business landscape, from manufacturing in Cleveland to logistics in Columbus. Vehicle wraps and graphics help businesses stand out in competitive markets across the state.`}
        regionImage="/images/regions/ohio-vehicle-wraps.jpg"
        citiesServed={citiesServed}
        adjacentRegions={adjacentRegions}
        metaDescription={`Professional vehicle wrapping services throughout ${regionName}. Expert installation of commercial fleet wraps, color change wraps, and business graphics in Columbus, Cleveland, and across the state.`}
        geoRegion="US-OH"
        geoPlacename="Ohio"
        geoPosition="40.4173;-82.9071"
        canonicalUrl={`/regions/${regionName.toLowerCase()}`}
      />
      <Footer />
    </>
  );
};

export default Ohio;
