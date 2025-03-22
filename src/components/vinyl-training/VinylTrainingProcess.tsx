
import React from 'react';
import { motion } from 'framer-motion';

const VinylTrainingProcess: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Surface Preparation',
      description: 'Learn the critical first step of proper surface cleaning, decontamination, and preparation that ensures optimal adhesion and longevity.',
      image: '/lovable-uploads/497ecda8-3e8f-4eb8-9d97-bdd37187e766.png'
    },
    {
      number: '02',
      title: 'Material Handling',
      description: 'Master the techniques for properly handling, measuring, and cutting vinyl materials to minimize waste and prevent damage.',
      image: '/lovable-uploads/367237b5-2640-4f95-87eb-9a1f9f0b6696.png'
    },
    {
      number: '03',
      title: 'Application Techniques',
      description: 'Discover professional installation methods for different surfaces, including techniques for complex curves, recesses, and edges.',
      image: '/lovable-uploads/599e2f1d-44a1-44e0-9fad-0f1e68af2fef.png'
    },
    {
      number: '04',
      title: 'Finishing & Quality Control',
      description: 'Learn proper trimming, tucking, and post-installation inspection to ensure flawless, professional-quality results.',
      image: '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png'
    }
  ];

  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            The Vinyl Wrap Installation Process
          </h2>
          <p className="text-wrap-grey text-lg">
            Our comprehensive training covers every step of the professional vinyl wrap installation process
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="md:w-1/2">
                <div className={`rounded-lg overflow-hidden shadow-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-wrap-red/20">{step.number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-wrap-blue mb-3">{step.title}</h3>
                    <p className="text-wrap-grey">{step.description}</p>
                    
                    {index === 0 && (
                      <div className="mt-4 p-4 bg-wrap-blue/10 rounded-md">
                        <p className="text-sm text-wrap-blue">
                          <strong>Pro Tip:</strong> The quality of your prep work directly affects the longevity of the wrap. 
                          We'll teach you our exclusive 5-step preparation process that ensures maximum adhesion and durability.
                        </p>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="mt-4 p-4 bg-wrap-blue/10 rounded-md">
                        <p className="text-sm text-wrap-blue">
                          <strong>Pro Tip:</strong> Our "stretch and relax" technique for complex curves prevents overstretching 
                          and minimizes the risk of lifting or failure, even in the most challenging areas.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingProcess;
