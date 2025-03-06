
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8 rounded-lg shadow-soft bg-white">
        <h1 className="text-5xl font-bold text-wrap-blue mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Sorry, the page you're looking for cannot be found
        </p>
        <p className="text-wrap-grey mb-8">
          The page you were trying to reach ({location.pathname}) doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
