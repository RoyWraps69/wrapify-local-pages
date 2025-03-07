
import React, { useState } from 'react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would be an API call to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email notification (in a real app this would be handled by a backend)
      console.log('Sending email to: info@wrappingtheworld.com');
      console.log('Form data:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicleType: '',
        message: ''
      });
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Contact Wrapping The World | Request Vehicle Wrap Quote"
        pageDescription="Request a free quote for professional vehicle wrapping services. Contact our team of expert installers for fleet graphics, commercial wraps, and custom vehicle branding solutions."
        pageUrl="https://wrappingtheworld.com/contact"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
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
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-serif font-semibold mb-6">Request a Free Vehicle Wrap Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Vehicle Type</label>
                  <Input 
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    placeholder="Car, Van, Truck, Fleet, etc." 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your vehicle wrap project needs" 
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
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
