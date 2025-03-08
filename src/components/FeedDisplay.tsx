
import React, { useEffect, useState } from 'react';

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories?: string[];
  isoDate: string;
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

const FeedDisplay: React.FC = () => {
  const [feeds, setFeeds] = useState<{[key: string]: Feed}>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadFeeds = async () => {
      try {
        // In a production Netlify build, these files would be created by the plugin
        // For local development, we're using the sample data
        const feedData: {[key: string]: Feed} = {};
        
        try {
          // Try to load the CSS Tricks feed
          const cssTricksFeed = await import('../data/feeds/css-tricks.json')
            .then(module => module.default)
            .catch(() => null);
          
          if (cssTricksFeed) {
            feedData['css-tricks'] = cssTricksFeed;
          }
        } catch (e) {
          console.log('CSS Tricks feed not available, using sample data');
        }
        
        try {
          // Try to load the Netlify feed
          const netlifyFeed = await import('../data/feeds/netlify.json')
            .then(module => module.default)
            .catch(() => null);
          
          if (netlifyFeed) {
            feedData['netlify'] = netlifyFeed;
          }
        } catch (e) {
          console.log('Netlify feed not available, using sample data');
        }
        
        // If no feeds were loaded, use the sample data
        if (Object.keys(feedData).length === 0) {
          const sampleFeed = await import('../data/feeds/sample.json')
            .then(module => module.default)
            .catch(() => {
              throw new Error('Failed to load sample feed data');
            });
          
          feedData['sample'] = sampleFeed;
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
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(item.isoDate).toLocaleDateString()} - 
                  {item.categories?.join(', ')}
                </p>
                <div className="mt-2 text-gray-700">
                  {item.contentSnippet}
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
