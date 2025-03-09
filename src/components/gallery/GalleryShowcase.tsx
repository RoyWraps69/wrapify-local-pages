import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';
import PhotoSubmissionCTA from './PhotoSubmissionCTA';
import { GalleryShowcaseProps, GalleryItem } from './types';

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
      serviceLink: "/services/vehicle-graphics",
      isCustomerSubmission: true,
      customerName: "Alex Chen",
      location: "Naperville, IL"
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
      serviceLink: "/services/color-change-wraps",
      isCustomerSubmission: true,
      customerName: "Jessica Park",
      location: "Oak Brook, IL"
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
  
  const filters = [
    { id: null, name: 'All Projects' },
    ...categories.map(category => ({ id: category, name: category })),
    { id: 'customer', name: 'Customer Submissions' }
  ];
  
  const filteredItems = activeFilter === 'customer'
    ? galleryItems.filter(item => item.isCustomerSubmission)
    : activeFilter 
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
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Recent Vehicle Wrap Projects in {townName} and Nearby Areas
          </h2>
          <p className="text-wrap-grey max-w-2xl mx-auto">
            Browse our gallery of recent vehicle wraps including customer submissions from {townName} and surrounding communities.
          </p>
          
          <GalleryFilters 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            filters={filters} 
          />
        </div>

        <GalleryGrid items={displayItems} />

        <PhotoSubmissionCTA className="mt-12" />

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
