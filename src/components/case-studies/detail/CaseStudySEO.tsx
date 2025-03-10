
import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import { CaseStudy } from '@/data/caseStudies';
import { generateCaseStudyPageSchemas } from '@/utils/seo/schemas/caseStudySchema';

interface CaseStudySEOProps {
  caseStudy: CaseStudy;
  children?: React.ReactNode;
}

const CaseStudySEO: React.FC<CaseStudySEOProps> = ({ caseStudy, children }) => {
  // Generate all structured data for this case study
  const structuredData = generateCaseStudyPageSchemas(caseStudy);
  
  // Generate page title, description and keywords for SEO
  const pageTitle = `${caseStudy.title} | Wrapping The World Case Study`;
  const pageDescription = caseStudy.description;
  const keywords = `vehicle wrap case study, ${caseStudy.industry} vehicle branding, fleet graphics case study, ${caseStudy.location} vehicle wraps, commercial wrap success story, custom vehicle graphics, ${caseStudy.industry} branding`;
  
  return (
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
      {children}
    </PageSEO>
  );
};

export default CaseStudySEO;
