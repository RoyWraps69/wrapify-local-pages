
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
    text: "Chicago Fleet Wraps transformed our delivery vans with stunning graphics that perfectly represent our brand. The durability and quality of their work is exceptional. Our vehicles are now mobile billboards that generate new business wherever they go.",
    service: "Fleet Wrapping"
  },
  {
    name: "Sarah Williams",
    location: "Car Enthusiast",
    rating: 5,
    text: "I wanted something unique for my sports car and the team delivered beyond my expectations. The color change wrap not only looks fantastic but the attention to detail around complex curves and edges is remarkable. Highly recommend!",
    service: "Color Change Wrap"
  },
  {
    name: "David Martinez",
    location: "Marketing Director",
    rating: 5,
    text: "We wrapped our entire fleet of 12 vehicles and the consistency across all vehicles was impressive. The team was professional, efficient, and delivered on time as promised. Our brand visibility has increased significantly.",
    service: "Commercial Fleet Wraps"
  },
  {
    name: "Jennifer Reynolds",
    location: "Restaurant Owner",
    rating: 5,
    text: "My food truck's wrap has become a conversation starter wherever we park. The vibrant design captures our brand essence perfectly and has significantly boosted our visibility at events.",
    service: "Food Truck Wrapping"
  },
  {
    name: "Robert Chen",
    location: "Tech Company CEO",
    rating: 5,
    text: "As we expanded our delivery service, having consistently branded vehicles was essential. The team provided excellent service and our wrapped vans are now recognizable throughout the city.",
    service: "Fleet Branding"
  },
  {
    name: "Alicia Gomez",
    location: "Real Estate Agent",
    rating: 5,
    text: "My wrapped car has become my best marketing investment. The professional finish and attention to detail have made my vehicle stand out, and I've received numerous client inquiries directly because of it.",
    service: "Personal Vehicle Wrap"
  },
  {
    name: "Thomas Washington",
    location: "Construction Company Owner",
    rating: 5,
    text: "Our fleet of work trucks looks incredibly professional after being wrapped. The durability has been excellent even with our heavy-duty use, and the branding has helped establish our presence in competitive markets.",
    service: "Commercial Vehicle Wraps"
  },
  {
    name: "Emily Zhang",
    location: "Event Planning Director",
    rating: 5,
    text: "We wrapped our company vehicles for a major promotional campaign and the results exceeded our expectations. The wraps were eye-catching and perfectly aligned with our branding guidelines.",
    service: "Promotional Wraps"
  },
  {
    name: "Kevin Patel",
    location: "Delivery Service Owner",
    rating: 5,
    text: "After wrapping our delivery vehicles, we saw an immediate increase in brand recognition. The team was professional from design to installation, and the quality is outstanding.",
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
            Customer Experiences
          </span>
          <h2 className="section-title">
            What Our {townName} Clients Say
          </h2>
          <p className="section-subtitle">
            Discover why vehicle owners in {townName} trust Chicago Fleet Wraps for all their vehicle wrapping needs.
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
            href="https://www.google.com/search?q=chicago+fleet+wraps+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <span>See more reviews on Google</span>
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
