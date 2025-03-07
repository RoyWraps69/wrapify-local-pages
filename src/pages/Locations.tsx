import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllTowns, getTownsByState } from '@/utils/townFunctions';
import { MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { generateWebPageSchema } from '@/utils/seo/schemaGenerator';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const Locations: React.FC = () => {
  // Get all towns grouped by state
  const allTowns = getAllTowns();
  const illinoisTowns = getTownsByState('IL');
  const michiganTowns = getTownsByState('MI');
  const indianaTowns = getTownsByState('IN');
  const wisconsinTowns = getTownsByState('WI');

  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Vehicle Wrap Services Locations | Wrapping The World";
  const pageDescription = "Find Wrapping The World vehicle wrap services in your area. We serve Illinois, Michigan, Indiana, and Wisconsin with premium vehicle wrapping solutions.";
  const structuredData = generateWebPageSchema({
    pageTitle,
    pageDescription,
    pageUrl: "https://wrappingtheworld.com/locations",
    imageUrl: "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });

  return (
    <>
      <PageSEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl="/locations"
        ogImage="/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png"
        keywords="vehicle wrap services, car wrapping locations, fleet wrap services, vehicle branding locations, midwest vehicle wraps"
        structuredData={[structuredData]}
      />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow bg-gray-50 pt-24">
          <div className="container mx-auto px-4 py-12">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-wrap-blue mb-4">Our Service Locations</h1>
              <p className="text-lg text-wrap-grey max-w-3xl mx-auto">
                Wrapping The World serves communities throughout the Midwest with premium vehicle wrapping services. 
                Find your nearest location below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to="/regions/illinois" className="block">
                  <div className="p-6">
                    <h2 className="font-bold text-xl text-wrap-blue mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-wrap-red" />
                      Illinois
                    </h2>
                    <p className="text-wrap-grey mb-4">
                      Serving Chicago and surrounding areas with premium vehicle wrap services.
                    </p>
                    <p className="text-sm text-wrap-grey">
                      {illinoisTowns.length} locations available
                    </p>
                  </div>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to="/regions/michigan" className="block">
                  <div className="p-6">
                    <h2 className="font-bold text-xl text-wrap-blue mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-wrap-red" />
                      Michigan
                    </h2>
                    <p className="text-wrap-grey mb-4">
                      Providing expert vehicle wrapping services throughout Michigan.
                    </p>
                    <p className="text-sm text-wrap-grey">
                      {michiganTowns.length} locations available
                    </p>
                  </div>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to="/regions/indiana" className="block">
                  <div className="p-6">
                    <h2 className="font-bold text-xl text-wrap-blue mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-wrap-red" />
                      Indiana
                    </h2>
                    <p className="text-wrap-grey mb-4">
                      Quality vehicle wraps and graphics for businesses in Indiana.
                    </p>
                    <p className="text-sm text-wrap-grey">
                      {indianaTowns.length} locations available
                    </p>
                  </div>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to="/regions/wisconsin" className="block">
                  <div className="p-6">
                    <h2 className="font-bold text-xl text-wrap-blue mb-2 flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-wrap-red" />
                      Wisconsin
                    </h2>
                    <p className="text-wrap-grey mb-4">
                      Serving Wisconsin businesses with premium vehicle wrap installations.
                    </p>
                    <p className="text-sm text-wrap-grey">
                      {wisconsinTowns.length} locations available
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="space-y-12">
              <div className="animate-on-scroll fade-up">
                <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Popular Illinois Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {illinoisTowns.slice(0, 8).map((town) => (
                    <Link 
                      to={`/locations/${town.id}`} 
                      key={town.id}
                      className="bg-white rounded p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-wrap-red flex-shrink-0" />
                      <span className="text-wrap-grey">{town.name}, IL</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll fade-up">
                <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Popular Michigan Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {michiganTowns.slice(0, 8).map((town) => (
                    <Link 
                      to={`/locations/${town.id}`} 
                      key={town.id}
                      className="bg-white rounded p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-wrap-red flex-shrink-0" />
                      <span className="text-wrap-grey">{town.name}, MI</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll fade-up">
                <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Popular Indiana Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {indianaTowns.slice(0, 8).map((town) => (
                    <Link 
                      to={`/locations/${town.id}`} 
                      key={town.id}
                      className="bg-white rounded p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-wrap-red flex-shrink-0" />
                      <span className="text-wrap-grey">{town.name}, IN</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll fade-up">
                <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Popular Wisconsin Locations</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {wisconsinTowns.slice(0, 8).map((town) => (
                    <Link 
                      to={`/locations/${town.id}`} 
                      key={town.id}
                      className="bg-white rounded p-4 shadow-sm hover:shadow-md transition-shadow flex items-center space-x-2"
                    >
                      <MapPin className="w-4 h-4 text-wrap-red flex-shrink-0" />
                      <span className="text-wrap-grey">{town.name}, WI</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Locations;
