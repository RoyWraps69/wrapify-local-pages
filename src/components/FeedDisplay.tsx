
import React, { useEffect, useState } from 'react';

interface FeedItem {
  title: string;
  link: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  guid?: string;
  categories?: string[];
  isoDate?: string;
  loc?: string;
  lastmod?: string;
  changefreq?: string;
  priority?: string;
}

interface Feed {
  items: FeedItem[];
  feedUrl: string;
  title: string;
  description: string;
  generator?: string;
  link: string;
  language: string;
  lastBuildDate: string;
}

// Type guard to check if an object is a sitemap
const isSitemap = (data: any): boolean => {
  return data && typeof data === 'object' && 'urlset' in data && data.urlset && Array.isArray(data.urlset.url);
};

const convertSitemapToFeed = (sitemapData: any): Feed => {
  if (!sitemapData || !sitemapData.urlset || !Array.isArray(sitemapData.urlset.url)) {
    return {
      items: [],
      feedUrl: '',
      title: 'Sitemap',
      description: 'Converted from XML sitemap',
      link: '',
      language: 'en',
      lastBuildDate: new Date().toISOString()
    };
  }

  const items = sitemapData.urlset.url.map((url: any) => ({
    title: url.loc || 'No title',
    link: url.loc || '#',
    pubDate: url.lastmod || new Date().toISOString(),
    contentSnippet: `Priority: ${url.priority || 'N/A'}, Change frequency: ${url.changefreq || 'N/A'}`,
    guid: url.loc,
    isoDate: url.lastmod || new Date().toISOString(),
    loc: url.loc,
    lastmod: url.lastmod,
    changefreq: url.changefreq,
    priority: url.priority
  }));

  return {
    items,
    feedUrl: 'sitemap.xml',
    title: 'Sitemap',
    description: 'Converted from XML sitemap',
    link: '',
    language: 'en',
    lastBuildDate: new Date().toISOString()
  };
};

const FeedDisplay: React.FC = () => {
  const [feeds, setFeeds] = useState<{[key: string]: Feed}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        const feedData: {[key: string]: Feed} = {};
        
        try {
          const cssTricksFeed = await import('../data/feeds/css-tricks.json');
          const cssTricksData = cssTricksFeed.default || cssTricksFeed;
          
          if (isSitemap(cssTricksData)) {
            feedData['css-tricks'] = convertSitemapToFeed(cssTricksData);
          } else {
            feedData['css-tricks'] = cssTricksData as Feed;
          }
        } catch (e) {
          console.log('CSS Tricks feed not available:', e);
        }
        
        try {
          const netlifyFeed = await import('../data/feeds/netlify.json');
          const netlifyData = netlifyFeed.default || netlifyFeed;
          
          if (isSitemap(netlifyData)) {
            feedData['netlify'] = convertSitemapToFeed(netlifyData);
          } else {
            feedData['netlify'] = netlifyData as Feed;
          }
        } catch (e) {
          console.log('Netlify feed not available:', e);
        }
        
        try {
          const sampleFeed = await import('../data/feeds/sample.json');
          const sampleData = sampleFeed.default || sampleFeed;
          
          if (isSitemap(sampleData)) {
            feedData['sample'] = convertSitemapToFeed(sampleData);
          } else {
            feedData['sample'] = sampleData as Feed;
          }
        } catch (e) {
          console.log('Sample feed not available:', e);
        }
        
        if (Object.keys(feedData).length === 0) {
          throw new Error('Failed to load any feed data');
        }
        
        setFeeds(feedData);
        setLoading(false);
      } catch (error) {
        console.error('Error loading feed data:', error);
        setError('Failed to load feed data. See console for details.');
        setLoading(false);
      }
    };

    loadFeeds();
  }, []);

  if (loading) {
    return <div className="p-4">Loading feeds...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">RSS Feeds</h2>
      
      {Object.entries(feeds).map(([name, feed]) => (
        <div key={name} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">{feed.title}</h3>
          <p className="text-gray-600 mb-4">{feed.description}</p>
          
          <div className="space-y-4">
            {feed.items.slice(0, 5).map((item, index) => (
              <div key={index} className="border p-3 rounded">
                <h4 className="font-medium text-lg">
                  <a 
                    href={item.link || item.loc || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.title || 'No title'}
                  </a>
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.isoDate || item.lastmod || '').toLocaleDateString()}
                  {item.categories && item.categories.length > 0 && ` - ${item.categories.join(', ')}`}
                </p>
                <div className="mt-2 text-gray-700">
                  {item.contentSnippet || 'No description available'}
                </div>
              </div>
            ))}
          </div>
          
          <a 
            href={feed.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Visit {feed.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FeedDisplay;
