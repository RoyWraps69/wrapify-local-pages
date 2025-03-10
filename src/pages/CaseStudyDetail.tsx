
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, BarChart, Phone, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import { generateCaseStudyPageSchemas } from '@/utils/seo/schemas/caseStudySchema';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the case study by slug
    const foundCaseStudy = caseStudies.find(study => study.slug === slug);
    
    if (foundCaseStudy) {
      setCaseStudy(foundCaseStudy);
      setLoading(false);
    } else {
      // If not found, wait a moment then navigate to case studies
      setTimeout(() => {
        navigate('/case-studies');
      }, 100);
    }
  }, [slug, navigate]);
  
  if (loading || !caseStudy) {
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-t-wrap-red border-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-wrap-grey">Loading case study...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  // Generate all structured data for this case study
  const structuredData = generateCaseStudyPageSchemas(caseStudy);
  
  // Generate page title, description and keywords for SEO
  const pageTitle = `${caseStudy.title} | Wrapping The World Case Study`;
  const pageDescription = caseStudy.description;
  const keywords = `vehicle wrap case study, ${caseStudy.industry} vehicle branding, fleet graphics case study, ${caseStudy.location} vehicle wraps, commercial wrap success story, custom vehicle graphics, ${caseStudy.industry} branding`;
  
  return (
    <>
      <PageSEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={`/case-studies/${caseStudy.slug}`}
        ogImage={caseStudy.image}
        keywords={keywords}
        structuredData={structuredData}
        publishedTime={new Date(caseStudy.completionDate).toISOString()}
        modifiedTime={new Date().toISOString()}
        author="Wrapping The World"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: caseStudy.title, url: `/case-studies/${caseStudy.slug}` }
        ]}
      >
        <meta property="article:section" content="Case Studies" />
        <meta property="article:tag" content={`${caseStudy.industry} Wraps`} />
        <meta property="article:tag" content="Vehicle Wrapping" />
        <meta property="article:tag" content={caseStudy.location} />
      </PageSEO>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-wrap-blue text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Link 
                to="/case-studies"
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={18} className="mr-2" />
                Back to Case Studies
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8">
                {caseStudy.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 p-4 rounded-lg">
                  <span className="flex items-center text-white/80 text-sm mb-1">
                    <Briefcase size={16} className="mr-2" />
                    Industry
                  </span>
                  <span className="font-medium">{caseStudy.industry}</span>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <span className="flex items-center text-white/80 text-sm mb-1">
                    <MapPin size={16} className="mr-2" />
                    Location
                  </span>
                  <span className="font-medium">{caseStudy.location}</span>
                </div>
                
                <div className="bg-white/10 p-4 rounded-lg">
                  <span className="flex items-center text-white/80 text-sm mb-1">
                    <BarChart size={16} className="mr-2" />
                    Results
                  </span>
                  <span className="font-medium text-wrap-red">{caseStudy.results}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="mb-8">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
                </div>
                
                {/* Image Gallery */}
                {caseStudy.gallery && caseStudy.gallery.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-bold text-wrap-blue mb-6">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {caseStudy.gallery.map((image, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-md">
                          <img 
                            src={image} 
                            alt={`${caseStudy.title} - Gallery image ${idx + 1}`}
                            className="w-full h-auto object-cover aspect-video"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                  <h3 className="text-xl font-bold text-wrap-blue mb-4">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-wrap-grey">Client</h4>
                      <p>{caseStudy.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-wrap-grey">Completion Date</h4>
                      <p>{new Date(caseStudy.completionDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long'
                      })}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-wrap-grey">Location</h4>
                      <p>{caseStudy.location}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-wrap-grey">Industry</h4>
                      <p>{caseStudy.industry}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-wrap-blue text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Ready to discuss your project?</h3>
                  <p className="mb-6">Contact our team today to get started on your vehicle wrap or fleet branding project.</p>
                  
                  <div className="space-y-4">
                    <Link 
                      to="/contact"
                      className="w-full bg-white text-wrap-blue py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      Request a Consultation <ArrowRight size={18} className="ml-2" />
                    </Link>
                    
                    <a 
                      href="tel:+13125971286"
                      className="w-full bg-wrap-red text-white py-3 px-4 rounded-md font-medium flex items-center justify-center hover:bg-wrap-red/90 transition-colors"
                    >
                      <Phone size={18} className="mr-2" />
                      Call 312-597-1286
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
