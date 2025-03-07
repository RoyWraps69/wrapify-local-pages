
import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTowns, getTownsByState } from '@/utils/townFunctions';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  // Get all towns grouped by state
  const allTowns = getAllTowns();
  const illinoisTowns = getTownsByState('IL');
  const michiganTowns = getTownsByState('MI');
  const indianaTowns = getTownsByState('IN');
  const wisconsinTowns = getTownsByState('WI');

  return (
    <div className="min-h-screen bg-gray-50">
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png')" }}></div>
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
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png')" }}></div>
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
            <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Wrapping Illinois HotSpots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {illinoisTowns.map((town) => (
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
            <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Wrapping Michigan HotSpots</h2>
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
            <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Wrapping Indiana HotSpots</h2>
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
            <h2 className="text-2xl font-bold text-wrap-blue mb-6 border-b pb-2">Wrapping Wisconsin HotSpots</h2>
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
    </div>
  );
};

export default Locations;
