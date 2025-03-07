
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Zap, Target, Award, BarChart3 } from 'lucide-react';

const TrainingBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'Expert Instructors',
      description: 'Learn from industry veterans with over 30 years of hands-on experience in vinyl installations.',
      icon: <Users className="h-8 w-8 text-wrap-red" />
    },
    {
      title: 'Hands-On Experience',
      description: 'Our curriculum is 80% hands-on practice, ensuring you develop real-world skills through direct experience.',
      icon: <Zap className="h-8 w-8 text-wrap-red" />
    },
    {
      title: 'Small Class Sizes',
      description: 'Limited to 8 students per class, ensuring personalized attention and optimal learning environments.',
      icon: <Target className="h-8 w-8 text-wrap-red" />
    },
    {
      title: 'Industry Recognition',
      description: 'Receive a certificate that's recognized throughout the vehicle wrapping industry upon completion.',
      icon: <Award className="h-8 w-8 text-wrap-red" />
    },
    {
      title: 'Latest Techniques',
      description: 'Stay current with the newest installation methods, tools, and materials driving the industry forward.',
      icon: <GraduationCap className="h-8 w-8 text-wrap-red" />
    },
    {
      title: 'Career Advancement',
      description: 'Gain the skills needed to start your own wrap business or advance in your current professional role.',
      icon: <BarChart3 className="h-8 w-8 text-wrap-red" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Why Choose Our Training Program
          </h2>
          <p className="text-wrap-grey text-lg">
            We've trained thousands of students over three decades, developing a curriculum that combines extensive experience with the latest industry innovations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-wrap-red/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-wrap-blue mb-2">
                {benefit.title}
              </h3>
              <p className="text-wrap-grey">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-wrap-blue rounded-xl p-8 text-white max-w-4xl mx-auto overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-wrap-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              Perfecting the Art of Vehicle Wrapping for 30 Years
            </h3>
            <p className="mb-6 text-white/90">
              Since 1993, we've been at the forefront of the vehicle wrap industry, evolving our techniques as materials and technology advanced. Our training program distills three decades of experience into courses that will dramatically improve your skills and confidence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-semibold">30+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-semibold">5000+</div>
                <div className="text-sm text-white/80">Students Trained</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-semibold">95%</div>
                <div className="text-sm text-white/80">Employment Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-semibold">4.9/5</div>
                <div className="text-sm text-white/80">Student Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingBenefits;
