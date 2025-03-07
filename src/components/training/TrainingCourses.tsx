
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckSquare, Award, ArrowRight } from 'lucide-react';

const TrainingCourses: React.FC = () => {
  const courses = [
    {
      id: 'one-day',
      title: '1-Day Fundamentals',
      price: 750,
      duration: '1 Day (8 Hours)',
      description: 'Perfect for beginners wanting to learn the basics of vinyl wrap installation or professionals looking for a quick refresher.',
      features: [
        'Introduction to wrap materials and tools',
        'Surface preparation techniques',
        'Basic installation methods',
        'Handling simple curves and edges',
        'Practical hands-on workshop'
      ],
      bestFor: 'Beginners, DIY enthusiasts, or those considering a career in vehicle wrapping',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'three-day',
      title: '3-Day Professional',
      price: 1200,
      duration: '3 Days (24 Hours)',
      description: 'A comprehensive program that covers everything from basic to advanced techniques for professional-quality installations.',
      features: [
        'All fundamentals course content',
        'Advanced surface preparation',
        'Complex curve application techniques',
        'Handling challenging areas like bumpers',
        'Heat forming and post-heating methods',
        'Problem-solving common installation issues',
        'Multiple vehicle practice sessions'
      ],
      bestFor: 'Wrap professionals wanting to improve skills, shop owners, and serious beginners',
      color: 'bg-green-50 border-green-200',
      highlight: true
    },
    {
      id: 'five-day',
      title: '5-Day Master Certification',
      price: 1800,
      duration: '5 Days (40 Hours)',
      description: 'Our most comprehensive program for those seeking mastery and certification in vehicle wrap installation.',
      features: [
        'All professional course content',
        'Commercial fleet graphics installation',
        'Digital print handling and application',
        'Color change full vehicle wraps',
        'Advanced techniques for complex vehicles',
        'Business operations and client management',
        'Marketing and portfolio development',
        'Certification assessment'
      ],
      bestFor: 'Career professionals, shop owners, and those starting a wrap business',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Our Training Courses
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            Choose from our selection of professional wrap installation courses, 
            each designed to provide the skills you need at your specific experience level.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {courses.map((course) => (
            <motion.div 
              key={course.id}
              className={`rounded-xl border ${course.color} overflow-hidden shadow-md hover:shadow-lg transition-all ${course.highlight ? 'lg:-translate-y-4 relative z-10' : ''}`}
              variants={itemVariants}
            >
              {course.highlight && (
                <div className="bg-green-500 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-2">{course.title}</h3>
                
                <div className="text-3xl font-semibold text-wrap-blue mb-2">
                  ${course.price}
                  <span className="text-base font-normal text-wrap-grey ml-1">per student</span>
                </div>
                
                <div className="flex items-center text-wrap-grey mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                
                <p className="text-wrap-grey mb-6">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <div className="font-medium text-wrap-blue mb-2">What You'll Learn:</div>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckSquare className="h-5 w-5 text-wrap-red mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-wrap-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="font-medium text-wrap-blue mb-2">Best For:</div>
                  <p className="text-wrap-grey">{course.bestFor}</p>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className={`w-full flex justify-center items-center py-3 px-4 rounded font-medium ${
                      course.highlight 
                        ? 'bg-wrap-red hover:bg-wrap-red/90 text-white' 
                        : 'bg-wrap-blue hover:bg-wrap-blue/90 text-white'
                    } transition-colors`}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {course.highlight && (
                <div className="absolute top-[calc(100%-3rem)] right-4">
                  <Award className="h-16 w-16 text-green-500 opacity-30" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-wrap-blue mb-4">
            Custom Corporate Training
          </h3>
          <p className="text-wrap-grey mb-4">
            Need to train your entire team? We offer custom training programs for businesses 
            looking to train multiple employees. Contact us for special group rates and tailored curricula.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center text-wrap-blue hover:text-wrap-red font-medium"
          >
            Contact us for details <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrainingCourses;
