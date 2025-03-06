
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalPageContent from '@/components/regions/RegionalPageContent';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';

const MichiganRegion = () => {
  const cities = [
    {name: "Detroit", slug: "detroit", county: "Wayne", population: "639,111", distance: "283 miles from Chicago"},
    {name: "Grand Rapids", slug: "grand-rapids", county: "Kent", population: "198,917", distance: "180 miles from Chicago"},
    {name: "Ann Arbor", slug: "ann-arbor", county: "Washtenaw", population: "123,851", distance: "243 miles from Chicago"},
    {name: "Lansing", slug: "lansing", county: "Ingham", population: "118,210", distance: "210 miles from Chicago"},
    {name: "Kalamazoo", slug: "kalamazoo", county: "Kalamazoo", population: "73,598", distance: "140 miles from Chicago"},
    {name: "Battle Creek", slug: "battle-creek", county: "Calhoun", population: "51,247", distance: "166 miles from Chicago"}
  ];

  const adjacentRegions = [
    {name: "Illinois", slug: "illinois"},
    {name: "Indiana", slug: "indiana"},
    {name: "Wisconsin", slug: "wisconsin"}
  ];

  return (
    <>
      <Helmet>
        <title>Michigan Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings</title>
        <meta name="description" content="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Michigan. Premium fleet branding and protection for businesses in Detroit, Grand Rapids, Ann Arbor and beyond." />
        <link rel="canonical" href="https://wrappingtheworld.com/regions/michigan" />
        <meta name="geo.region" content="US-MI" />
        <meta name="geo.placename" content="Michigan" />
        <meta name="geo.position" content="44.3148;-85.6024" />
        <meta name="ICBM" content="44.3148, -85.6024" />
      </Helmet>

      <SEOSchema 
        townName="Michigan"
        pageTitle="Michigan Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings"
        pageDescription="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Michigan. Premium fleet branding and protection for businesses in Detroit, Grand Rapids, Ann Arbor and beyond."
        pageUrl="https://wrappingtheworld.com/regions/michigan"
      />

      <Navbar />
      <RegionalPageContent
        regionName="Michigan"
        regionDescription="Wrapping The World extends our professional vehicle wrapping and protection services throughout Michigan. From our Chicago base, we serve Michigan businesses with premium commercial fleet wraps, ceramic coatings, and paint protection solutions. <strong>Our Michigan service area</strong> includes Detroit, Grand Rapids, Ann Arbor, Lansing, and other major cities across the state, providing exceptional vehicle transformation and protection services."
        regionFocus="Our Michigan-focused vehicle services address the unique needs of businesses across the state. We specialize in creating weather-resistant commercial fleet wraps designed to withstand Michigan's harsh winters, premium ceramic coatings that protect against road salt and environmental damage, and custom branding solutions that help Michigan businesses stand out in competitive markets."
        regionImage="https://images.unsplash.com/photo-1534270804882-7b71aaece2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        citiesServed={cities}
        adjacentRegions={adjacentRegions}
      />
      <Footer />
    </>
  );
};

export default MichiganRegion;
