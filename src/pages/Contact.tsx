
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
        pageTitle="Contact Chicago Fleet Wraps | Request Vehicle Wrap Quote"
        pageDescription="Request a free quote for professional vehicle wrapping services in Chicago. Contact our team of expert installers for fleet graphics, commercial wraps, and custom vehicle branding solutions."
        pageUrl="https://chicagofleetwraps.com/contact"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
                Contact Chicago's Vehicle Wrap Experts
              </h1>
              <p className="text-wrap-grey text-lg mb-6">
                Ready to transform your vehicles with professional-grade vinyl wraps? Get in touch with Chicago Fleet Wraps for a free, no-obligation quote on 
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
                    <p className="text-wrap-grey">roy@chicagofleetwraps.com</p>
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
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-6">Request a Free Vehicle Wrap Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input placeholder="Enter your full name" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <Input placeholder="Car, Van, Truck, Fleet, etc." />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea 
                    placeholder="Tell us about your vehicle wrap project needs" 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Submit Quote Request
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
