
import React from 'react';
import { Quote } from 'lucide-react';

interface ClientTestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const ClientTestimonial: React.FC<ClientTestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="flex items-start">
        <Quote className="text-wrap-red h-12 w-12 flex-shrink-0 mr-4 opacity-25" />
        <div>
          <p className="text-lg text-wrap-grey italic mb-6">
            "{quote}"
          </p>
          <div className="flex items-center">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <p className="font-bold text-wrap-blue">{author}</p>
              <p className="text-wrap-grey text-sm">
                {position}, {company}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
