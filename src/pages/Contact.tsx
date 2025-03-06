
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Contact Chicago Fleet Wraps | Get a Free Quote"
        pageDescription="Contact us for professional vehicle wrapping services in Chicago. Get a free quote for your fleet branding or custom vehicle wrap project."
        pageUrl="https://chicagofleetwraps.com/contact"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
                Contact Us
              </h1>
              <p className="text-wrap-grey text-lg mb-8">
                Get in touch with us for a free quote or to discuss your vehicle wrapping needs. 
                We're here to help transform your vehicles with professional wrapping services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="text-wrap-blue w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-wrap-grey">(312) 555-5555</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-wrap-blue w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-wrap-grey">info@chicagofleetwraps.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin className="text-wrap-blue w-6 h-6" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-wrap-grey">Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-6">Get a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your name" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="Your email" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project" 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
