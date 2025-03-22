
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactSidebarProps {
  regionName: string;
  // Add location prop to match usage in RegionalPageTemplate.tsx
  location?: string;
}

const ContactSidebar: React.FC<ContactSidebarProps> = ({ 
  regionName,
  location,
}) => {
  // Use location as regionName if provided
  const displayRegion = location || regionName;
  
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
      <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
        Contact Us in {displayRegion}
      </h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="text-wrap-red mt-1" />
          <div>
            <p className="font-medium">Wrapping The World</p>
            <p className="text-wrap-grey">4711 N. Lamon Ave</p>
            <p className="text-wrap-grey">Chicago, IL 60630</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Phone size={20} className="text-wrap-red" />
          <a href="tel:+13125971286" className="text-wrap-blue hover:text-wrap-red transition-colors">
            312-597-1286
          </a>
        </div>
        
        <div className="flex items-center gap-3">
          <Mail size={20} className="text-wrap-red" />
          <a href="mailto:roy@chicagofleetwraps.com" className="text-wrap-blue hover:text-wrap-red transition-colors">
            roy@chicagofleetwraps.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;
