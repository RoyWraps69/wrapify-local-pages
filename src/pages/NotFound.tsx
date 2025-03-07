
import { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Search, MapPin } from "lucide-react";
import { getAllTowns, getTownData } from "@/utils/townFunctions";
import { toast } from "sonner";

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
    
    // Show error toast
    toast.error("Page not found", {
      description: `The page ${location.pathname} doesn't exist or has been moved.`,
      duration: 5000,
    });
    
    // If this is a location path, try to suggest similar towns
    if (isLocationPath && townSlug) {
      const allTowns = getAllTowns();
      console.log("Looking for town:", townSlug);
      console.log("Available towns (sample):", allTowns.map(t => t.name).slice(0, 10), "...");
    }
  }, [location.pathname, isLocationPath, townSlug]);

  // Handle back button for locations
  const handleBackToLocations = () => {
    navigate('/locations');
  };
  
  // Get similar town suggestions if in locations path
  const getSimilarTownSuggestions = () => {
    if (!isLocationPath || !townSlug) return [];
    
    const allTowns = getAllTowns();
    const normalizedSlug = townSlug.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    // Try to find towns with similar names or locations
    return allTowns
      .filter(town => {
        const townIdNormalized = town.id.toLowerCase();
        return townIdNormalized.includes(normalizedSlug) || 
               normalizedSlug.includes(townIdNormalized) ||
               town.name.toLowerCase().includes(normalizedSlug.replace(/-/g, ' '));
      })
      .slice(0, 3);
  };
  
  const similarTowns = getSimilarTownSuggestions();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 rounded-lg shadow-soft bg-white">
        <h1 className="text-5xl font-bold text-wrap-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          {isLocationPath 
            ? `We couldn't find information for "${townSlug}"` 
            : "Sorry, the page you're looking for cannot be found"}
        </p>
        <p className="text-wrap-grey mb-8">
          {isLocationPath 
            ? `The location "${townSlug}" may not be in our service area yet.` 
            : `The page you were trying to reach (${location.pathname}) doesn't exist or has been moved.`}
        </p>
        
        {isLocationPath && similarTowns.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-medium text-wrap-blue mb-3 flex items-center justify-center">
              <MapPin size={18} className="mr-2 text-wrap-red" />
              Available Locations You Might Be Looking For
            </h3>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {similarTowns.map((town) => (
                <Link 
                  key={town.id} 
                  to={`/locations/${town.id}`}
                  className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 text-wrap-blue rounded-full text-sm transition-colors"
                >
                  {town.name}, {town.state}
                </Link>
              ))}
            </div>
          </div>
        )}
        
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
