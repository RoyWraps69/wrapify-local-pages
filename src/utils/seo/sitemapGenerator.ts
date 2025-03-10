import { MetadataRoute } from 'next/server';
import { allPosts } from 'contentlayer/generated';
import { siteConfig } from '@/config/site';

const URL = siteConfig.url;

function getPosts() {
  return allPosts.map((post) => ({
    loc: `${URL}/${post.slug}`,
    lastmod: post.date,
  }));
}

function getRoutes() {
  return [''].map((route) => ({
    loc: `${URL}/${route}`,
    lastmod: new Date().toISOString().split('T')[0],
  }));
}

export default function Sitemap(): MetadataRoute {
  const posts = getPosts();
  const routes = getRoutes();

  const all = [...posts, ...routes];

  return {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=600, stale-while-revalidate',
    },
    body: `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${all
          .map((item) => {
            return `
              <url>
                <loc>${item.loc}</loc>
                <lastmod>${item.lastmod}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>0.8</priority>
              </url>
            `;
          })
          .join('')}
      </urlset>
    `.toString(),
  };
}
