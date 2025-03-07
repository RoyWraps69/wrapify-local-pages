
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  slug: string;
}

const FeaturedProjects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Food Truck Brand Transformation',
      category: 'Commercial Vehicle Wrap',
      location: 'Chicago, IL',
      imageUrl: '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png',
      slug: 'food-truck-brand-transformation'
    },
    {
      id: '2',
      title: 'Luxury Sports Car Color Change',
      category: 'Custom Color Change',
      location: 'Detroit, MI',
      imageUrl: '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png',
      slug: 'luxury-sports-car-color-change'
    },
    {
      id: '3',
      title: 'Delivery Fleet Graphics Program',
      category: 'Fleet Branding',
      location: 'Indianapolis, IN',
      imageUrl: '/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png',
      slug: 'delivery-fleet-graphics-program'
    },
    {
      id: '4',
      title: 'Construction Company Vehicle Branding',
      category: 'Commercial Vehicle Wrap',
      location: 'Milwaukee, WI',
      imageUrl: '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png',
      slug: 'construction-company-vehicle-branding'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-wrap-blue mb-4">
            Featured Wrap Projects
          </h2>
          <p className="text-wrap-grey max-w-2xl mx-auto">
            Browse our gallery of completed vehicle wraps and transformations, showcasing our quality and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80">
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <span className="text-xs font-medium text-wrap-red bg-white/90 px-2 py-1 rounded-sm">
                    {project.category}
                  </span>
                  <h3 className="text-white font-semibold mt-2 text-lg leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {project.location}
                  </p>
                  <Link 
                    to={`/case-studies/${project.slug}`}
                    className="inline-flex items-center text-white font-medium hover:text-wrap-red transition-colors text-sm"
                  >
                    View Project <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            to="/gallery" 
            className="bg-wrap-blue hover:bg-wrap-blue/90 text-white py-3 px-6 rounded-md font-medium transition-colors inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
