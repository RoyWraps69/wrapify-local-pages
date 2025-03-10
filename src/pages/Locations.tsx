
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { generateBreadcrumbSchema } from '@/utils/seo/schemaGenerator';
import { MapPin } from 'lucide-react';

const Locations = () => {
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Locations", url: "https://wrappingtheworld.com/locations" }
  ]);

  return (
    <>
      <PageSEO 
        title="Locations | Vehicle Wrap Services Nationwide"
        description="Find professional vehicle wrapping services near you. We serve Chicago, Detroit, Indianapolis, Milwaukee and surrounding areas with mobile installation available."
        canonicalUrl="/locations"
        keywords="vehicle wrap locations, car wrap service areas, fleet graphics locations, commercial vehicle wrapping near me, ceramic coating service locations, wrap installation"
        location="Chicago"
        structuredData={[breadcrumbSchema]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-wrap-blue mb-8">Our Service Locations</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Illinois</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/chicago" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Chicago
                  </Link>
                </li>
                <li>
                  <Link to="/locations/naperville" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Naperville
                  </Link>
                </li>
                <li>
                  <Link to="/regions/illinois" className="flex items-center text-wrap-blue font-medium hover:text-wrap-red transition-colors mt-4">
                    View All Illinois Locations
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Michigan</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/detroit" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Detroit
                  </Link>
                </li>
                <li>
                  <Link to="/locations/ann-arbor" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Ann Arbor
                  </Link>
                </li>
                <li>
                  <Link to="/regions/michigan" className="flex items-center text-wrap-blue font-medium hover:text-wrap-red transition-colors mt-4">
                    View All Michigan Locations
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Indiana</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/indianapolis" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Indianapolis
                  </Link>
                </li>
                <li>
                  <Link to="/locations/fort-wayne" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Fort Wayne
                  </Link>
                </li>
                <li>
                  <Link to="/regions/indiana" className="flex items-center text-wrap-blue font-medium hover:text-wrap-red transition-colors mt-4">
                    View All Indiana Locations
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">Wisconsin</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/locations/milwaukee" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Milwaukee
                  </Link>
                </li>
                <li>
                  <Link to="/locations/madison" className="flex items-center text-wrap-grey hover:text-wrap-red transition-colors">
                    <MapPin size={16} className="mr-2" />
                    Madison
                  </Link>
                </li>
                <li>
                  <Link to="/regions/wisconsin" className="flex items-center text-wrap-blue font-medium hover:text-wrap-red transition-colors mt-4">
                    View All Wisconsin Locations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-semibold text-wrap-blue mb-6">Nearby Chicago Suburbs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              <Link to="/locations/evanston" className="p-3 text-sm rounded-md bg-white shadow-md hover:bg-wrap-blue hover:text-white group transition-all duration-300">
                <p className="font-medium">Evanston</p>
                <p className="text-xs text-wrap-grey/80 group-hover:text-white/80">
                  10 miles from Chicago
                </p>
              </Link>
              <Link to="/locations/oak-park" className="p-3 text-sm rounded-md bg-white shadow-md hover:bg-wrap-blue hover:text-white group transition-all duration-300">
                <p className="font-medium">Oak Park</p>
                <p className="text-xs text-wrap-grey/80 group-hover:text-white/80">
                  8 miles from Chicago
                </p>
              </Link>
              <Link to="/locations/skokie" className="p-3 text-sm rounded-md bg-white shadow-md hover:bg-wrap-blue hover:text-white group transition-all duration-300">
                <p className="font-medium">Skokie</p>
                <p className="text-xs text-wrap-grey/80 group-hover:text-white/80">
                  12 miles from Chicago
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Locations;
