
import React from 'react';
import { Link } from 'react-router-dom';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

interface GalleryShowcaseProps {
  townName?: string;
  limitToItems?: number;
}

const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({ 
  townName = 'Chicago',
  limitToItems = 6
}) => {
  const galleryItems: GalleryItem[] = [
    {
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Fleet Branding for Local Delivery Company",
      category: "Commercial Fleet"
    },
    {
      image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80",
      title: "Matte Black Sports Car Transformation",
      category: "Color Change Wrap"
    },
    {
      image: "https://images.unsplash.com/photo-1604046938596-c6448e9bd8b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Construction Company Vehicle Fleet",
      category: "Commercial Fleet"
    },
    {
      image: "https://images.unsplash.com/photo-1599256871679-6e547968db1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Chrome Blue Custom Sports Car",
      category: "Custom Design"
    },
    {
      image: "https://images.unsplash.com/photo-1596799117117-a7845fca8737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      title: "Food Truck Complete Branding",
      category: "Commercial Wrap"
    },
    {
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Satin Racing Stripes on Luxury Car",
      category: "Partial Wrap"
    },
    {
      image: "https://images.unsplash.com/photo-1542046386164-2c61ad0bf251?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Real Estate Agency Vehicle Branding",
      category: "Commercial Fleet"
    },
    {
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
      title: "Matte Purple Luxury SUV",
      category: "Color Change Wrap"
    }
  ];

  const displayItems = galleryItems.slice(0, limitToItems);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="section-title">
            Recent Projects in {townName} and Nearby Areas
          </h2>
          <p className="section-subtitle">
            Browse through our gallery of completed vehicle wraps to see the quality and creativity we bring to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item, index) => (
            <div 
              key={index}
              className="group overflow-hidden rounded-xl relative h-64 shadow-soft transition-all duration-300 hover:shadow-lg"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wrap-blue/90 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-wrap-red text-white rounded-full text-xs font-medium mb-2">
                  {item.category}
                </span>
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-wrap-light/80 text-sm">
                  Project completed in {townName} area
                </p>
              </div>
            </div>
          ))}
        </div>

        {limitToItems < galleryItems.length && (
          <div className="text-center mt-12">
            <Link to="/gallery" className="btn-primary">
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryShowcase;
