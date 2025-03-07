
import React from 'react';

interface TownFeaturedProjectsProps {
  townName: string;
  featuredProjects: Array<{
    image: string;
    title: string;
    description: string;
  }>;
}

const TownFeaturedProjects: React.FC<TownFeaturedProjectsProps> = ({ 
  townName, 
  featuredProjects 
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-semibold text-center text-wrap-blue mb-6">
          Our Work in {townName}
        </h2>
        <p className="text-center text-wrap-grey max-w-2xl mx-auto mb-10">
          Take a look at some of our recent vehicle transformation projects in {townName} and surrounding areas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group overflow-hidden rounded-xl shadow-md relative">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TownFeaturedProjects;
