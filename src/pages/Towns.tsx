
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import { getAllTowns } from '@/utils/townData';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight } from 'lucide-react';

const Towns: React.FC = () => {
  // Get all towns data
  const allTowns = getAllTowns();
  
  // Group towns by state
  const townsByState = allTowns.reduce((acc, town) => {
    if (!acc[town.state]) {
      acc[town.state] = [];
    }
    acc[town.state].push(town);
    return acc;
  }, {} as Record<string, typeof allTowns>);
  
  // Sort states alphabetically
  const states = Object.keys(townsByState).sort();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Locations | Wrapping The World</title>
        <meta name="description" content="Find premium vehicle wrapping and ceramic coating services in your area. Wrapping The World serves communities throughout Illinois, Michigan, Indiana, and Wisconsin." />
        <link rel="canonical" href="https://wrappingtheworld.com/locations" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="py-12 bg-wrap-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Vehicle Wrap Locations
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find premium vehicle wrapping, ceramic coating, and paint protection services in your area.
              Wrapping The World serves communities throughout the Midwest.
            </p>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                Select Your Town or City
              </h2>
              <p className="text-lg text-wrap-grey max-w-3xl mx-auto">
                Click on your location below to find specialized vehicle wrap and protection services in your area.
              </p>
            </div>
            
            <div className="space-y-12">
              {states.map(state => (
                <div key={state} className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-6 flex items-center">
                    <MapPin className="mr-2 text-wrap-red" size={24} />
                    {state === 'IL' ? 'Illinois' : 
                     state === 'MI' ? 'Michigan' : 
                     state === 'IN' ? 'Indiana' : 
                     state === 'WI' ? 'Wisconsin' : state} Locations
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {townsByState[state].sort((a, b) => a.name.localeCompare(b.name)).map(town => (
                      <Link 
                        key={town.id}
                        to={`/locations/${town.id}`}
                        className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-shadow flex flex-col border border-gray-100"
                      >
                        <h4 className="text-lg font-semibold text-wrap-blue mb-2">
                          {town.name}
                        </h4>
                        <p className="text-sm text-wrap-grey mb-3 flex-grow">
                          {town.distance === 0 
                            ? 'Our home base' 
                            : `${town.distance} miles from Chicago`}
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-xs text-wrap-grey">
                            Pop: {town.population.toLocaleString()}
                          </span>
                          <span className="text-wrap-red text-sm flex items-center">
                            Visit <ArrowRight size={14} className="ml-1" />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
                Don't See Your Town?
              </h3>
              <p className="text-wrap-grey mb-6">
                We provide mobile service throughout the greater Chicago area and beyond.
                Contact us to learn about vehicle wrap services in your location.
              </p>
              <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center">
                Contact Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Towns;
