
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import ContactLayout from '@/components/contact/ContactLayout';

const Contact = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Contact Wrapping The World | Request Vehicle Wrap Quote"
        pageDescription="Request a free quote for professional vehicle wrapping services. Contact our team of expert installers for fleet graphics, commercial wraps, and custom vehicle branding solutions."
        pageUrl="https://wrappingtheworld.com/contact"
      />
      <Navbar />
      <ContactLayout />
      <Footer />
    </>
  );
};

export default Contact;
