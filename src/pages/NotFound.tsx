
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if we're in a location path
  const isLocationPath = location.pathname.startsWith('/locations/');
  const townSlug = isLocationPath ? location.pathname.split('/').pop() : null;
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Handle back button for locations
  const handleBackToLocations = () => {
    navigate('/locations');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 rounded-lg shadow-soft bg-white">
        <h1 className="text-5xl font-bold text-wrap-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          {isLocationPath 
            ? `We couldn't find information for ${townSlug}` 
            : "Sorry, the page you're looking for cannot be found"}
        </p>
        <p className="text-wrap-grey mb-8">
          {isLocationPath 
            ? `The location "${townSlug}" may not be in our service area yet.` 
            : `The page you were trying to reach (${location.pathname}) doesn't exist or has been moved.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          {isLocationPath ? (
            <button 
              onClick={handleBackToLocations} 
              className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-all"
            >
              <Search size={18} />
              <span>See All Locations</span>
            </button>
          ) : (
            <button 
              onClick={() => window.history.back()} 
              className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-all"
            >
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
