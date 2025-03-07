
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Printer, GraduationCap } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  return (
    <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
        >
          Home
        </Link>
        <div className="px-3 py-2">
          <p className="font-medium text-wrap-grey mb-2">Services</p>
          <div className="pl-4 flex flex-col space-y-2">
            <Link to="/services/vehicle-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
              Vehicle Wraps
            </Link>
            <Link to="/services/fleet-graphics" className="text-sm text-wrap-grey hover:text-wrap-red">
              Fleet Graphics
            </Link>
            <Link to="/services/commercial-fleet-wraps" className="text-sm text-wrap-grey hover:text-wrap-red">
              Commercial Fleet Wraps
            </Link>
            <Link to="/services" className="text-sm font-medium text-wrap-grey hover:text-wrap-red">
              View All Services
            </Link>
          </div>
        </div>
        <Link
          to="/gallery"
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
        >
          Gallery
        </Link>
        <Link
          to="/print-ship"
          className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
        >
          <Printer className="mr-1" size={16} />
          Print & Ship
        </Link>
        <Link
          to="/training-classes"
          className="flex items-center px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
        >
          <GraduationCap className="mr-1" size={16} />
          Training Classes
        </Link>
        <div className="px-3 py-2">
          <p className="font-medium text-wrap-grey mb-2">Locations</p>
          <div className="pl-4 flex flex-col space-y-2">
            <Link to="/regions/illinois" className="text-sm text-wrap-grey hover:text-wrap-red">
              Illinois Region
            </Link>
            <Link to="/regions/michigan" className="text-sm text-wrap-grey hover:text-wrap-red">
              Michigan Region
            </Link>
            <Link to="/regions/indiana" className="text-sm text-wrap-grey hover:text-wrap-red">
              Indiana Region
            </Link>
            <Link to="/regions/wisconsin" className="text-sm text-wrap-grey hover:text-wrap-red">
              Wisconsin Region
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <p className="font-medium text-wrap-grey mb-2">Resources</p>
          <div className="pl-4 flex flex-col space-y-2">
            <Link to="/vinyl-wrap-care-guide" className="text-sm text-wrap-grey hover:text-wrap-red">
              Vinyl Wrap Care Guide
            </Link>
            <Link to="/about" className="text-sm text-wrap-grey hover:text-wrap-red">
              About Us
            </Link>
            <Link to="/blog" className="text-sm text-wrap-grey hover:text-wrap-red">
              Blog
            </Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors"
        >
          Contact
        </Link>
        <a
          href="tel:+13125971286"
          className="flex items-center gap-2 bg-wrap-red text-white px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors"
        >
          <Phone size={18} />
          <span>312-597-1286</span>
        </a>
      </nav>
    </div>
  );
};

export default MobileNavigation;
