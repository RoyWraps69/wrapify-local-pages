
import React from 'react';
import { MapPin, Camera, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TownOverviewProps {
  townName: string;
  stateFullName: string;
  description: string;
  population: number;
  businessCount: number;
}

const TownOverview: React.FC<TownOverviewProps> = ({
  townName,
  stateFullName,
  description,
  population,
  businessCount
}) => {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        Where can I find quality vehicle wraps near {townName}, {stateFullName}?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        <span className="text-wrap-blue font-bold">WRAPPING THE WORLD</span> provides premium vehicle wrapping and protection services to businesses and individuals throughout <span className="font-medium">{townName}, {stateFullName}</span> and nearby areas. {description}
      </p>
      
      {/* Customer Testimonial Highlight */}
      <div className="bg-gray-50 p-5 border-l-4 border-wrap-blue rounded-r-lg mb-8">
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-wrap-grey text-sm">Recent {townName} Customer</span>
        </div>
        <p className="italic text-wrap-grey mb-2">
          "I searched for 'vehicle wraps near me' and found Wrapping The World. Their service was excellent and my van looks amazing. Highly recommend to anyone in the {townName} area!"
        </p>
        <p className="text-sm text-wrap-blue font-medium">
          — Jason Miller, Local Business Owner in {townName}
        </p>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        Why do {townName} businesses need vehicle wraps?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        With a population of {population.toLocaleString()} and approximately {businessCount.toLocaleString()} local businesses, {townName} is a thriving community with growing demand for professional vehicle branding and protection services. Local businesses that invest in vehicle wraps gain a significant competitive advantage through increased brand visibility.
      </p>
      
      {/* Recent Local Projects */}
      <div className="mb-8">
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 flex items-center">
          <Camera className="mr-2 h-5 w-5 text-wrap-red" />
          Recent Vehicle Wrap Projects in {townName}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png"
              alt={`Recent vehicle wrap in ${townName}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png"
              alt={`Commercial wrap in ${townName}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden relative group">
            <img
              src="/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png"
              alt={`Vehicle wrap project in ${townName}`}
              className="w-full h-full object-cover"
            />
            <Link
              to="/gallery"
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="text-white text-sm font-medium">View All</span>
            </Link>
          </div>
        </div>
        <p className="text-sm text-wrap-grey mt-2">
          <MapPin className="inline-block h-4 w-4 mr-1" />
          Projects completed for customers near {townName}, {stateFullName}
        </p>
      </div>
      
      <h2 className="text-2xl font-serif font-semibold text-wrap-blue mt-8 mb-4">
        What vehicle wrap services are available near {townName}?
      </h2>
      
      <p className="text-wrap-grey mb-6">
        Our services near {townName} include commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, and custom vehicle graphics. We understand the specific needs of {townName} businesses and provide tailored solutions that help you stand out in your local market.
      </p>
      
      <div className="bg-gray-50 p-5 rounded-lg mb-6">
        <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 flex items-center">
          <ThumbsUp className="mr-2 h-5 w-5 text-wrap-red" />
          Share Your Vehicle Wrap Experience in {townName}
        </h3>
        <p className="text-wrap-grey mb-4">
          Had your vehicle wrapped by us in {townName}? We'd love to see it! Share your photos and experience:
        </p>
        <ul className="list-disc pl-5 text-wrap-grey space-y-2">
          <li>Tag us on Instagram with #WrappingTheWorld{townName.replace(/\s+/g, '')}</li>
          <li>Check in on Facebook when you visit our shop for a 10% discount</li>
          <li>Submit your photos for our gallery and get featured!</li>
        </ul>
      </div>
      
      <p className="text-wrap-grey mb-6">
        If you're searching for "vehicle wraps near me" in the {townName} area, we offer convenient consultations, professional design services, and expert installation of all types of vehicle graphics and protection films.
      </p>
    </div>
  );
};

export default TownOverview;
