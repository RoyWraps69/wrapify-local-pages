
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import RegionalPageContent from '@/components/regions/RegionalPageContent';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';

const IllinoisRegion = () => {
  const cities = [
    {name: "Chicago", slug: "chicago", county: "Cook", population: "2,693,976", distance: "0 miles"},
    {name: "Evanston", slug: "evanston", county: "Cook", population: "78,110", distance: "12 miles"},
    {name: "Oak Park", slug: "oak-park", county: "Cook", population: "52,233", distance: "10 miles"},
    {name: "Naperville", slug: "naperville", county: "DuPage", population: "149,540", distance: "33 miles"},
    {name: "Schaumburg", slug: "schaumburg", county: "Cook", population: "78,723", distance: "31 miles"},
    {name: "Arlington Heights", slug: "arlington-heights", county: "Cook", population: "75,249", distance: "24 miles"},
    {name: "Skokie", slug: "skokie", county: "Cook", population: "67,824", distance: "15 miles"},
    {name: "Des Plaines", slug: "des-plaines", county: "Cook", population: "58,899", distance: "17 miles"}
  ];

  const adjacentRegions = [
    {name: "Indiana", slug: "indiana"},
    {name: "Michigan", slug: "michigan"},
    {name: "Wisconsin", slug: "wisconsin"}
  ];

  return (
    <>
      <Helmet>
        <title>Illinois Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings</title>
        <meta name="description" content="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Illinois. Premium fleet branding and protection for businesses in Chicago, Naperville, Evanston and beyond." />
        <link rel="canonical" href="https://wrappingtheworld.com/regions/illinois" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Illinois" />
        <meta name="geo.position" content="40.0417;-88.3425" />
        <meta name="ICBM" content="40.0417, -88.3425" />
      </Helmet>

      <SEOSchema 
        townName="Illinois"
        pageTitle="Illinois Vehicle Wrapping Services | Fleet Wraps & Ceramic Coatings"
        pageDescription="Professional vehicle wrapping, ceramic coating, and paint protection services throughout Illinois. Premium fleet branding and protection for businesses in Chicago, Naperville, Evanston and beyond."
        pageUrl="https://wrappingtheworld.com/regions/illinois"
      />

      <Navbar />
      <RegionalPageContent
        regionName="Illinois"
        regionDescription="Wrapping The World is Illinois' premier provider of professional vehicle wrapping and protection services. Based in Chicago, we serve businesses and individual clients throughout the state with premium commercial fleet wraps, ceramic coatings, and paint protection solutions. <strong>Our Illinois service area</strong> includes Chicago, the North Shore, western suburbs, and extends throughout Cook, DuPage, Lake, Kane, and Will counties."
        regionFocus="Our Illinois-based vehicle wrapping services cater to diverse business needs across the state. We specialize in commercial fleet branding for companies in Chicago's business districts, partial wraps for suburban service contractors, durable protection for vehicles navigating Illinois' varied climate, and custom solutions for local businesses looking to maximize their mobile advertising presence."
        regionImage="https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        citiesServed={cities}
        adjacentRegions={adjacentRegions}
      />
      <Footer />
    </>
  );
};

export default IllinoisRegion;
