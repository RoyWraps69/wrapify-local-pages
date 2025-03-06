
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h4 className="text-xl font-medium mb-6">Contact Us</h4>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <MapPin size={20} className="text-wrap-red flex-shrink-0 mt-1" />
          <span className="text-wrap-light/80">
            4711 N. Lamon Ave, Chicago, IL 60630
          </span>
        </li>
        <li className="flex items-center space-x-3">
          <Phone size={20} className="text-wrap-red flex-shrink-0" />
          <a href="tel:+13125971286" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            312-597-1286
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <Mail size={20} className="text-wrap-red flex-shrink-0" />
          <a href="mailto:info@wrappingtheworld.com" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
            info@wrappingtheworld.com
          </a>
        </li>
      </ul>
      <div className="mt-6">
        <a href="/contact" className="btn-secondary">
          Request a Quote
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
