
import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  const benefits = [
    'Premium 3M and Avery vinyl materials',
    'Professional installation by certified experts',
    '5-year warranty on all vehicle wraps',
    'Fast turnaround times with flexible scheduling',
    'Serving the entire Midwest region',
    'Outstanding customer support'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-wrap-blue mb-4">
              Midwest's Premier Vehicle Wrap Specialists
            </h2>
            <p className="text-wrap-grey mb-6">
              At Wrapping The World, we've built our reputation on delivering extraordinary vehicle wraps and graphic solutions. 
              With over 15 years of industry experience, we combine artistic design with precision installation to transform 
              ordinary vehicles into powerful marketing tools and stunning visual statements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="text-wrap-red mt-1 flex-shrink-0" size={18} />
                  <span className="ml-2 text-wrap-grey">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Link
              to="/about"
              className="bg-wrap-blue hover:bg-wrap-blue/90 text-white py-3 px-6 rounded-md font-medium transition-colors inline-block"
            >
              Learn More About Us
            </Link>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png"
                alt="Professional vehicle wrap installation"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-md shadow max-w-xs">
                <p className="text-wrap-blue font-semibold text-sm">
                  "Our team of certified installers ensures every wrap is perfect down to the last detail."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
