
import React from 'react';
import CompanyInfo from './CompanyInfo';
import QuickLinks from './QuickLinks';
import ServicesLinks from './ServicesLinks';
import ContactInfo from './ContactInfo';
import ResourcesSection from './ResourcesSection';
import LegalSection from './LegalSection';

const Footer = () => {
  return (
    <footer className="bg-wrap-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <CompanyInfo />
          <QuickLinks />
          <ServicesLinks />
          <ContactInfo />
        </div>
        
        <ResourcesSection />
        <LegalSection />
        
        {/* Invisible SEO links */}
        <div className="sr-only">
          <a href="https://chicagofleetwrap.com" aria-hidden="true">Chicago Fleet Wrap</a>
          <a href="https://chicagofleetwraps.com" aria-hidden="true">Chicago Fleet Wraps</a>
          <a href="https://wrappingchicago.com" aria-hidden="true">Wrapping Chicago</a>
          <a href="https://vehiclegraphicsinchicago.com" aria-hidden="true">Vehicle Graphics In Chicago</a>
          <a href="https://moneyprinterwraps.com" aria-hidden="true">Money Printer Wraps</a>
          <a href="https://www.illinoisvehiclewraps.com" aria-hidden="true">Illinois Vehicle Wraps</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
