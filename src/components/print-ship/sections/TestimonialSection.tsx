
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { renderStars } from '../../testimonials/TestimonialUtils';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-wrap-blue to-wrap-blue-dark p-8 text-white flex items-center">
              <div>
                <div className="flex mb-6">
                  {renderStars(5)}
                </div>
                <blockquote className="text-xl italic font-medium mb-4">
                  "The quality of the wrap was incredible! Materials arrived on time and well-packaged. 
                  My local installer was impressed by the print quality."
                </blockquote>
                <div className="font-semibold">
                  James Wilson
                  <span className="block text-sm opacity-75 font-normal mt-1">Tesla Model 3 Owner, Colorado</span>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-wrap-blue mb-4">Hear From Our Customers</h3>
              <p className="text-wrap-grey mb-6">
                Our Print & Ship service has helped vehicle owners nationwide transform their rides with premium wraps.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-wrap-grey">Nationwide shipping to your door or preferred installer</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-wrap-grey">Same premium quality as our in-house installations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-wrap-grey">Custom design services and detailed installation instructions</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/testimonials" className="text-wrap-blue font-medium hover:text-wrap-red flex items-center">
                  Read more testimonials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
