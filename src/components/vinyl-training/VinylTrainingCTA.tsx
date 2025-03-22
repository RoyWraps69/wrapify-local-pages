
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Phone, Mail, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const VinylTrainingCTA: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call Netlify function to send the email
      const response = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `Vinyl Wrap Training Inquiry: ${formData.course}`,
          vehicleType: formData.course // Reuse existing field in the function
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });
      
      toast({
        title: "Request Sent!",
        description: "Thanks for your interest in our vinyl wrap training. We'll contact you shortly.",
      });
      
    } catch (error) {
      console.error('Error submitting training form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-wrap-blue to-wrap-blue/90 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Ready to Master Vinyl Wrap Installation?
            </h2>
            
            <p className="text-white/90 text-lg mb-8">
              Take the first step toward becoming a skilled vinyl wrap installer. Our expert instructors are ready to help you develop professional-level skills that will set you apart in the industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/contact?subject=Vinyl%20Training%20Enrollment"
                className="inline-flex items-center justify-center bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors"
              >
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              
              <a 
                href="tel:+13125971286"
                className="inline-flex items-center justify-center bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" /> Call to Reserve
              </a>
            </div>
            
            <p className="text-white/80 text-sm">
              Classes fill up quickly! Reserve your spot today to guarantee availability.
            </p>
          </motion.div>
          
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Request Information</h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-wrap-grey text-sm mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-wrap-grey text-sm mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-wrap-grey text-sm mb-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-wrap-grey text-sm mb-1">Course Interest</label>
                <select 
                  id="course" 
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Beginner Workshop (1 Day)">Beginner Workshop (1 Day)</option>
                  <option value="Comprehensive Course (3 Days)">Comprehensive Course (3 Days)</option>
                  <option value="Professional Certification (5 Days)">Professional Certification (5 Days)</option>
                  <option value="Custom Training">Custom Training</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-wrap-grey text-sm mb-1">Questions/Comments</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} 
                  placeholder="Any specific questions or requirements?" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                    Submitting...
                  </>
                ) : (
                  'Submit Request'
                )}
              </button>
            </form>
            
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
              <a href="tel:+13125971286" className="flex items-center text-wrap-blue hover:text-wrap-red">
                <Phone className="h-4 w-4 mr-2" /> (312) 597-1286
              </a>
              
              <a href="mailto:roy@chicagofleetwraps.com" className="flex items-center text-wrap-blue hover:text-wrap-red">
                <Mail className="h-4 w-4 mr-2" /> roy@chicagofleetwraps.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingCTA;
