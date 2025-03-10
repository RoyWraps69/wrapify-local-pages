
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { caseStudies, CaseStudy } from '@/data/caseStudies';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import CaseStudyContent from '@/components/case-studies/detail/CaseStudyContent';
import CaseStudySidebar from '@/components/case-studies/detail/CaseStudySidebar';
import CaseStudySEO from '@/components/case-studies/detail/CaseStudySEO';
import CaseStudyDetailLoader from '@/components/case-studies/detail/CaseStudyDetailLoader';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    // Simulate loading time (remove in production)
    const timer = setTimeout(() => {
      if (slug) {
        const foundCaseStudy = caseStudies.find(cs => cs.slug === slug);
        
        if (foundCaseStudy) {
          setCaseStudy(foundCaseStudy);
          setLoading(false);
        } else {
          // Case study not found, redirect to case studies listing
          navigate('/case-studies');
        }
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [slug, navigate]);

  if (loading) {
    return <CaseStudyDetailLoader />;
  }

  if (!caseStudy) {
    return null; // This should never happen due to the redirect, but TypeScript needs it
  }

  return (
    <CaseStudySEO caseStudy={caseStudy}>
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wrap-blue mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-wrap-grey mb-4">
              {caseStudy.description}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-wrap-blue/10 text-wrap-blue px-3 py-1 rounded-full text-sm">
                {caseStudy.industry}
              </span>
              <span className="bg-wrap-red/10 text-wrap-red px-3 py-1 rounded-full text-sm">
                {caseStudy.service}
              </span>
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {caseStudy.location}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <CaseStudyContent caseStudy={caseStudy} />
            <CaseStudySidebar caseStudy={caseStudy} />
          </div>
        </div>
      </main>
      
      <Footer />
    </CaseStudySEO>
  );
};

export default CaseStudyDetail;
