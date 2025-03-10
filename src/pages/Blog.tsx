
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { generateBreadcrumbSchema } from '@/utils/seo/schemaGenerator';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: 'How Long Do Vehicle Wraps Really Last?',
    excerpt: 'Discover the actual lifespan of various vehicle wrap materials and how to maximize their durability with proper care and maintenance.',
    author: 'Roy Thompson',
    date: '2024-06-15',
    image: '/lovable-uploads/ce7b5e03-583f-41eb-b5cd-69934107cf9f.png',
    slug: 'how-long-do-vehicle-wraps-last',
    categories: ['Maintenance', 'Materials']
  },
  {
    id: '2',
    title: 'Fleet Graphics: Transforming Vehicles Into Moving Billboards',
    excerpt: 'Learn how fleet graphics can turn your company vehicles into powerful marketing tools that generate impressions everywhere they go.',
    author: 'Patricia Miller',
    date: '2024-06-02',
    image: '/lovable-uploads/5b84cf7f-3fd3-4c9e-9af4-b30550fc0240.png',
    slug: 'fleet-graphics-moving-billboards',
    categories: ['Business', 'Marketing']
  },
  {
    id: '3',
    title: 'Ceramic Coating vs. Paint Protection Film: Which Is Right For You?',
    excerpt: 'Compare the benefits, costs, and protection levels of ceramic coatings and paint protection films to determine the best option for your vehicle.',
    author: 'Michael Chen',
    date: '2024-05-18',
    image: '/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png',
    slug: 'ceramic-coating-vs-ppf-comparison',
    categories: ['Protection', 'Products']
  },
  {
    id: '4',
    title: 'Color Change Wraps: Transform Your Vehicle Without Permanent Commitment',
    excerpt: 'Explore how color change wraps offer a temporary yet stunning alternative to repainting your vehicle with endless color possibilities.',
    author: 'Roy Thompson',
    date: '2024-05-05',
    image: '/lovable-uploads/37c26304-db0e-44fd-b705-da7a4a74a012.png',
    slug: 'color-change-wraps-benefits',
    categories: ['Design', 'Trends']
  }
];

const Blog = () => {
  // Create breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://wrappingtheworld.com" },
    { name: "Blog", url: "https://wrappingtheworld.com/blog" }
  ]);

  return (
    <>
      <PageSEO 
        title="Vehicle Wrap & Graphics Blog | Wrapping The World"
        description="Stay updated with the latest trends, tips, and insights about vehicle wraps, ceramic coatings, and fleet graphics on our professional auto styling blog."
        canonicalUrl="/blog"
        keywords="vehicle wrap blog, car wrap tips, fleet graphics insights, vehicle branding trends, ceramic coating maintenance, auto wrap care guides"
        location="Chicago"
        structuredData={[breadcrumbSchema]}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-wrap-blue mb-4">Vehicle Wrap & Graphics Blog</h1>
          <p className="text-lg text-wrap-grey mb-12 max-w-3xl">
            Stay updated with the latest trends, tips, and insights about vehicle wraps, ceramic coatings, and fleet graphics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {blogPosts.slice(0, 2).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, idx) => (
                      <span key={idx} className="bg-wrap-blue/10 text-wrap-blue text-xs px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-bold text-wrap-blue mb-3">{post.title}</h2>
                  <p className="text-wrap-grey mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-wrap-grey mb-4">
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-wrap-red hover:text-wrap-red/80 font-medium transition-colors"
                  >
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {blogPosts.slice(2).map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((category, idx) => (
                      <span key={idx} className="bg-wrap-blue/10 text-wrap-blue text-xs px-2 py-1 rounded-full">
                        {category}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl font-bold text-wrap-blue mb-2">{post.title}</h2>
                  <p className="text-wrap-grey text-sm mb-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-wrap-grey mb-3">
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={12} className="mr-1" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-wrap-red hover:text-wrap-red/80 font-medium text-sm transition-colors"
                  >
                    Read Article <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-wrap-grey mb-4">Looking for more content? Check back soon for more articles!</p>
            <Link 
              to="/resources/vinyl-wrap-care-guide"
              className="inline-flex items-center bg-wrap-blue text-white px-6 py-3 rounded-md hover:bg-wrap-blue/90 transition-colors"
            >
              View Vinyl Wrap Care Guide
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
