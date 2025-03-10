
import { generateWebPageSchema, generateOrganizationSchema, generateBreadcrumbSchema } from './baseSchemas';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  categories: string[];
  tags: string[];
}

/**
 * Generates Schema.org structured data for a blog post
 */
export const generateBlogPostSchema = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "name": post.title,
    "description": post.excerpt,
    "image": post.featuredImage,
    "datePublished": post.publishDate,
    "dateModified": post.modifiedDate || new Date().toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Wrapping The World",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wrappingtheworld.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://wrappingtheworld.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
  };
};

/**
 * Generates all schemas needed for a blog post page
 */
export const generateBlogPostPageSchemas = (post: BlogPost) => {
  // Generate the main blog post schema
  const blogPostSchema = generateBlogPostSchema(post);
  
  // Generate web page schema
  const webPageSchema = generateWebPageSchema({
    pageTitle: `${post.title} | Wrapping The World Blog`,
    pageDescription: post.excerpt,
    pageUrl: `https://wrappingtheworld.com/blog/${post.slug}`,
    imageUrl: post.featuredImage,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate || new Date().toISOString()
  });
  
  // Generate organization schema
  const orgSchema = generateOrganizationSchema();
  
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Blog", url: "https://wrappingtheworld.com/blog" },
    { name: post.title, url: `https://wrappingtheworld.com/blog/${post.slug}` }
  ]);
  
  return [blogPostSchema, webPageSchema, orgSchema, breadcrumbSchema];
};

/**
 * Generates schema for the blog listing page
 */
export const generateBlogListingSchema = (posts: BlogPost[]) => {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Blog", url: "https://wrappingtheworld.com/blog" }
  ]);
  
  // Generate blog listing schema
  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Wrapping The World Blog",
    "description": "The latest news, insights, and tips about vehicle wrapping, ceramic coating, and automotive customization.",
    "url": "https://wrappingtheworld.com/blog",
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://wrappingtheworld.com/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "author": {
        "@type": "Person",
        "name": post.author
      }
    }))
  };
  
  return [breadcrumbSchema, blogListingSchema, generateOrganizationSchema()];
};
