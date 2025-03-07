
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
              className="btn-contact-alt"
            >
              <Phone className="h-4 w-4" />
              Call to Discuss Options
            </a>
            
            <Link
              to="/contact"
              className="btn-contact"
            >
              <Mail className="h-4 w-4" />
              Email Training Department
            </Link>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className={`rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg ${
                course.highlighted 
                  ? 'border-2 border-wrap-red relative' 
                  : 'border border-gray-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {course.highlighted && (
                <div className="absolute top-0 right-0 bg-wrap-red text-white text-xs py-1 px-3 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-6 ${course.highlighted ? 'bg-wrap-blue/5' : 'bg-white'}`}>
                <h3 className="text-2xl font-semibold text-wrap-blue mb-2">
                  {course.title}
                </h3>
                <div className="text-3xl font-bold text-wrap-red mb-4">
                  ${course.price}
                </div>
                <p className="text-wrap-grey mb-6">
                  {course.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-wrap-blue mb-3">WHAT'S INCLUDED:</div>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-wrap-red shrink-0 mr-2 mt-0.5" />
                        <span className="text-wrap-grey text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6 p-3 bg-gray-50 rounded-md">
                  <div className="text-sm font-medium text-wrap-blue">BEST FOR:</div>
                  <div className="text-wrap-grey text-sm">{course.bestFor}</div>
                </div>
                
                <Link
                  to="/contact?subject=Training%20Enrollment"
                  className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-md transition-colors ${
                    course.highlighted
                      ? 'bg-wrap-red text-white hover:bg-wrap-red/90'
                      : 'bg-wrap-blue text-white hover:bg-wrap-blue/90'
                  }`}
                >
                  {course.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-wrap-grey mb-4">
            Can't find a suitable option? Contact us for custom training solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Link
              to="/contact"
              className="btn-contact-outline"
            >
              <Mail className="h-4 w-4" />
              Request Custom Training
            </Link>
            <a
              href="tel:+13125971286"
              className="btn-contact"
            >
              <Phone className="h-4 w-4" />
              Call Training Department
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingCourses;
