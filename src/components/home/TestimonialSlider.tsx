
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  image: string;
  location: string;
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Michael Johnson",
      company: "Chicago Fleet Services",
      content: "The team at Wrapping The World exceeded our expectations. Our fleet of delivery vans looks amazing, and we've already seen an increase in brand recognition throughout Chicago.",
      image: "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
      location: "Chicago, IL"
    },
    {
      id: 2,
      name: "Jennifer Williams",
      company: "Detroit Realty Group",
      content: "Our real estate signs and vehicle wraps have been turning heads all over Detroit. The quality of their work is exceptional, and their customer service is second to none.",
      image: "/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png",
      location: "Detroit, MI"
    },
    {
      id: 3,
      name: "David Miller",
      company: "Indianapolis Food Trucks",
      content: "As a food truck business, our vehicle wrap is our most important marketing tool. Wrapping The World created a design that perfectly captures our brand and attracts customers wherever we go.",
      image: "/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png",
      location: "Indianapolis, IN"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  return (
    <section className="py-16 bg-wrap-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from businesses across the Midwest who have transformed their vehicles and boosted their brand visibility.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="flex relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`w-full flex-shrink-0 transition-transform duration-500 ease-out ${
                    index === current ? 'block' : 'hidden'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="h-64 md:h-full">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-8 md:col-span-2 flex flex-col justify-center relative">
                      <Quote className="text-wrap-red/20 absolute top-4 left-4" size={60} />
                      <p className="text-wrap-grey mb-6 relative z-10">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="font-bold text-wrap-blue">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-wrap-grey">
                          {testimonial.company} - {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-wrap-blue hover:text-wrap-red transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg text-wrap-blue hover:text-wrap-red transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
