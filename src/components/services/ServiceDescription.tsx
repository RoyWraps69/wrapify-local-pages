
import React from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string;
  longDescription: string;
  images?: string[];
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({ 
  title, 
  description, 
  longDescription,
  images = [
    "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
    "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
    "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
  ]
}) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg">
        <h1 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
          {title}
        </h1>
        <p className="mb-6 text-wrap-grey text-lg">
          {description}
        </p>
      </div>
      
      {/* Service images gallery */}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md h-48 md:h-64">
              <img 
                src={image} 
                alt={`${title} example ${index + 1}`} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="prose prose-lg">
        <p className="mb-6 text-wrap-grey text-lg">
          {longDescription}
        </p>
      </div>
    </div>
  );
};

export default ServiceDescription;
