
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, GraduationCap } from 'lucide-react';
import { toast } from 'sonner';

const TrainingCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '3-Day Professional',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      toast.success('Inquiry submitted successfully! We\'ll contact you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '3-Day Professional',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-16 bg-wrap-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 bg-gray-50">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="text-wrap-red h-8 w-8" />
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold text-wrap-blue">
                    Ready to Level Up Your Skills?
                  </h2>
                </div>
                
                <p className="text-wrap-grey mb-6">
                  Take the first step toward mastering vehicle wrap installation. Our courses fill up quickly, so reserve your spot today!
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="bg-wrap-red text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                    <div className="text-wrap-grey">Complete the inquiry form</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-wrap-red text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                    <div className="text-wrap-grey">Schedule your training date</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-wrap-red text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                    <div className="text-wrap-grey">Prepare for a transformative experience</div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-wrap-blue mb-3">Upcoming Class Dates</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-wrap-grey">1-Day Fundamentals:</span>
                      <span className="font-medium">July 15, August 5, August 26</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-wrap-grey">3-Day Professional:</span>
                      <span className="font-medium">July 18-20, August 8-10</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-wrap-grey">5-Day Master:</span>
                      <span className="font-medium">July 24-28, August 14-18</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-wrap-blue mb-6">
                  Inquiry Form
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-wrap-grey mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-wrap-grey mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-wrap-grey mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-wrap-grey mb-1">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                    >
                      <option value="1-Day Fundamentals">1-Day Fundamentals ($750)</option>
                      <option value="3-Day Professional">3-Day Professional ($1,200)</option>
                      <option value="5-Day Master Certification">5-Day Master Certification ($1,800)</option>
                      <option value="Corporate Training">Corporate Training (Custom Quote)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-wrap-grey mb-1">
                      Questions or Comments
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-wrap-red hover:bg-wrap-red/90 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit Inquiry <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCTA;
