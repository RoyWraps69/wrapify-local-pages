
/**
 * Sitemap generator utility for Wrapping The World
 * This file provides functionality to programmatically generate XML sitemaps.
 */

// Types for sitemap entries
export interface SitemapItem {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  images?: SitemapImage[];
}

export interface SitemapImage {
  loc: string;
  title?: string;
  caption?: string;
}

// Base URL for the site
const SITE_URL = 'https://wrappingtheworld.com';

/**
 * Generate a sitemap XML string from an array of sitemap items
 */
export function generateSitemapXML(items: SitemapItem[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

  items.forEach(item => {
    xml += '  <url>\n';
    xml += `    <loc>${item.loc}</loc>\n`;
    
    if (item.lastmod) {
      xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    }
    
    if (item.changefreq) {
      xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    }
    
    if (item.priority !== undefined) {
      xml += `    <priority>${item.priority}</priority>\n`;
    }
    
    if (item.images && item.images.length > 0) {
      item.images.forEach(image => {
        xml += '    <image:image>\n';
        xml += `      <image:loc>${image.loc}</image:loc>\n`;
        
        if (image.title) {
          xml += `      <image:title>${image.title}</image:title>\n`;
        }
        
        if (image.caption) {
          xml += `      <image:caption>${image.caption}</image:caption>\n`;
        }
        
        xml += '    </image:image>\n';
      });
    }
    
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
}

/**
 * Generate a sitemap index XML string from an array of sitemap URLs
 */
export function generateSitemapIndexXML(sitemaps: { loc: string; lastmod?: string }[]): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  sitemaps.forEach(sitemap => {
    xml += '  <sitemap>\n';
    xml += `    <loc>${sitemap.loc}</loc>\n`;
    
    if (sitemap.lastmod) {
      xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
    }
    
    xml += '  </sitemap>\n';
  });

  xml += '</sitemapindex>';
  return xml;
}

/**
 * Combine base URL with a path to form a full URL
 */
export function getFullUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Format a date as YYYY-MM-DD for sitemap usage
 */
export function formatSitemapDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0];
}

/**
 * Get current date formatted for sitemap
 */
export function getCurrentDate(): string {
  return formatSitemapDate(new Date());
}

/**
 * Example of generating a basic sitemap for main pages
 */
export function generateMainSitemap(): string {
  const today = getCurrentDate();
  
  const items: SitemapItem[] = [
    {
      loc: getFullUrl('/'),
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      loc: getFullUrl('/services'),
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      loc: getFullUrl('/gallery'),
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      loc: getFullUrl('/about'),
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      loc: getFullUrl('/contact'),
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8
    }
  ];
  
  return generateSitemapXML(items);
}
