
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import CTASection from '@/components/CTASection';

// Sample blog data - in a real application, this would come from a CMS or API
const blogPosts = [
  {
    id: 'vinyl-vs-paint',
    title: 'Vinyl Wrap vs. Paint: Which is Better for Your Vehicle?',
    excerpt: 'Comparing the pros and cons of vinyl wraps versus traditional paint jobs for vehicles. Learn about durability, cost, customization options, and protection benefits.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Michael Rodriguez',
    date: 'June 15, 2023',
    readTime: '8 min read',
    category: 'Vehicle Wraps'
  },
  {
    id: 'ceramic-coating-guide',
    title: 'The Complete Guide to Ceramic Coating: Protection That Lasts',
    excerpt: 'Everything you need to know about ceramic coating protection for your vehicle - how it works, application process, maintenance tips, and long-term benefits.',
    image: 'https://images.unsplash.com/photo-1605515298946-d871089543b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Sarah Johnson',
    date: 'July 23, 2023',
    readTime: '10 min read',
    category: 'Ceramic Coating'
  },
  {
    id: 'fleet-branding-roi',
    title: 'Fleet Branding ROI: How Vehicle Wraps Drive Business Growth',
    excerpt: 'Discover how fleet vehicle branding generates measurable returns on investment through increased visibility, brand recognition, and customer acquisition.',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'David Williams',
    date: 'August 5, 2023',
    readTime: '7 min read',
    category: 'Business Tips'
  },
  {
    id: 'ppf-explained',
    title: 'Paint Protection Film Explained: The Ultimate Shield for Your Vehicle',
    excerpt: 'An in-depth look at paint protection film (PPF) technology, installation process, self-healing properties, and how it safeguards your vehicle from road debris.',
    image: 'https://images.unsplash.com/photo-1507833423370-a126b89d394b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Jennifer Lee',
    date: 'September 12, 2023',
    readTime: '9 min read',
    category: 'Paint Protection'
  },
  {
    id: 'vehicle-wrap-maintenance',
    title: '7 Essential Maintenance Tips for Vehicle Wraps',
    excerpt: 'Learn how to properly maintain and care for your vehicle wrap to maximize its lifespan, appearance, and effectiveness as a branding tool.',
    image: 'https://images.unsplash.com/photo-1635770310586-92b77c535209?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Robert Garcia',
    date: 'October 18, 2023',
    readTime: '6 min read',
    category: 'Maintenance'
  },
  {
    id: 'color-change-trends',
    title: 'The Top Color Change Wrap Trends for 2024',
    excerpt: 'Stay ahead of the curve with our breakdown of the most popular and emerging color change wrap trends, finishes, and textures for the coming year.',
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    author: 'Michelle Carter',
    date: 'November 30, 2023',
    readTime: '8 min read',
    category: 'Design Trends'
  }
];

const Blog = () => {
  return (
    <>
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap & Protection Blog | Expert Guides & Tips | Wrapping The World"
        pageDescription="Explore our blog for expert insights on vehicle wraps, ceramic coatings, paint protection film, fleet branding ROI, maintenance tips, and industry trends."
        pageUrl="https://wrappingtheworld.com/blog"
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-wrap-blue mb-6">
              Vehicle Wrap & Protection Knowledge Center
            </h1>
            <p className="text-wrap-grey text-lg mb-8 max-w-3xl mx-auto">
              Welcome to the Wrapping The World blog – your trusted resource for expert insights, guides, and tips about vehicle wraps, ceramic coatings, paint protection film, and automotive enhancement trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/category/vehicle-wraps" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
                Vehicle Wraps
              </Link>
              <Link to="/blog/category/ceramic-coating" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
                Ceramic Coating
              </Link>
              <Link to="/blog/category/paint-protection" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
                Paint Protection
              </Link>
              <Link to="/blog/category/business-tips" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
                Business Tips
              </Link>
              <Link to="/blog/category/design-trends" className="inline-flex items-center px-4 py-2 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium hover:bg-wrap-blue hover:text-white transition-all">
                Design Trends
              </Link>
            </div>
          </div>
          
          {/* Featured Post */}
          <div className="bg-wrap-blue/5 rounded-xl overflow-hidden mb-16">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4">
                  Featured Article
                </span>
                <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-wrap-grey mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center text-wrap-grey/70 text-sm mb-6">
                  <div className="flex items-center mr-4">
                    <User size={14} className="mr-1" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link to={`/blog/${blogPosts[0].id}`} className="btn-primary inline-flex items-center justify-center w-full md:w-auto">
                  Read Article
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-xs font-medium mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-wrap-grey text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-wrap-grey/70 text-xs mb-4">
                    <div className="flex items-center mr-3">
                      <Calendar size={12} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="text-wrap-blue hover:text-wrap-red inline-flex items-center text-sm font-medium">
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Newsletter Sign Up */}
          <div className="bg-wrap-blue/10 rounded-xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
                Stay Updated With Vehicle Wrap & Protection Insights
              </h2>
              <p className="text-wrap-grey mb-8">
                Subscribe to our newsletter to receive the latest articles, tips, and industry news about vehicle wraps, ceramic coatings, and paint protection.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-wrap-blue/50"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-wrap-grey/70 text-xs mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
        
        <CTASection townName="Chicago" />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
