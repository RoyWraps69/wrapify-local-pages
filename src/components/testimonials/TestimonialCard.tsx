
import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  renderStars: (rating: number) => React.ReactNode;
  getSourceIcon: (source?: 'Google' | 'Yelp' | 'Facebook' | 'Website') => React.ReactNode;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  testimonial, 
  renderStars, 
  getSourceIcon 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
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
  );
};

export default TestimonialCard;
