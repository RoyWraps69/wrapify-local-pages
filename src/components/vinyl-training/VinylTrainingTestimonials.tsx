
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const VinylTrainingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Owner, Premium Wraps',
      image: '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',
      quote: "Taking the Professional Certification course was the best investment I've made for my business. I was able to streamline my installation process and dramatically increase my output quality. The hands-on training with actual vehicles was invaluable.",
      stars: 5,
      featured: true
    },
    {
      name: 'Sarah Johnson',
      role: 'Automotive Enthusiast',
      image: '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
      quote: "As a DIY enthusiast, I wanted to learn how to wrap my own vehicles properly. The Beginner Workshop exceeded my expectations and gave me the confidence to tackle my projects. The instructors were patient and incredibly knowledgeable.",
      stars: 5,
      featured: false
    },
    {
      name: 'David Chen',
      role: 'Fleet Manager, Eco Deliveries',
      image: '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png',
      quote: "We sent our entire installation team through the Comprehensive Course, and the results were immediate. Our installation quality improved, completion time decreased, and we've had zero warranty claims since the training. Highly recommended for fleet operations.",
      stars: 5,
      featured: false
    }
  ];

  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Success Stories
          </h2>
          <p className="text-wrap-grey text-lg">
            Hear from professionals who have transformed their skills through our training programs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-6">
          {testimonials.map((testimonial, index) => {
            if (testimonial.featured) {
              return (
                <motion.div
                  key={testimonial.name}
                  className="lg:col-span-6 bg-white rounded-xl shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="h-60 md:h-full relative">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-wrap-red text-white text-xs font-bold px-2 py-1 rounded">
                        FEATURED
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <Quote className="absolute top-4 right-6 h-8 w-8 text-wrap-red/10" />
                      <div className="flex mb-2">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-wrap-grey mb-4 italic">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                        <div className="font-semibold text-wrap-blue">{testimonial.name}</div>
                        <div className="text-sm text-wrap-grey">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }
            
            return (
              <motion.div
                key={testimonial.name}
                className="lg:col-span-3 bg-white rounded-xl shadow-md p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Quote className="absolute top-4 right-4 h-6 w-6 text-wrap-red/10" />
                <div className="flex mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-wrap-grey mb-4 text-sm italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-wrap-blue">{testimonial.name}</div>
                    <div className="text-xs text-wrap-grey">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingTestimonials;
