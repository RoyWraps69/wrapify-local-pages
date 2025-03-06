
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const CompanyInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-serif font-bold mb-6">Wrapping The World</h3>
      <p className="mb-6 text-wrap-light/80">
        Professional vehicle wrapping services in Chicago and the surrounding areas. Transforming vehicles with premium vinyl wraps since 2010.
      </p>
      <div className="flex space-x-4">
        <a href="https://facebook.com/wrappingtheworld" className="text-wrap-light hover:text-wrap-red transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://instagram.com/wrappingtheworld" className="text-wrap-light hover:text-wrap-red transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://twitter.com/wrappingworld" className="text-wrap-light hover:text-wrap-red transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://linkedin.com/company/wrapping-the-world" className="text-wrap-light hover:text-wrap-red transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default CompanyInfo;
