
import React from 'react';
import { motion } from 'framer-motion';

const TrainingInstructors: React.FC = () => {
  const instructors = [
    {
      name: 'Mike Johnson',
      title: 'Lead Instructor, Master Wrapper',
      experience: '30+ years experience',
      bio: "Mike has been wrapping vehicles since vinyl wraps first entered the market. He's worked with major automotive brands and has wrapped everything from luxury sports cars to commercial fleet vehicles.",
      image: '/lovable-uploads/22a51c46-7b31-4b55-8ad9-fa67c3bd74fc.png'
    },
    {
      name: 'Sarah Williams',
      title: 'Senior Instructor, Design Specialist',
      experience: '15+ years experience',
      bio: 'With a background in graphic design and vehicle wrapping, Sarah specializes in teaching the intersection of design and installation techniques for maximum visual impact.',
      image: '/lovable-uploads/95d134ce-6de1-4844-8afe-676d99851eda.png'
    },
    {
      name: 'David Martinez',
      title: 'Technical Instructor',
      experience: '12+ years experience',
      bio: "David's expertise is in complex installations and problem-solving. He specializes in teaching students how to handle challenging surfaces and unusual vehicle configurations.",
      image: '/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png'
    }
  ];

  return (
    <section className="py-16 bg-wrap-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Learn From Industry Experts
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Our instructors bring decades of real-world experience to the classroom,
            providing insights that can only be gained through years of professional practice.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wrap-blue mb-1">
                  {instructor.name}
                </h3>
                <div className="text-wrap-red font-medium mb-1">
                  {instructor.title}
                </div>
                <div className="text-sm text-wrap-grey mb-4">
                  {instructor.experience}
                </div>
                <p className="text-wrap-grey">
                  {instructor.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingInstructors;
