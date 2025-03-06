
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalPageContent from '@/components/regions/RegionalPageContent';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';

const IndianaRegion = () => {
  const cities = [
    {name: "Indianapolis", slug: "indianapolis", county: "Marion", population: "887,642", distance: "184 miles from Chicago"},
    {name: "Fort Wayne", slug: "fort-wayne", county: "Allen", population: "268,378", distance: "160 miles from Chicago"},
    {name: "South Bend", slug: "south-bend", county: "St. Joseph", population: "103,453", distance: "95 miles from Chicago"},
    {name: "Gary", slug: "gary", county: "Lake", population: "69,093", distance: "30 miles from Chicago"},
    {name: "Hammond", slug: "hammond", county: "Lake", population: "75,522", distance: "25 miles from Chicago"},
    {name: "Merrillville", slug: "merrillville", county: "Lake", population: "35,246", distance: "40 miles from Chicago"}
  ];

  const adjacentRegions = [
    {name: "Illinois", slug: "illinois"},
    {name: "Michigan", slug: "michigan"},
    {name: "Wisconsin", slug: "wisconsin"}
  ];

  return (
    <>
      <Helmet>
        <title>Indiana Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings</title>
        <meta name="description" content="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Indiana. Premium fleet branding and protection for businesses in Indianapolis, Fort Wayne, South Bend and beyond." />
        <link rel="canonical" href="https://wrappingtheworld.com/regions/indiana" />
        <meta name="geo.region" content="US-IN" />
        <meta name="geo.placename" content="Indiana" />
        <meta name="geo.position" content="40.2672;-86.1349" />
        <meta name="ICBM" content="40.2672, -86.1349" />
      </Helmet>

      <SEOSchema 
        townName="Indiana"
        pageTitle="Indiana Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings"
        pageDescription="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Indiana. Premium fleet branding and protection for businesses in Indianapolis, Fort Wayne, South Bend and beyond."
        pageUrl="https://wrappingtheworld.com/regions/indiana"
      />

      <Navbar />
      <RegionalPageContent
        regionName="Indiana"
        regionDescription="Wrapping The World provides professional vehicle wrapping and protection services throughout Indiana. From our Chicago headquarters, we extend our premium services to businesses and individuals across Indiana, with particular focus on Northwest Indiana and major cities statewide. <strong>Our Indiana service area</strong> includes Gary, Hammond, South Bend, Fort Wayne, Indianapolis, and surrounding communities, offering convenient access to expert vehicle transformation services."
        regionFocus="Our Indiana vehicle services are tailored to meet the specific needs of businesses throughout the state. We specialize in durable commercial fleet wraps that maximize brand visibility for Indiana businesses, ceramic coatings that protect against harsh midwest weather conditions, and custom graphic solutions for companies looking to stand out in competitive markets across Indianapolis, Fort Wayne, and other major Indiana cities."
        regionImage="https://images.unsplash.com/photo-1676280128518-f314ba87a5ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        citiesServed={cities}
        adjacentRegions={adjacentRegions}
      />
      <Footer />
    </>
  );
};

export default IndianaRegion;
