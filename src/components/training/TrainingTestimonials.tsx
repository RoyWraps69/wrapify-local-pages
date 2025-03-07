
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TrainingTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Jason Reynolds',
      business: 'Owner, Wrap Masters LLC',
      testimonial: "The 5-day intensive training completely transformed my approach to vehicle wrapping. The instructors were incredibly knowledgeable and patient. I've doubled my business since applying these techniques.",
      image: '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png',
      rating: 5
    },
    {
      name: 'Amanda Cortez',
      business: 'Lead Installer, GrfxWrap Studio',
      testimonial: 'I came in with basic knowledge and left with professional-level skills. The training on complex curves and recessed areas was exactly what I needed to take on more challenging projects.',
      image: '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
      rating: 5
    },
    {
      name: 'Michael Chen',
      business: 'Car Enthusiast',
      testimonial: "As a DIY enthusiast, I wanted to learn how to properly wrap my own vehicles. The 3-day course was perfect for my needs. Now I'm helping friends with their projects too!",
      image: '/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png',
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            What Our Students Say
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Don't just take our word for it - hear from professionals who have completed our training programs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -top-5 -left-2">
                <Quote className="h-10 w-10 text-wrap-red/20" />
              </div>
              
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-wrap-blue">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-wrap-grey">
                    {testimonial.business}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-wrap-grey">
                "{testimonial.testimonial}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingTestimonials;
