
import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Lightbulb, Users, TrendingUp, Wrench, Award } from 'lucide-react';

const VinylTrainingAdvantages: React.FC = () => {
  const advantages = [
    {
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with 20+ years of experience in the vinyl wrap industry',
      icon: <HeartHandshake className="h-6 w-6 text-white" />
    },
    {
      title: 'Hands-On Experience',
      description: 'Practice on actual vehicles with premium vinyl materials and professional-grade tools',
      icon: <Wrench className="h-6 w-6 text-white" />
    },
    {
      title: 'Small Class Sizes',
      description: 'Maximum of 6 students per class ensures personalized attention and guidance',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'Career Opportunities',
      description: 'Enter a growing industry with high demand for skilled installers and profitable business potential',
      icon: <TrendingUp className="h-6 w-6 text-white" />
    },
    {
      title: 'Exclusive Techniques',
      description: 'Master proprietary methods developed over decades that solve common installation challenges',
      icon: <Lightbulb className="h-6 w-6 text-white" />
    },
    {
      title: 'Recognized Certification',
      description: 'Receive an industry-respected certification that demonstrates your professional expertise',
      icon: <Award className="h-6 w-6 text-white" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Why Train With Us?
          </h2>
          <p className="text-wrap-grey text-lg">
            Our vinyl wrap training program offers unique advantages that prepare you for success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="mb-4 h-12 w-12 rounded-lg bg-gradient-to-br from-wrap-red to-wrap-red/80 flex items-center justify-center">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-2">
                {advantage.title}
              </h3>
              <p className="text-wrap-grey">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 relative overflow-hidden rounded-xl shadow-xl">
          <div className="absolute inset-0 bg-wrap-blue/90 z-10"></div>
          <img 
            src="/lovable-uploads/ee67b247-2078-4b74-b272-25c84ef8f0cf.png" 
            alt="Professional vinyl wrap installation" 
            className="w-full h-auto object-cover object-center"
          />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-4 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-3">
                Transform Your Career
              </h3>
              <p className="text-white/90 text-lg mb-6">
                The vehicle wrap industry is projected to grow to $10.8 billion by 2025. 
                Position yourself for success with professional training that sets you apart.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-white">20%</div>
                  <div className="text-white/80 text-sm">Annual Industry Growth</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-white">$2,500+</div>
                  <div className="text-white/80 text-sm">Average Project Value</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <div className="text-2xl font-bold text-white">72%</div>
                  <div className="text-white/80 text-sm">Profit Margin Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingAdvantages;
