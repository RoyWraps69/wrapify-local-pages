
import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

interface TestimonialSectionProps {
  townName?: string;
  testimonials?: Testimonial[];
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    name: "Michael Johnson",
    location: "Business Owner",
    rating: 5,
    text: "Chicago Fleet Wraps made our delivery vans look amazing with graphics that show our brand perfectly. The quality of their work is great. Our vans are now moving billboards that bring in new business wherever they go.",
    service: "Fleet Wrapping"
  },
  {
    name: "Sarah Williams",
    location: "Car Lover",
    rating: 5,
    text: "I wanted something special for my sports car and the team went beyond what I hoped for. The color change wrap not only looks amazing but the details around curves and edges are perfect. Highly recommend!",
    service: "Color Change Wrap"
  },
  {
    name: "David Martinez",
    location: "Marketing Director",
    rating: 5,
    text: "We wrapped our entire fleet of 12 vehicles and all of them matched perfectly. The team was professional, quick, and finished on time as promised. Our brand is now much more visible.",
    service: "Commercial Fleet Wraps"
  },
  {
    name: "Jennifer Reynolds",
    location: "Restaurant Owner",
    rating: 5,
    text: "My food truck's wrap makes people talk wherever we park. The bright design shows our brand perfectly and has really helped people notice us at events.",
    service: "Food Truck Wrapping"
  },
  {
    name: "Robert Chen",
    location: "Tech Company CEO",
    rating: 5,
    text: "As we grew our delivery service, having branded vehicles was very important. The team gave us excellent service and our wrapped vans are now easy to spot all over the city.",
    service: "Fleet Branding"
  },
  {
    name: "Alicia Gomez",
    location: "Real Estate Agent",
    rating: 5,
    text: "My wrapped car has been my best marketing spend. The professional finish and attention to detail made my car stand out, and I've gotten many client calls directly because of it.",
    service: "Personal Vehicle Wrap"
  },
  {
    name: "Thomas Washington",
    location: "Construction Company Owner",
    rating: 5,
    text: "Our work trucks look really professional after being wrapped. The wraps have lasted well even with our heavy use, and the branding has helped make us known in busy markets.",
    service: "Commercial Vehicle Wraps"
  },
  {
    name: "Emily Zhang",
    location: "Event Planning Director",
    rating: 5,
    text: "We wrapped our company cars for a big promotional campaign and the results were better than we hoped for. The wraps were eye-catching and perfectly matched our branding.",
    service: "Promotional Wraps"
  },
  {
    name: "Kevin Patel",
    location: "Delivery Service Owner",
    rating: 5,
    text: "After wrapping our delivery vehicles, we saw people recognize our brand right away. The team was professional from design to installation, and the quality is outstanding.",
    service: "Delivery Fleet Wrapping"
  }
];

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ 
  townName = 'Chicago',
  testimonials = DEFAULT_TESTIMONIALS 
}) => {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <section className="py-20 bg-wrap-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            What Customers Say
          </span>
          <h2 className="section-title">
            What Our {townName} Clients Say
          </h2>
          <p className="section-subtitle">
            See why car owners in {townName} trust Chicago Fleet Wraps for all their car wrapping needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card flex flex-col h-full"
            >
              <div className="flex items-center space-x-1 mb-3">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-wrap-dark mb-6 flex-grow">"{testimonial.text}"</p>
              <div className="mt-auto">
                <h4 className="font-medium text-lg text-wrap-blue">{testimonial.name}</h4>
                <div className="flex justify-between items-center">
                  <p className="text-wrap-grey text-sm">{testimonial.location}</p>
                  <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.google.com/search?q=chicago+fleet+wraps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <span>Find us on Google</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
