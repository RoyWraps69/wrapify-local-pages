
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import { getAllTowns } from '@/utils/townData';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, Navigation, Building, Phone } from 'lucide-react';

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
  
  // State full names mapping
  const stateNames = {
    'IL': 'Illinois',
    'MI': 'Michigan',
    'IN': 'Indiana',
    'WI': 'Wisconsin'
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Locations | Wrapping The World</title>
        <meta name="description" content="Find premium vehicle wrapping and ceramic coating services in your area. Wrapping The World serves communities throughout Illinois, Michigan, Indiana, and Wisconsin." />
        <link rel="canonical" href="https://wrappingtheworld.com/locations" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ServiceCollection",
            "name": "Vehicle Wrapping Locations",
            "description": "Premium vehicle wrapping services throughout the Midwest",
            "provider": {
              "@type": "Organization",
              "name": "Wrapping The World",
              "telephone": "+13125971286",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4711 N. Lamon Ave",
                "addressLocality": "Chicago",
                "addressRegion": "IL",
                "postalCode": "60630",
                "addressCountry": "US"
              }
            }
          })}
        </script>
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
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                Select Your Town or City
              </h2>
              <p className="text-lg text-wrap-grey max-w-3xl mx-auto">
                Click on your location below to find specialized vehicle wrap and protection services in your area.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {states.map(state => (
                <div key={state} className="col-span-1">
                  <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-wrap-blue p-4 flex items-center">
                      <MapPin className="mr-2 text-white" size={24} />
                      <h3 className="text-xl font-serif font-semibold text-white">
                        {stateNames[state as keyof typeof stateNames] || state} Locations
                      </h3>
                    </div>
                    
                    <div className="p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {townsByState[state]
                          .sort((a, b) => a.name.localeCompare(b.name))
                          .map(town => (
                            <Link 
                              key={town.id}
                              to={`/locations/${town.id}`}
                              className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all flex flex-col border border-gray-100 relative hover:border-wrap-red"
                            >
                              <h4 className="text-lg font-semibold text-wrap-blue mb-2 flex items-center">
                                <span>{town.name}</span>
                                <ArrowRight size={14} className="ml-2 text-wrap-red opacity-70" />
                              </h4>
                              
                              <div className="flex flex-col space-y-1 text-sm text-wrap-grey mb-4">
                                <div className="flex items-center">
                                  <Building className="mr-1 h-3 w-3" />
                                  <span>Pop: {town.population.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center">
                                  <Navigation className="mr-1 h-3 w-3" />
                                  <span>
                                    {town.distance === 0 
                                      ? 'Our home base' 
                                      : `${town.distance} miles from Chicago`}
                                  </span>
                                </div>
                              </div>
                              
                              <div className="mt-auto pt-2 border-t border-gray-100">
                                <span className="text-xs text-wrap-blue">
                                  View vehicle wrapping services &rarr;
                                </span>
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-100 shadow-sm text-center">
              <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
                Don't See Your Town?
              </h3>
              <p className="text-wrap-grey mb-6 max-w-2xl mx-auto">
                We provide mobile service throughout the greater Chicago area and beyond.
                Contact us to learn about vehicle wrap services in your location.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center">
                  Contact Us <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <a href="tel:+13125971286" className="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center">
                  <Phone size={16} className="mr-2" /> Call 312-597-1286
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Towns;
