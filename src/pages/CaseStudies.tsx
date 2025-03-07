
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Phone, FileText, TrendingUp, Truck, MapPin } from 'lucide-react';

// Import case studies components
import FeaturedCaseStudy from '@/components/case-studies/FeaturedCaseStudy';
import CaseStudyList from '@/components/case-studies/CaseStudyList';
import CaseStudiesHeader from '@/components/case-studies/CaseStudiesHeader';
import IndustrySolutions from '@/components/case-studies/IndustrySolutions';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Featured case study data
  const featuredCaseStudy = {
    title: "Fleet Branding Transformation for National Logistics Company",
    description: "How we helped a national logistics company rebrand their entire fleet of 120+ vehicles across 15 states, resulting in 43% increased brand recognition.",
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    industry: "Logistics",
    location: "Nationwide",
    results: "43% increased brand recognition",
    slug: "national-logistics-fleet-branding"
  };

  // List of case studies
  const caseStudies = [
    {
      id: "cs1",
      title: "Commercial Fleet Branding for Midwest HVAC Provider",
      description: "Complete fleet branding solution for 35 service vehicles, creating consistent brand presence and generating new customer leads.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Home Services",
      location: "Chicago, IL",
      results: "28% increase in service calls",
      slug: "midwest-hvac-fleet-branding"
    },
    {
      id: "cs2",
      title: "Food Truck Design & Wrap for Fusion Cuisine Startup",
      description: "Eye-catching food truck wrap that turns heads and effectively communicates menu offerings and brand personality.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Food & Beverage",
      location: "Detroit, MI",
      results: "52% increase in daily customers",
      slug: "fusion-cuisine-food-truck"
    },
    {
      id: "cs3",
      title: "Luxury Vehicle Protection for High-End Car Dealership",
      description: "Premium paint protection film and ceramic coating for a dealership's inventory of luxury vehicles, enhancing appearance and protection.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Automotive",
      location: "Indianapolis, IN",
      results: "Preserved value for 200+ vehicles",
      slug: "luxury-dealer-protection"
    },
    {
      id: "cs4",
      title: "Nationwide Fleet Rebrand for Telecommunications Provider",
      description: "Coordinated nationwide rebranding of 250+ vehicles across 30 states, ensuring consistent brand implementation under tight deadlines.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Telecommunications",
      location: "Nationwide",
      results: "Completed 3 weeks ahead of schedule",
      slug: "telecom-fleet-rebrand"
    },
    {
      id: "cs5",
      title: "Real Estate Company Vehicle Branding Program",
      description: "Consistent, professional vehicle branding for a growing real estate firm with 45 agent vehicles, enhancing corporate identity.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Real Estate",
      location: "Milwaukee, WI",
      results: "35% increased brand recognition",
      slug: "real-estate-vehicle-branding"
    },
    {
      id: "cs6",
      title: "Construction Fleet Identification & Safety Program",
      description: "Combined branding and safety elements for a construction company's fleet of 85 vehicles, improving site visibility and safety.",
      image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      industry: "Construction",
      location: "Grand Rapids, MI",
      results: "23% reduction in site accidents",
      slug: "construction-fleet-safety"
    }
  ];

  // Industry solutions
  const industries = [
    {
      name: "Construction",
      icon: <Building className="h-10 w-10 text-wrap-red mb-4" />,
      description: "Durable wraps for construction fleets that enhance visibility and branding while withstanding tough conditions.",
      link: "/industries/construction"
    },
    {
      name: "Food & Beverage",
      icon: <Truck className="h-10 w-10 text-wrap-red mb-4" />,
      description: "Eye-catching food truck and delivery vehicle wraps that attract customers and build brand recognition.",
      link: "/industries/food-beverage"
    },
    {
      name: "Real Estate",
      icon: <MapPin className="h-10 w-10 text-wrap-red mb-4" />,
      description: "Professional vehicle branding for real estate agents and companies that builds trust and visibility.",
      link: "/industries/real-estate"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Case Studies | Commercial Fleet Branding Success Stories</title>
        <meta 
          name="description" 
          content="Explore our vehicle wrap case studies showcasing successful fleet branding, commercial wrap projects, and vehicle transformation stories across various industries."
        />
        <link rel="canonical" href="https://wrappingtheworld.com/case-studies" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap Case Studies | Commercial Fleet Branding Success Stories"
        pageDescription="Explore our vehicle wrap case studies showcasing successful fleet branding, commercial wrap projects, and vehicle transformation stories across various industries."
        pageUrl="https://wrappingtheworld.com/case-studies"
      />
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <CaseStudiesHeader />
        
        {/* Featured Case Study */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-wrap-blue mb-8">
              Featured Case Study
            </h2>
            
            <FeaturedCaseStudy {...featuredCaseStudy} />
          </div>
        </section>
        
        {/* Case Studies List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-wrap-blue mb-8">
              Recent Case Studies
            </h2>
            
            <CaseStudyList caseStudies={caseStudies} />
            
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                Discuss Your Project <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Industry Solutions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-wrap-blue text-center mb-12">
              Industry-Specific Solutions
            </h2>
            
            <IndustrySolutions industries={industries} />
            
            <div className="text-center mt-12">
              <p className="text-wrap-grey max-w-2xl mx-auto mb-6">
                Don't see your industry? We work with businesses across all sectors to create custom vehicle branding and protection solutions.
              </p>
              <Link 
                to="/contact"
                className="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-3 rounded-md transition-colors inline-flex items-center"
              >
                Contact Us For Your Industry <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* ROI & Metrics Section */}
        <section className="py-16 bg-wrap-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
                Measuring Success
              </h2>
              <p className="text-xl mb-12">
                We track key metrics to help you understand the return on investment from your vehicle wrap and fleet branding projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-wrap-blue">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Brand Visibility</h3>
                  <p className="text-white/80">
                    Measured impressions, reach, and recognition metrics for your wrapped vehicles.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-wrap-blue">
                    <Phone size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Lead Generation</h3>
                  <p className="text-white/80">
                    Track inquiries, calls, and website visits attributed to your vehicle branding.
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-8">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-wrap-blue">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ROI Reporting</h3>
                  <p className="text-white/80">
                    Detailed reporting to understand the financial impact of your vehicle wrap investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-wrap-blue mb-6">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-xl text-wrap-grey mb-8">
                Contact our team today to discuss your vehicle wrap project and join our growing list of success stories.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact"
                  className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Request a Consultation
                </Link>
                <a 
                  href="tel:+13125971286"
                  className="flex items-center gap-2 bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-wrap-blue/90 transition-colors"
                >
                  <Phone size={20} />
                  <span>312-597-1286</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudies;
