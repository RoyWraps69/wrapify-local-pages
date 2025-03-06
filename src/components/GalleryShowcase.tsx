
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
  serviceLink?: string;
}

interface GalleryShowcaseProps {
  townName?: string;
  itemLimit?: number;
}

const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ 
  townName = 'Chicago',
  itemLimit
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      image: "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
      title: "Blue Lexus Sports Car",
      category: "Color Change Wrap",
      serviceLink: "/services/color-change-wraps"
    },
    {
      image: "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png",
      title: "Green Lightning Mustang",
      category: "Custom Design",
      serviceLink: "/services/vehicle-graphics"
    },
    {
      image: "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
      title: "Frontier Company Vans",
      category: "Commercial Fleet",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/ba4120c9-6cc5-41c6-a7e4-55afd5dab546.png",
      title: "Lulu Louise Shopping Truck",
      category: "Commercial Wrap",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png",
      title: "White Bentley Car",
      category: "Luxury Vehicle Wrap",
      serviceLink: "/services/color-change-wraps"
    },
    {
      image: "/lovable-uploads/e9a53717-c591-4709-9eb6-1f0e8b80cc25.png",
      title: "MH Equipment Service Van",
      category: "Commercial Fleet",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png",
      title: "Golden Tixx SUV",
      category: "Custom Design",
      serviceLink: "/services/vehicle-graphics"
    },
    {
      image: "/lovable-uploads/1caa5cd6-72b9-428d-a535-c34684e282f1.png",
      title: "Blue Camaro Sports Car",
      category: "Color Change Wrap",
      serviceLink: "/services/color-change-wraps"
    },
    {
      image: "/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png",
      title: "MedX Waste Van",
      category: "Commercial Fleet",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png",
      title: "Chestnut Health Box Truck",
      category: "Commercial Fleet",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png",
      title: "Silver Mercedes Car",
      category: "Luxury Vehicle Wrap",
      serviceLink: "/services/color-change-wraps"
    },
    {
      image: "/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png",
      title: "Stark Cement Truck",
      category: "Commercial Fleet",
      serviceLink: "/services/commercial-fleet-wraps"
    },
    {
      image: "/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png",
      title: "Pink Dodge Charger",
      category: "Color Change Wrap",
      serviceLink: "/services/color-change-wraps"
    }
  ];

  const categories = [...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = activeFilter 
    ? galleryItems.filter(item => item.category === activeFilter) 
    : galleryItems;
    
  const displayItems = itemLimit ? filteredItems.slice(0, itemLimit) : filteredItems;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="section-title">
            Recent Projects in {townName} and Nearby Areas
          </h2>
          <p className="section-subtitle">
            Look at our gallery of car wraps to see the quality work we do on every project.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button 
              onClick={() => setActiveFilter(null)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === null 
                  ? "bg-wrap-blue text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              )}
            >
              All Projects
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                onClick={() => setActiveFilter(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === category 
                    ? "bg-wrap-blue text-white" 
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-xl relative h-64 md:h-72 shadow-soft transition-all duration-300 hover:shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  console.log(`Failed to load image: ${target.src}`);
                  target.src = "/placeholder.svg"; // Fallback image if original fails to load
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wrap-blue/90 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-wrap-red text-white rounded-full text-xs font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-wrap-light/80 text-sm mb-3">
                  Project done in {townName} area
                </p>
                {item.serviceLink && (
                  <Link to={item.serviceLink} className="inline-flex items-center text-white hover:text-wrap-red transition-colors text-sm">
                    <span>Learn more about this service</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {itemLimit && itemLimit < galleryItems.length && (
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View All Projects
            </Link>
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center justify-center"
          >
            <span>Get a Free Car Wrap Quote</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
