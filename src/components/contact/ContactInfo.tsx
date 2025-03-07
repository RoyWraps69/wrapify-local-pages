
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div>
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
        Contact Our Vehicle Wrap Experts
      </h1>
      <p className="text-wrap-grey text-lg mb-6">
        Ready to transform your vehicles with professional-grade vinyl wraps? Get in touch with Wrapping The World for a free, no-obligation quote on 
        commercial fleet wrapping, business vehicle branding, or custom color change wraps for your vehicles.
      </p>
      <p className="text-wrap-grey text-lg mb-8">
        Our expert team serves businesses and individuals throughout Chicago and the surrounding suburbs with premium 3M and Avery Dennison wrapping solutions. 
        Whether you need a single vehicle branded or an entire fleet transformed, we're here to deliver exceptional results that maximize your visibility and impact.
      </p>
      
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Phone className="text-wrap-blue w-6 h-6" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-wrap-grey">312-597-1286</p>
            <p className="text-wrap-grey text-sm">Call for immediate vehicle wrap inquiries</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Mail className="text-wrap-blue w-6 h-6" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-wrap-grey">info@wrappingtheworld.com</p>
            <p className="text-wrap-grey text-sm">For quotes and project inquiries</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <MapPin className="text-wrap-blue w-6 h-6" />
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-wrap-grey">4711 N. Lamon Ave, Chicago, IL 60630</p>
            <p className="text-wrap-grey text-sm">Serving all of Chicago and surrounding areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
