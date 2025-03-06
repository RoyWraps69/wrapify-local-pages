
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEOSchema';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTASection from '@/components/CTASection';

interface CaseStudy {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  logo: string;
  industry: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'local-plumbing-fleet',
    title: 'How City Plumbing Increased Service Calls by 43% with Fleet Wraps',
    excerpt: 'This Chicago-based plumbing company transformed their service vans with eye-catching wraps featuring their brand colors, contact information, and service highlights.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'Plumbing Services',
    results: [
      'Increased service calls by 43% within 6 months',
      'Improved brand recognition in local service area',
      '18% reduction in customer acquisition costs'
    ]
  },
  {
    id: 'food-truck-rebrand',
    title: 'Street Eats Food Truck: Complete Rebrand & Wrap Case Study',
    excerpt: "See how we helped Street Eats Food Truck stand out in Chicago's competitive food scene with a vibrant, attention-grabbing full vehicle wrap.",
    image: 'https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'Food & Beverage',
    results: [
      'Social media mentions increased 215%',
      'Featured in 3 local food publications',
      'Sales increased 37% year-over-year'
    ]
  },
  {
    id: 'luxury-car-ppf',
    title: 'Protecting a $300,000 Luxury Vehicle with Premium Paint Protection Film',
    excerpt: 'Learn how we safeguarded this high-end sports car with invisible protection, preserving its perfect finish while allowing the original color to shine.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'High-End Automotive',
    results: [
      'Full front-end protection from road debris',
      'UV protection preventing color fade',
      'Maintained value for future resale'
    ]
  },
  {
    id: 'real-estate-fleet',
    title: 'Metro Realty Group: Branded Fleet Strategy & Implementation',
    excerpt: 'Discover how we created a coordinated fleet branding strategy for this growing real estate firm, helping their agents stand out in competitive neighborhoods.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'Real Estate',
    results: [
      '28% increase in prospect inquiries',
      'Consistent brand presentation across 15 vehicles',
      'Agents report higher perceived professionalism'
    ]
  },
  {
    id: 'construction-fleet-branding',
    title: "Unified Brand Identity: Elite Construction's Fleet Transformation",
    excerpt: 'How we helped this construction company create a professional, cohesive look across their diverse fleet of vehicles, from pickups to equipment trucks.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'Construction',
    results: [
      'Successfully branded 22 different vehicles',
      'Won 3 major commercial contracts attributed to improved brand presence',
      'Increased employee pride and satisfaction'
    ]
  },
  {
    id: 'sports-car-color-change',
    title: 'From Silver to Satin Blue: A Dramatic Color Change Transformation',
    excerpt: "Follow the journey of this sports car's complete makeover with a premium satin blue vinyl wrap, dramatically changing its appearance without affecting resale value.",
    image: 'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    logo: 'https://via.placeholder.com/150x60',
    industry: 'Personal Vehicles',
    results: [
      'Complete color transformation without permanent changes',
      'Added paint protection and UV resistance',
      'Custom accents on mirrors and trim for unique look'
    ]
  }
];

const CaseStudies = () => {
  return (
    <>
      <SEO 
        townName="Chicago"
        pageTitle="Vehicle Wrap & Protection Case Studies | Wrapping The World"
        pageDescription="See real results from our vehicle wrap and protection projects. Browse our case studies featuring commercial fleet branding, color change wraps, ceramic coatings, and paint protection film installations."
        pageUrl="https://wrappingtheworld.com/case-studies"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
              Vehicle Wrap & Protection Case Studies
            </h1>
            <p className="text-wrap-grey text-lg mb-8 max-w-3xl mx-auto">
              Explore real-world examples of our vehicle transformation projects. These case studies showcase our expertise in commercial fleet branding, custom vehicle wraps, ceramic coatings, and paint protection film installations.
            </p>
          </div>
          
          {/* Featured Case Study */}
          <div className="bg-wrap-blue rounded-xl overflow-hidden text-white mb-16">
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-3 h-full">
                <img 
                  src={caseStudies[0].image} 
                  alt={caseStudies[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-wrap-red/20 text-wrap-red rounded-full text-sm font-medium mb-4">
                  Featured Case Study
                </span>
                <h2 className="text-3xl font-serif font-semibold mb-4">
                  {caseStudies[0].title}
                </h2>
                <p className="text-wrap-light/90 mb-6 text-lg">
                  {caseStudies[0].excerpt}
                </p>
                <div className="mb-6">
                  <p className="text-wrap-light font-medium mb-2">Results:</p>
                  <ul className="space-y-2">
                    {caseStudies[0].results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-wrap-red mr-2">✓</span>
                        <span className="text-wrap-light/90">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to={`/case-studies/${caseStudies[0].id}`} className="btn-secondary inline-flex items-center justify-center">
                  Read Full Case Study
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {caseStudies.slice(1).map((study) => (
              <div key={study.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs font-medium">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 line-clamp-2">
                    {study.title}
                  </h3>
                  <p className="text-wrap-grey text-sm mb-4 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <div className="mb-4">
                    <p className="text-wrap-blue font-medium text-sm mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {study.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-start text-xs text-wrap-grey">
                          <span className="text-wrap-red mr-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={`/case-studies/${study.id}`} className="text-wrap-blue hover:text-wrap-red inline-flex items-center text-sm font-medium">
                    View Project Details
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Industry Solutions Section */}
          <div className="bg-wrap-blue/5 rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6 text-center">
                Industry-Specific Vehicle Wrap Solutions
              </h2>
              <p className="text-wrap-grey mb-8 text-center">
                We understand different industries have unique vehicle branding requirements. Explore our tailored solutions for these sectors:
              </p>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Link to="/industries/home-services" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Home Services</h3>
                  <p className="text-xs text-wrap-grey mb-2">HVAC, Plumbing, Electrical</p>
                </Link>
                <Link to="/industries/food-beverage" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Food & Beverage</h3>
                  <p className="text-xs text-wrap-grey mb-2">Food Trucks, Delivery, Catering</p>
                </Link>
                <Link to="/industries/construction" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Construction</h3>
                  <p className="text-xs text-wrap-grey mb-2">Contractors, Equipment, Services</p>
                </Link>
                <Link to="/industries/real-estate" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Real Estate</h3>
                  <p className="text-xs text-wrap-grey mb-2">Agents, Brokers, Property Management</p>
                </Link>
                <Link to="/industries/retail" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Retail</h3>
                  <p className="text-xs text-wrap-grey mb-2">Delivery, Mobile Stores, Promotions</p>
                </Link>
                <Link to="/industries/automotive" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="font-medium text-wrap-blue mb-2">Automotive</h3>
                  <p className="text-xs text-wrap-grey mb-2">Dealerships, Auto Services, Rentals</p>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Client Testimonial */}
          <div className="bg-wrap-blue rounded-xl p-8 md:p-12 text-white mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-wrap-red/70 mx-auto mb-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
              </svg>
              <blockquote className="text-xl md:text-2xl font-serif italic text-wrap-light/90 mb-8">
                Wrapping The World completely transformed our fleet of service vehicles. The quality of their work is exceptional, and the impact on our business has been immediate and significant. Our branded trucks now generate calls wherever they go.
              </blockquote>
              <div>
                <p className="font-medium text-wrap-light">Michael Richardson</p>
                <p className="text-wrap-light/70 text-sm">CEO, City Plumbing Services</p>
              </div>
            </div>
          </div>
        </div>
        
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
