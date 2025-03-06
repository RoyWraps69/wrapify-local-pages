
import React from 'react';

const LegalSection = () => {
  return (
    <div className="border-t border-white/10 mt-4 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-wrap-light/70 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Wrapping The World. All rights reserved.
      </p>
      <div className="flex space-x-6 text-sm text-wrap-light/70">
        <a href="/privacy-policy" className="hover:text-wrap-red transition-colors">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="hover:text-wrap-red transition-colors">
          Terms of Service
        </a>
        <a href="/sitemap" className="hover:text-wrap-red transition-colors">
          Sitemap
        </a>
      </div>
    </div>
  );
};

export default LegalSection;
