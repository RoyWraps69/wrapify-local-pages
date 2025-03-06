
import React from 'react';
import RegionalPageTemplate from '@/components/regions/RegionalPageTemplate';

const WisconsinRegion = () => {
  const cities = [
    {name: "Milwaukee", slug: "milwaukee", county: "Milwaukee", population: "577,222", distance: "92 miles from Chicago"},
    {name: "Madison", slug: "madison", county: "Dane", population: "269,840", distance: "147 miles from Chicago"},
    {name: "Green Bay", slug: "green-bay", county: "Brown", population: "107,395", distance: "208 miles from Chicago"},
    {name: "Kenosha", slug: "kenosha", county: "Kenosha", population: "99,889", distance: "66 miles from Chicago"},
    {name: "Racine", slug: "racine", county: "Racine", population: "77,816", distance: "75 miles from Chicago"},
    {name: "Waukesha", slug: "waukesha", county: "Waukesha", population: "71,158", distance: "110 miles from Chicago"}
  ];

  const adjacentRegions = [
    {name: "Illinois", slug: "illinois"},
    {name: "Michigan", slug: "michigan"},
    {name: "Indiana", slug: "indiana"}
  ];

  return (
    <RegionalPageTemplate
      regionName="Wisconsin"
      regionDescription="Wrapping The World extends our premium vehicle wrapping and protection services to businesses and individuals throughout Wisconsin. From our Chicago headquarters, we provide convenient access to professional vehicle transformation services for clients across the state. <strong>Our Wisconsin service area</strong> includes Milwaukee, Madison, Green Bay, Kenosha, Racine, and surrounding communities, delivering Chicago-quality vehicle wraps and protection with Wisconsin convenience."
      regionFocus="Our Wisconsin-focused vehicle services address the unique challenges faced by businesses operating in the state's diverse climate conditions. We specialize in creating durable commercial fleet wraps designed to withstand Wisconsin's harsh winters, premium ceramic coatings that protect against road salt and environmental damage, and custom branding solutions that help Wisconsin businesses maximize their mobile advertising effectiveness throughout the year."
      regionImage="https://images.unsplash.com/photo-1596720685811-58ec259bfd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      citiesServed={cities}
      adjacentRegions={adjacentRegions}
      metaDescription="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Wisconsin. Premium fleet branding and protection for businesses in Milwaukee, Madison, Green Bay and beyond."
      geoRegion="US-WI"
      geoPlacename="Wisconsin"
      geoPosition="44.2563;-89.6385"
      canonicalUrl="https://wrappingtheworld.com/regions/wisconsin"
    />
  );
};

export default WisconsinRegion;
