
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Users, Award, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VinylTrainingCourses: React.FC = () => {
  const courses = [
    {
      id: 'beginner',
      title: 'Beginner Workshop',
      duration: '1 Day',
      price: '$599',
      description: 'Perfect introduction to vinyl wrap techniques and materials for newcomers',
      features: [
        'Basic material handling and preparation',
        'Simple flat surface application techniques',
        'Tool usage and workplace setup',
        'Surface cleaning and preparation',
        'Small panel installation practice'
      ],
      icon: <Clock className="h-5 w-5 text-wrap-red" />,
      popular: false
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Course',
      duration: '3 Days',
      price: '$1,499',
      description: 'Detailed training covering essential skills for professional vehicle wrapping',
      features: [
        'Complete bumper and hood installations',
        'Handling complex curves and recesses',
        'Proper trimming and finishing techniques',
        'Material selection and estimation',
        'Problem-solving common issues',
        'Complete door and fender installations'
      ],
      icon: <Users className="h-5 w-5 text-wrap-red" />,
      popular: true
    },
    {
      id: 'professional',
      title: 'Professional Certification',
      duration: '5 Days',
      price: '$2,499',
      description: 'Master-level training with certification for serious professionals',
      features: [
        'Full vehicle wrap installation techniques',
        'Custom design and printed wrap handling',
        'Color change film mastery',
        'Business development and pricing strategies',
        'Advanced problem-solving techniques',
        'Professional certification exam',
        'Marketing and client acquisition training'
      ],
      icon: <Award className="h-5 w-5 text-wrap-red" />,
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
            Vinyl Wrap Training Courses
          </h2>
          <p className="text-wrap-grey text-lg">
            Whether you're just starting out or looking to enhance your professional skills, 
            we offer training options to match your goals and experience level.
          </p>
        </div>
        
        {/* Course cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <motion.div 
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full ${course.popular ? 'border-wrap-red shadow-lg' : 'border-gray-200'} overflow-hidden`}>
                {course.popular && (
                  <div className="bg-wrap-red text-white py-1.5 px-4 text-sm font-medium text-center">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-10 w-10 rounded-full bg-wrap-red/10 flex items-center justify-center">
                      {course.icon}
                    </div>
                    <div className="text-right">
                      <span className="block text-sm text-wrap-grey">{course.duration}</span>
                      <span className="text-xl font-bold text-wrap-blue">{course.price}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-wrap-blue">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium text-wrap-blue mb-2">What you'll learn:</h4>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-4 w-4 text-wrap-red mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-wrap-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link 
                    to={`/contact?subject=${course.title}%20Training%20Inquiry`}
                    className="w-full"
                  >
                    <Button 
                      className={`w-full ${course.popular ? 'bg-wrap-red hover:bg-wrap-red/90' : 'bg-wrap-blue hover:bg-wrap-blue/90'}`}
                    >
                      Reserve Your Spot
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Upcoming schedule */}
        <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-start md:items-center flex-col md:flex-row gap-6 mb-6">
            <div className="h-14 w-14 rounded-full bg-wrap-blue/10 flex items-center justify-center flex-shrink-0">
              <Calendar className="h-7 w-7 text-wrap-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-2">
                Upcoming Training Schedule
              </h3>
              <p className="text-wrap-grey">
                Our classes fill up quickly, so reserve your spot as soon as possible to guarantee availability.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-md p-4 bg-white">
              <div className="font-semibold text-wrap-blue">Beginner Workshop</div>
              <div className="text-wrap-grey mb-1">June 15, 2023</div>
              <div className="text-sm text-wrap-red">3 spots remaining</div>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4 bg-white">
              <div className="font-semibold text-wrap-blue">Comprehensive Course</div>
              <div className="text-wrap-grey mb-1">June 20-22, 2023</div>
              <div className="text-sm text-wrap-red">2 spots remaining</div>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4 bg-white">
              <div className="font-semibold text-wrap-blue">Professional Certification</div>
              <div className="text-wrap-grey mb-1">July 10-14, 2023</div>
              <div className="text-sm text-wrap-red">4 spots remaining</div>
            </div>
            
            <div className="border border-gray-200 rounded-md p-4 bg-white">
              <div className="font-semibold text-wrap-blue">Comprehensive Course</div>
              <div className="text-wrap-grey mb-1">July 24-26, 2023</div>
              <div className="text-sm text-wrap-red">6 spots remaining</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/contact?subject=Vinyl%20Training%20Schedule%20Inquiry"
              className="inline-flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
            >
              <span>View full training calendar</span>
              <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VinylTrainingCourses;
