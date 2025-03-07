
import React from 'react';
import { MapPin, Facebook, Navigation, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MapSectionProps {
  townName: string;
  mapUrl?: string;
}

const MapSection: React.FC<MapSectionProps> = ({ townName, mapUrl }) => {
  // Default map URL if none provided
  const defaultMapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=vehicle+wraps+${encodeURIComponent(townName)}`;
  const embedUrl = mapUrl || defaultMapUrl;
  
  return (
    <section className="py-12 bg-gray-50" id="find-us-near-you">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-wrap-blue">
            Where Can I Find Vehicle Wraps Near {townName}?
          </h2>
          <p className="text-wrap-grey mt-3 max-w-2xl mx-auto">
            Looking for "vehicle wraps near me" in the {townName} area? 
            Visit our facility for a consultation or to see our work in person. 
            We're conveniently located and ready to serve you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-200 rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
            <iframe 
              src={embedUrl}
              title={`Map of vehicle wrap services near ${townName}`}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
              Wrapping The World - {townName} Location
            </h3>
            
            <div className="flex items-start mb-4">
              <MapPin className="text-wrap-red shrink-0 mt-1 mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">Our Address:</p>
                <p className="text-wrap-grey">4711 N. Lamon Ave, Chicago, IL 60630</p>
                <p className="text-wrap-grey text-sm mt-1">
                  Serving customers throughout {townName} and surrounding areas
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <Star className="text-wrap-blue shrink-0 mt-1 mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">Business Hours:</p>
                <p className="text-wrap-grey">Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p className="text-wrap-grey">Saturday: 9:00 AM - 3:00 PM</p>
                <p className="text-wrap-grey">Sunday: By appointment only</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <Navigation className="text-wrap-blue shrink-0 mt-1 mr-3 h-5 w-5" />
              <div>
                <p className="font-medium">Service Radius:</p>
                <p className="text-wrap-grey">
                  We provide mobile consultations within 30 miles of our location, 
                  covering all of {townName} and nearby communities.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a 
                href="tel:+13125971286" 
                className="bg-wrap-blue text-white text-center py-2 rounded hover:bg-wrap-blue/90 transition"
              >
                Call Us Now
              </a>
              <Link 
                to="/contact" 
                className="bg-wrap-red text-white text-center py-2 rounded hover:bg-wrap-red/90 transition"
              >
                Request Quote
              </Link>
            </div>
            
            {/* Social Check-in Reminder */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <Facebook className="text-blue-600 h-5 w-5 mr-2" />
                <p className="text-sm font-medium">Check in for 10% off your service!</p>
              </div>
              <p className="text-xs text-wrap-grey mt-1">
                Check in on Facebook or Instagram when you visit us and show our staff to receive a 10% discount on your vehicle wrap service.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a 
            href="https://maps.google.com/maps?daddr=4711+N.+Lamon+Ave,+Chicago,+IL+60630" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <span>Get Directions to Our {townName} Vehicle Wrap Facility</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
