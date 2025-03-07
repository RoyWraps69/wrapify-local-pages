
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Download, Phone, DownloadCloud, Search, Filter } from 'lucide-react';

const DesignTemplateLibrary = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Categories for filtering templates
  const categories = [
    "All Templates",
    "Commercial Vans",
    "Box Trucks",
    "Pickup Trucks",
    "Sedans & Cars",
    "Food Trucks",
    "Specialty Vehicles"
  ];

  return (
    <>
      <Helmet>
        <title>Vehicle Wrap Design Templates | Commercial Fleet Graphics Library</title>
        <meta 
          name="description" 
          content="Browse our vehicle wrap design template library. Find inspiration for commercial fleet graphics, business vehicle branding, and custom wraps."
        />
        <link rel="canonical" href="https://wrappingtheworld.com/design-template-library" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vehicle Wrap Design Templates | Commercial Fleet Graphics Library"
        pageDescription="Browse our vehicle wrap design template library. Find inspiration for commercial fleet graphics, business vehicle branding, and custom wraps."
        pageUrl="https://wrappingtheworld.com/design-template-library"
      />
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-wrap-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Design Template Library
              </h1>
              <p className="text-xl mb-8">
                Browse our collection of professional vehicle wrap design templates to inspire your next project. All templates can be customized with your brand colors, logos, and messaging.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#templates"
                  className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  Browse Templates
                </a>
                <Link 
                  to="/contact"
                  className="flex items-center gap-2 bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Request Custom Design
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search & Filter Bar */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="w-full md:w-auto flex items-center bg-white rounded-md border border-gray-200 px-3 py-2">
                <Search size={20} className="text-gray-400 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search templates..." 
                  className="border-none focus:ring-0 outline-none w-full md:w-64"
                />
              </div>
              
              <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((category, index) => (
                  <button 
                    key={index}
                    className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium ${
                      index === 0 
                        ? 'bg-wrap-blue text-white' 
                        : 'bg-white text-wrap-grey hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
                
                <button className="bg-white text-wrap-grey hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                  <Filter size={16} className="mr-2" />
                  More Filters
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Templates Section */}
        <section id="templates" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-wrap-blue mb-12">
              Vehicle Wrap Design Templates
            </h2>
            
            {/* Commercial Van Templates */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-wrap-blue">
                  Commercial Van Templates
                </h3>
                <Link 
                  to="/templates/commercial-vans"
                  className="text-wrap-red hover:text-wrap-red/80 font-medium"
                >
                  View All →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Essential Service Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Essential Service Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Ideal for HVAC, plumbing, electrical, and service businesses. Includes space for contact details and service offerings.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Commercial Van
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Delivery Fleet Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Delivery Fleet Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Perfect for courier services, delivery companies, and retail businesses. Features prominent branding and clean design.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Commercial Van
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Construction Van Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Construction Van Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Designed for construction companies, contractors, and builders. Bold design with areas for services and contact information.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Commercial Van
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Truck & Box Truck Templates */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-wrap-blue">
                  Truck & Box Truck Templates
                </h3>
                <Link 
                  to="/templates/trucks"
                  className="text-wrap-red hover:text-wrap-red/80 font-medium"
                >
                  View All →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Box Truck Full Wrap" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Box Truck Full Wrap
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Maximizes visibility with full side and rear graphics. Perfect for moving companies, equipment rental, and delivery services.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Box Truck
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Contractor Pickup Design" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Contractor Pickup Design
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      For construction and trade businesses. Partial wrap design that maintains vehicle's original color while adding bold branding.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Pickup Truck
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Logistics Fleet Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Logistics Fleet Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Designed for logistics companies, shipping services, and freight carriers. Clean, professional design for brand recognition.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Box Truck
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Specialty Vehicle Templates */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-serif font-bold text-wrap-blue">
                  Specialty Vehicle Templates
                </h3>
                <Link 
                  to="/templates/specialty"
                  className="text-wrap-red hover:text-wrap-red/80 font-medium"
                >
                  View All →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Food Truck Design" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Food Truck Design
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Eye-catching graphics with menu integration. Perfect for mobile food businesses, coffee trucks, and catering vans.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Food Truck
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Trailer Wrap Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Trailer Wrap Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      For event trailers, mobile businesses, and promotional vehicles. Large format design with high visibility.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Trailer
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                      alt="Real Estate Car Template" 
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                        <DownloadCloud size={20} className="text-wrap-blue" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-wrap-blue mb-2">
                      Real Estate Car Template
                    </h4>
                    <p className="text-wrap-grey text-sm mb-4">
                      Elegant design for real estate professionals. Features property imagery, agent photo, and contact details.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="bg-gray-100 text-wrap-grey text-xs px-3 py-1 rounded-full">
                        Car/Sedan
                      </span>
                      <button className="text-wrap-red hover:text-wrap-red/80 font-medium text-sm flex items-center">
                        <Download size={16} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Custom Design CTA */}
        <section className="py-16 bg-wrap-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Need a Custom Design Solution?
              </h2>
              <p className="text-xl mb-8">
                While our template library provides excellent starting points, our in-house design team specializes in creating completely custom vehicle wrap designs tailored to your specific business needs and brand identity.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  Request Custom Design
                </Link>
                <a 
                  href="tel:+13125971286"
                  className="flex items-center gap-2 bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-wrap-red/90 transition-colors"
                >
                  <Phone size={20} />
                  <span>312-597-1286</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DesignTemplateLibrary;
