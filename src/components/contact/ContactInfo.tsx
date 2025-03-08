
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="contact-page-content">
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
        Contact Our Vehicle Wrap Experts
      </h2>
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
          <Phone className="text-wrap-blue w-6 h-6" aria-hidden="true" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-wrap-grey">
              <a href="tel:3125971286" className="hover:underline">312-597-1286</a>
            </p>
            <p className="text-wrap-grey text-sm">Call for immediate vehicle wrap inquiries</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Mail className="text-wrap-blue w-6 h-6" aria-hidden="true" />
          <div>
            <h3 className="font-medium">Email</h3>
            <p className="text-wrap-grey">
              <a href="mailto:info@wrappingtheworld.com" className="hover:underline">info@wrappingtheworld.com</a>
            </p>
            <p className="text-wrap-grey text-sm">For quotes and project inquiries</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <MapPin className="text-wrap-blue w-6 h-6" aria-hidden="true" />
          <div>
            <h3 className="font-medium">Location</h3>
            <p className="text-wrap-grey">
              <a href="https://maps.google.com/?q=4711+N.+Lamon+Ave,+Chicago,+IL+60630" target="_blank" rel="noopener noreferrer" className="hover:underline">
                4711 N. Lamon Ave, Chicago, IL 60630
              </a>
            </p>
            <p className="text-wrap-grey text-sm">Serving all of Chicago and surrounding areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
