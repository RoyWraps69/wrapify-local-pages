
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TrainingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jason Roberts',
      business: 'Owner, Premium Auto Wraps',
      testimonial: 'The 5-day Master course completely transformed how I approach vehicle wraps. The instructors not only taught techniques but explained the science behind them. My business has grown 40% since completing the course.',
      image: '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png',
      course: '5-Day Master Certification',
      stars: 5
    },
    {
      name: 'Maria Garcia',
      business: 'Lead Installer, City Graphics',
      testimonial: 'As someone with some wrapping experience, the 3-day Professional course filled in critical gaps in my knowledge. I'm now much faster and the quality of my work has significantly improved.',
      image: '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png',
      course: '3-Day Professional',
      stars: 5
    },
    {
      name: 'Taylor Johnson',
      business: 'Automotive Enthusiast',
      testimonial: 'The 1-day course was perfect for me as a DIY-er. I learned how to properly wrap my own car and saved thousands. The hands-on practice with expert guidance made all the difference.',
      image: '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
      course: '1-Day Fundamentals',
      stars: 4
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            What Our Students Say
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Hear directly from professionals who have transformed their careers through our training programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-6 right-6 text-wrap-red opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              <div className="p-6 relative z-10">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-wrap-red"
                  />
                  <div>
                    <h3 className="font-semibold text-wrap-blue">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-wrap-grey">
                      {testimonial.business}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-wrap-blue/10 text-wrap-blue text-xs px-3 py-1 rounded-full">
                    {testimonial.course}
                  </span>
                </div>
                
                <p className="text-wrap-grey italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTestimonials;
