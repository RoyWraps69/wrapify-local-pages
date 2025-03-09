
import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingCourses: React.FC = () => {
  const courses = [
    {
      title: '1-Day Introduction',
      price: 750,
      description: 'Perfect for beginners looking to understand the basics of vinyl wrap installation',
      features: [
        'Fundamentals of vinyl handling',
        'Basic application techniques',
        'Simple surface preparation',
        'Tool handling and usage',
        'Practice on flat panels'
      ],
      bestFor: 'DIY enthusiasts and beginners',
      buttonText: 'Enroll for $750'
    },
    {
      title: '3-Day Comprehensive',
      price: 1200,
      description: 'A deeper dive into professional techniques for those with some experience',
      features: [
        'Advanced application methods',
        'Working with contours and recesses',
        'Handling complex surfaces',
        'Troubleshooting common issues',
        'Material selection guidance',
        'Practice on vehicle panels'
      ],
      bestFor: 'Semi-professionals and those with basic experience',
      highlighted: true,
      buttonText: 'Enroll for $1,200'
    },
    {
      title: '5-Day Professional',
      price: 1800,
      description: 'Comprehensive training for those seeking professional certification',
      features: [
        'Master-level installation techniques',
        'Full vehicle wrap installation',
        'Commercial fleet wrapping strategies',
        'Business operation guidance',
        'Marketing and pricing strategies',
        'Professional certification exam',
        'Post-training support'
      ],
      bestFor: 'Future professionals and business owners',
      buttonText: 'Enroll for $1,800'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Choose Your Training Path
          </h2>
          <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
            We offer flexible training options to match your schedule, budget, and career goals
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+13125971286"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-wrap-blue text-wrap-blue hover:bg-wrap-blue/10 transition-colors rounded-md"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call to Discuss Options
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-wrap-red text-white hover:bg-wrap-red/90 transition-colors rounded-md"
            >
              <Mail className="h-4 w-4 mr-2" />
              Request Training Info
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border ${course.highlighted ? 'border-wrap-red' : 'border-gray-200'}`}
            >
              {course.highlighted && (
                <div className="bg-wrap-red text-white text-center py-2 text-sm font-medium">
                  Most Popular Choice
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-wrap-blue mb-2">{course.title}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold text-wrap-blue">${course.price}</span>
                  <span className="text-wrap-grey ml-2">per student</span>
                </div>
                <p className="text-wrap-grey mb-4">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2 text-wrap-blue">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="text-wrap-red mr-2 h-5 w-5 flex-shrink-0" />
                        <span className="text-wrap-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-wrap-grey">Best for:</span>
                  <p className="font-medium text-wrap-blue">{course.bestFor}</p>
                </div>
                
                <Link 
                  to="/contact" 
                  className={`block w-full text-center py-3 px-4 rounded-md font-medium transition-colors ${
                    course.highlighted 
                      ? 'bg-wrap-red hover:bg-wrap-red/90 text-white' 
                      : 'bg-wrap-blue hover:bg-wrap-blue/90 text-white'
                  }`}
                >
                  {course.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
            Custom Training Programs
          </h3>
          <p className="text-wrap-grey mb-6 max-w-3xl mx-auto">
            Need specialized training for your team or company? We offer custom programs 
            tailored to your specific needs, schedule, and skill level.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-wrap-blue text-white rounded-md hover:bg-wrap-blue/90 transition-colors"
          >
            <span>Request a Custom Training Program</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrainingCourses;
