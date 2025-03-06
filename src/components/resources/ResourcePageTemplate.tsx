
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ResourcePageTemplateProps {
  title: string;
  description: string;
  content: string;
  seoTitle: string;
  seoDescription: string;
  relatedLinks?: Array<{
    to: string;
    label: string;
  }>;
}

const ResourcePageTemplate: React.FC<ResourcePageTemplateProps> = ({
  title,
  description,
  content,
  seoTitle,
  seoDescription,
  relatedLinks = []
}) => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle={seoTitle}
        pageDescription={seoDescription}
        pageUrl={`https://wrappingtheworld.com${window.location.pathname}`}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
              {title}
            </h1>
            <p className="text-wrap-grey text-xl mb-8">
              {description}
            </p>
            
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            
            {relatedLinks.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
                  Related Resources
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.to} 
                        className="flex items-center text-wrap-blue hover:text-wrap-red transition-colors"
                      >
                        <ArrowRight className="mr-2 h-4 w-4" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
                Need More Information?
              </h3>
              <p className="text-wrap-grey mb-6">
                Contact our team for personalized assistance with your vehicle wrap or protection needs.
              </p>
              <Link to="/contact">
                <Button>Contact Us Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResourcePageTemplate;
