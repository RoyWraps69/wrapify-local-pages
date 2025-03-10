
import React from 'react';
import PageSEO from '@/components/seo/PageSEO';
import { 
  generateLocalBusinessSchema, 
  generateServiceSchema, 
  generateWebPageSchema,
  generateFAQSchema
} from '@/utils/seo/schemaGenerator';

interface TownPageSEOProps {
  townData: any;
  townBackgroundImage: string;
  locationFaqs: Array<{
    question: string;
    answer: React.ReactNode;
  }>;
}

const TownPageSEO: React.FC<TownPageSEOProps> = ({ 
  townData, 
  townBackgroundImage,
  locationFaqs
}) => {
  const { name, state } = townData;
  
  const stateFullName = 
    state === 'IL' ? 'Illinois' : 
    state === 'MI' ? 'Michigan' : 
    state === 'IN' ? 'Indiana' : 
    state === 'WI' ? 'Wisconsin' : state;
  
  const pageTitle = `Professional Vehicle Wraps & Ceramic Coatings in ${name}, ${stateFullName} | Wrapping The World`;
  const pageDescription = `Premium quality vehicle wraps, ceramic coatings, and paint protection film in ${name}, ${stateFullName}. Transform your business vehicles with custom wraps from the Midwest's top-rated vehicle enhancement company.`;
  const pageUrl = `/locations/${townData.id}`;
  const canonicalUrl = `https://wrappingtheworld.com/locations/${townData.id}`;
  
  const convertJSXFaqsToStringFaqs = (jsxFaqs: { question: string; answer: React.ReactNode }[]) => {
    return jsxFaqs.map(faq => ({
      question: faq.question,
      answer: typeof faq.answer === 'string' 
        ? faq.answer 
        : React.isValidElement(faq.answer) 
          ? (faq.answer.props.children || '').toString() 
          : ''
    }));
  };
  
  const faqSchema = generateFAQSchema(convertJSXFaqsToStringFaqs(locationFaqs));
  
  const localBusinessSchema = generateLocalBusinessSchema({ townName: name });
  const serviceSchema = generateServiceSchema({ 
    pageTitle: `Vehicle Wrapping Services in ${name}`, 
    pageDescription: pageDescription, 
    pageUrl: canonicalUrl, 
    townName: name 
  });
  const webPageSchema = generateWebPageSchema({
    pageTitle: pageTitle,
    pageDescription: pageDescription,
    pageUrl: canonicalUrl,
    imageUrl: townBackgroundImage,
    datePublished: "2023-01-15T08:00:00+08:00",
    dateModified: new Date().toISOString()
  });
  
  const keywords = `vehicle wraps ${name}, commercial fleet wraps ${name}, ${stateFullName} vehicle branding, car wraps ${name}, ceramic coating ${name}, paint protection film ${stateFullName}, business vehicle graphics ${name}, ${name} wrap shop, mobile advertising ${name}, premium vehicle wraps ${stateFullName}`;

  return (
    <PageSEO
      title={pageTitle}
      description={pageDescription}
      canonicalUrl={pageUrl}
      ogImage={townBackgroundImage}
      keywords={keywords}
      structuredData={[localBusinessSchema, serviceSchema, webPageSchema, faqSchema]}
      location={name}
      publishedTime="2023-01-15T08:00:00+08:00"
      modifiedTime={new Date().toISOString()}
    >
      <meta name="geo.region" content={`US-${state}`} />
      <meta name="geo.placename" content={name} />
      <meta name="geo.position" content={`${townData.latitude || 41.8781};${townData.longitude || -87.6298}`} />
      <meta name="ICBM" content={`${townData.latitude || 41.8781}, ${townData.longitude || -87.6298}`} />
    </PageSEO>
  );
};

export default TownPageSEO;
