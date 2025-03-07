import React, { useState } from 'react';
import { Star, Camera, MapPin, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  photoUrl?: string;
  source?: 'Google' | 'Yelp' | 'Facebook' | 'Website';
  date?: string;
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
    service: "Fleet Wrapping",
    source: "Google",
    date: "2023-11-15"
  },
  {
    name: "Sarah Williams",
    location: "Car Lover",
    rating: 5,
    text: "I wanted something special for my sports car and the team went beyond what I hoped for. The color change wrap not only looks amazing but the details around curves and edges are perfect. Highly recommend!",
    service: "Color Change Wrap",
    source: "Yelp",
    date: "2023-10-22",
    photoUrl: "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png"
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
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredTestimonials = filter 
    ? testimonials.filter(t => t.source === filter)
    : testimonials;

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  const getSourceIcon = (source?: 'Google' | 'Yelp' | 'Facebook' | 'Website') => {
    switch(source) {
      case 'Google':
        return <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#4285F4"/>
          </svg>
        </div>;
      case 'Yelp':
        return <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.548 9.548 0 0 1 2.008 3.144 1.072 1.072 0 0 1-.338 1.567zm.232 2.16a9.548 9.548 0 0 1-2.008 3.144 1.072 1.072 0 0 1-1.596-.206l-2.905-4.307c-.564-.83.216-1.906 1.176-1.63l4.995 1.433a1.072 1.072 0 0 1 .338 1.566zm-10.648-1.584l-4.995-1.433a1.072 1.072 0 0 1-.338-1.567 9.548 9.548 0 0 1 2.008-3.144 1.072 1.072 0 0 1 1.596.206l2.905 4.308c.564.83-.216 1.906-1.176 1.63zm-2.008 5.396a1.072 1.072 0 0 1-.799-.361 9.548 9.548 0 0 1-2.008-3.144 1.072 1.072 0 0 1 .338-1.567l4.995-1.433c.96-.276 1.74.8 1.176 1.63l-2.905 4.308a1.072 1.072 0 0 1-.797.567zm5.14-1.617l.922 5.113a1.072 1.072 0 0 1-.874 1.24 9.504 9.504 0 0 1-3.584 0 1.072 1.072 0 0 1-.874-1.24l.922-5.112a1.072 1.072 0 0 1 1.072-.892h1.344c.527 0 .97.38 1.072.892z" fill="#D32323"/>
          </svg>
        </div>;
      case 'Facebook':
        return <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
          <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
          </svg>
        </div>;
      default:
        return <ThumbsUp size={16} className="text-wrap-blue" />;
    }
  };

  return (
    <section className="py-20 bg-wrap-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Customer Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            What Do People Near {townName} Say About Our Vehicle Wraps?
          </h2>
          <p className="text-wrap-grey text-lg max-w-2xl mx-auto">
            Real feedback from real customers who found us by searching for "vehicle wraps near me" in the {townName} area.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === null 
                  ? 'bg-wrap-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('Google')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                filter === 'Google' 
                  ? 'bg-wrap-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getSourceIcon('Google')}
              <span className="ml-2">Google Reviews</span>
            </button>
            <button
              onClick={() => setFilter('Yelp')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                filter === 'Yelp' 
                  ? 'bg-wrap-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getSourceIcon('Yelp')}
              <span className="ml-2">Yelp Reviews</span>
            </button>
            <button
              onClick={() => setFilter('Facebook')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                filter === 'Facebook' 
                  ? 'bg-wrap-blue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {getSourceIcon('Facebook')}
              <span className="ml-2">Facebook Reviews</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                {testimonial.source && (
                  <div className="flex items-center gap-1">
                    {getSourceIcon(testimonial.source)}
                    <span className="text-xs text-wrap-grey">{testimonial.source}</span>
                  </div>
                )}
              </div>
              
              <p className="text-wrap-dark mb-4 flex-grow italic">"{testimonial.text}"</p>
              
              {testimonial.photoUrl && (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={testimonial.photoUrl} 
                    alt={`${testimonial.name}'s wrapped vehicle`} 
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <div className="mt-auto">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-lg text-wrap-blue">{testimonial.name}</h4>
                    <p className="text-wrap-grey text-sm flex items-center">
                      <MapPin size={14} className="mr-1" /> 
                      {testimonial.location}
                    </p>
                    {testimonial.date && (
                      <p className="text-xs text-wrap-grey/70 mt-1">
                        Posted: {new Date(testimonial.date).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-wrap-blue mb-3">
              Share Your Vehicle Wrap Experience
            </h3>
            <p className="text-wrap-grey mb-4">
              Love your new vehicle wrap? Leave a review and get <span className="font-semibold">10% OFF</span> your next service!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <a 
                href="https://g.page/review/ChicagoFleetWraps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getSourceIcon('Google')}
                <span className="ml-2">Review on Google</span>
              </a>
              <a 
                href="https://www.yelp.com/writeareview/biz/chicago-fleet-wraps" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getSourceIcon('Yelp')}
                <span className="ml-2">Review on Yelp</span>
              </a>
              <a 
                href="https://www.facebook.com/chicagofleetwraps/reviews/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {getSourceIcon('Facebook')}
                <span className="ml-2">Review on Facebook</span>
              </a>
            </div>
            <p className="text-xs text-wrap-grey mt-3">
              *Show your review to our team to claim your discount. Valid for 90 days after posting.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/testimonials" 
            className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <span>See All Customer Reviews</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
