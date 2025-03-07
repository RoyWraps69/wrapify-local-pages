
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Printer, GraduationCap, ExternalLink, Shield, FileText, Users, MapPin } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  return (
    <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-fade-in">
      <nav className="flex flex-col space-y-3">
        <Link
          to="/"
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors flex items-center"
        >
          <span className="w-5 h-5 mr-2 flex items-center justify-center">🏠</span>
          Home
        </Link>
        <div className="px-3 py-2 border-b border-gray-100 pb-4">
          <p className="font-medium text-wrap-blue mb-2 flex items-center">
            <span className="w-5 h-5 mr-2 flex items-center justify-center bg-wrap-blue/10 rounded-full text-wrap-blue">
              <FileText size={14} />
            </span>
            Services
          </p>
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
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors flex items-center"
        >
          <span className="w-5 h-5 mr-2 flex items-center justify-center">🖼️</span>
          Gallery
        </Link>
        <Link
          to="/print-ship"
          className="flex items-center px-4 py-3 my-1 rounded-md bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-medium shadow-neon-blue group transition-all duration-300 hover:scale-105"
        >
          <Printer className="mr-2 group-hover:animate-pulse" size={18} />
          <span className="relative">
            Print & Ship
            <span className="absolute inset-0 w-full h-full bg-white/20 animate-light-streak"></span>
          </span>
        </Link>
        <div className="px-3 py-2 border-b border-gray-100 pb-4">
          <p className="font-medium text-wrap-blue mb-2 flex items-center">
            <span className="w-5 h-5 mr-2 flex items-center justify-center bg-wrap-blue/10 rounded-full text-wrap-blue">
              <Users size={14} />
            </span>
            Resources
          </p>
          <div className="pl-4 flex flex-col space-y-2">
            <Link to="/training-classes" className="text-sm text-wrap-grey hover:text-wrap-red flex items-center">
              <GraduationCap className="mr-1 h-3 w-3" />
              Training Classes
            </Link>
            <Link to="/vinyl-wrap-care-guide" className="text-sm text-wrap-grey hover:text-wrap-red">
              Vinyl Wrap Care Guide
            </Link>
            <Link to="/ceramic-coating-faq" className="text-sm text-wrap-grey hover:text-wrap-red">
              Ceramic Coating FAQ
            </Link>
            <Link to="/blog" className="text-sm text-wrap-grey hover:text-wrap-red">
              Blog
            </Link>
            <Link to="/about" className="text-sm text-wrap-grey hover:text-wrap-red">
              About Us
            </Link>
          </div>
        </div>
        <div className="px-3 py-2 border-b border-gray-100 pb-4">
          <p className="font-medium text-wrap-blue mb-2 flex items-center">
            <span className="w-5 h-5 mr-2 flex items-center justify-center bg-wrap-blue/10 rounded-full text-wrap-blue">
              <MapPin size={14} />
            </span>
            Locations
          </p>
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
            <Link to="/locations/chicago" className="text-sm text-wrap-grey hover:text-wrap-red">
              Chicago, IL
            </Link>
            <Link to="/locations/detroit" className="text-sm text-wrap-grey hover:text-wrap-red">
              Detroit, MI
            </Link>
          </div>
        </div>
        <Link
          to="/contact"
          className="px-3 py-2 rounded-md text-wrap-grey hover:text-wrap-red transition-colors flex items-center"
        >
          <span className="w-5 h-5 mr-2 flex items-center justify-center">✉️</span>
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
