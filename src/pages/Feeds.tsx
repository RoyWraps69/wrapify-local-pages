
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Import feed data - these will be populated by the netlify-plugin-fetch-feeds
import cssTricksFeed from '@/data/feeds/css-tricks.json';
import netlifyFeed from '@/data/feeds/netlify.json';

const Feeds = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Web Design & Development Resources | Wrapping The World"
        pageDescription="Explore curated articles and resources on web design, development, and industry trends from top sources like CSS-Tricks and Netlify."
        pageUrl="https://wrappingtheworld.com/feeds"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
              Design & Development Resources
            </h1>
            <p className="text-wrap-grey text-lg mb-8 max-w-3xl mx-auto">
              Explore the latest web design and development articles from trusted industry sources.
            </p>
          </div>
          
          {/* CSS-Tricks Feed */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue">
                CSS-Tricks Articles
              </h2>
              <a 
                href="https://css-tricks.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wrap-blue hover:text-wrap-red flex items-center text-sm font-medium"
              >
                Visit CSS-Tricks
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cssTricksFeed.items?.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-wrap-grey text-sm mb-4 line-clamp-3">
                      {item.contentSnippet}
                    </p>
                    <div className="flex items-center text-wrap-grey/70 text-xs mb-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{new Date(item.isoDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wrap-blue hover:text-wrap-red inline-flex items-center text-sm font-medium"
                    >
                      Read Article
                      <ArrowRight className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Netlify Feed */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue">
                Netlify Blog
              </h2>
              <a 
                href="https://netlify.com/blog" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-wrap-blue hover:text-wrap-red flex items-center text-sm font-medium"
              >
                Visit Netlify Blog
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {netlifyFeed.items?.map((item, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-wrap-grey text-sm mb-4 line-clamp-3">
                      {item.contentSnippet}
                    </p>
                    <div className="flex items-center text-wrap-grey/70 text-xs mb-4">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        <span>{new Date(item.isoDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-wrap-blue hover:text-wrap-red inline-flex items-center text-sm font-medium"
                    >
                      Read Article
                      <ArrowRight className="ml-1" size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Feeds;
