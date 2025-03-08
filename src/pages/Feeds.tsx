
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import sample feed data (these will be replaced by the actual feeds during build)
import cssData from '../data/feeds/css-tricks.json';
import netlifyData from '../data/feeds/netlify.json';

const Feeds = () => {
  // Function to safely get feed items
  const getFeedItems = (feedData: any) => {
    try {
      // Check if the feed has items array
      if (feedData && Array.isArray(feedData.items)) {
        return feedData.items;
      }
      
      // For XML sitemaps that might be converted differently
      if (feedData && feedData.urlset && Array.isArray(feedData.urlset.url)) {
        return feedData.urlset.url.map((url: any) => ({
          title: url.loc || 'No title',
          link: url.loc || '#',
          pubDate: url.lastmod || 'Unknown date',
          contentSnippet: 'Sitemap entry'
        }));
      }
      
      // Fallback for empty or malformed feeds
      return [];
    } catch (error) {
      console.error("Error parsing feed data:", error);
      return [];
    }
  };

  const cssItems = getFeedItems(cssData);
  const netlifyItems = getFeedItems(netlifyData);

  return (
    <div className="container mx-auto py-10">
      <Helmet>
        <title>Feeds | Wrapping The World</title>
        <meta name="description" content="Latest feeds from our partners and resources" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8 text-center">Latest Feeds</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>CSS Tricks</CardTitle>
          </CardHeader>
          <CardContent>
            {cssItems.length > 0 ? (
              <ul className="space-y-4">
                {cssItems.slice(0, 5).map((item: any, index: number) => (
                  <li key={index} className="border-b pb-3">
                    <a 
                      href={item.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.title || 'No title'}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.pubDate || item.lastmod || 'Unknown date'}
                    </p>
                    <p className="mt-1">{item.contentSnippet || 'No description available'}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No feed items available at this time.</p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Netlify</CardTitle>
          </CardHeader>
          <CardContent>
            {netlifyItems.length > 0 ? (
              <ul className="space-y-4">
                {netlifyItems.slice(0, 5).map((item: any, index: number) => (
                  <li key={index} className="border-b pb-3">
                    <a 
                      href={item.link || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {item.title || 'No title'}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.pubDate || item.lastmod || 'Unknown date'}
                    </p>
                    <p className="mt-1">{item.contentSnippet || 'No description available'}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No feed items available at this time.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Feeds;
