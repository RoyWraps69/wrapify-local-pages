
/**
 * Utility functions for generating XML sitemaps
 * These can be used in a build script to generate sitemaps automatically
 */

/**
 * Generates XML sitemap content for a list of URLs
 */
export const generateSitemapXML = (
  urls: Array<{
    url: string;
    lastmod: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
  }>
) => {
  // XML header
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each URL to the sitemap
  urls.forEach(item => {
    xml += '  <url>\n';
    xml += `    <loc>${item.url}</loc>\n`;
    
    if (item.lastmod) {
      xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    }
    
    if (item.changefreq) {
      xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    }
    
    if (item.priority) {
      xml += `    <priority>${item.priority}</priority>\n`;
    }
    
    xml += '  </url>\n';
  });
  
  // Close the XML
  xml += '</urlset>';
  
  return xml;
};

/**
 * Generates XML sitemap index content for a list of sitemap URLs
 */
export const generateSitemapIndexXML = (
  sitemaps: Array<{
    url: string;
    lastmod?: string;
  }>
) => {
  // XML header
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  // Add each sitemap to the index
  sitemaps.forEach(item => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${item.url}</loc>\n`;
    
    if (item.lastmod) {
      xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    }
    
    xml += '  </sitemap>\n';
  });
  
  // Close the XML
  xml += '</sitemapindex>';
  
  return xml;
};

/**
 * Example usage for generating a sitemap for case studies
 */
export const generateCaseStudiesSitemap = (caseStudySlugs: string[]) => {
  const baseUrl = 'https://wrappingtheworld.com';
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const urls = caseStudySlugs.map(slug => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: 0.8
  }));
  
  // Add the main case studies page
  urls.unshift({
    url: `${baseUrl}/case-studies`,
    lastmod: today,
    changefreq: 'weekly' as const,
    priority: 0.9
  });
  
  return generateSitemapXML(urls);
};
