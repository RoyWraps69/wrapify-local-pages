
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

// Import our new components
import CaseStudyHeader from '@/components/case-studies/detail/CaseStudyHeader';
import CaseStudyContent from '@/components/case-studies/detail/CaseStudyContent';
import CaseStudySidebar from '@/components/case-studies/detail/CaseStudySidebar';
import CaseStudySEO from '@/components/case-studies/detail/CaseStudySEO';
import CaseStudyDetailLoader from '@/components/case-studies/detail/CaseStudyDetailLoader';

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
    return <CaseStudyDetailLoader />;
  }
  
  return (
    <>
      <CaseStudySEO caseStudy={caseStudy}>
        <meta property="article:section" content="Case Studies" />
        <meta property="article:tag" content={`${caseStudy.industry} Wraps`} />
        <meta property="article:tag" content="Vehicle Wrapping" />
        <meta property="article:tag" content={caseStudy.location} />
      </CaseStudySEO>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <CaseStudyHeader caseStudy={caseStudy} />
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <CaseStudyContent caseStudy={caseStudy} />
              <CaseStudySidebar caseStudy={caseStudy} />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CaseStudyDetail;
