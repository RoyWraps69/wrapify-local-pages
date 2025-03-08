
import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactLayout = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="sr-only">Contact Wrapping The World for Professional Vehicle Wraps</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default ContactLayout;
