import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, FileText, Clock, Shield, CheckCircle, DownloadCloud, AlertTriangle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const VinylWrapCareGuide = () => {
  // State to track PDF availability for demo purposes
  const [isPdfAvailable, setIsPdfAvailable] = useState(true);

  // For demo purposes, this can be toggled to test availability
  const togglePdfAvailability = () => {
    setIsPdfAvailable(!isPdfAvailable);
  };

  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadGuide = () => {
    // Create an analytics event if needed
    console.log('PDF Guide Downloaded');
    
    if (!isPdfAvailable) {
      // Show toast notification for unavailable PDF
      toast({
        title: "PDF Currently Unavailable",
        description: "We're sorry, the care guide PDF is currently being updated. Please check back later.",
        variant: "destructive",
      });
      return;
    }
    
    // Direct link to the PDF file
    window.open('/downloads/vinyl-wrap-care-guide.pdf', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Vinyl Wrap Care & Maintenance Guide | Wrapping The World</title>
        <meta 
          name="description" 
          content="Expert tips on how to care for your vinyl vehicle wrap. Proper cleaning, maintenance and protection advice to extend the life of your car or fleet wrap."
        />
        <link rel="canonical" href="https://wrappingtheworld.com/vinyl-wrap-care-guide" />
        
        {/* Additional SEO meta tags */}
        <meta property="og:title" content="Vinyl Wrap Care & Maintenance Guide | Wrapping The World" />
        <meta property="og:description" content="Expert tips on how to care for your vinyl vehicle wrap. Download our free comprehensive care guide PDF." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://wrappingtheworld.com/vinyl-wrap-care-guide" />
        <meta property="og:image" content="https://wrappingtheworld.com/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Vinyl Wrap Care & Maintenance Guide",
            "description": "Expert tips on how to care for your vinyl vehicle wrap to maximize its lifespan and appearance.",
            "image": "https://wrappingtheworld.com/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
            "totalTime": "PT15M",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Regular Washing",
                "text": "Hand wash with a gentle automotive detergent and a soft cloth or sponge, rinse thoroughly, and air dry or use a microfiber cloth.",
                "image": "https://wrappingtheworld.com/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
                "url": "https://wrappingtheworld.com/vinyl-wrap-care-guide#washing"
              },
              {
                "@type": "HowToStep",
                "name": "Removing Stains",
                "text": "For tough stains, soak with warm soapy water, let sit, and gently wipe away. Use diluted isopropyl alcohol for persistent stains.",
                "image": "https://wrappingtheworld.com/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
                "url": "https://wrappingtheworld.com/vinyl-wrap-care-guide#stains"
              },
              {
                "@type": "HowToStep",
                "name": "Protecting From Elements",
                "text": "Park in covered areas when possible, use a car cover for extended outdoor parking, and rinse off road salt regularly in winter.",
                "image": "https://wrappingtheworld.com/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
                "url": "https://wrappingtheworld.com/vinyl-wrap-care-guide#protection"
              }
            ],
            "tool": [
              {
                "@type": "HowToTool",
                "name": "Gentle automotive detergent"
              },
              {
                "@type": "HowToTool",
                "name": "Microfiber cloths"
              },
              {
                "@type": "HowToTool",
                "name": "Isopropyl alcohol (diluted 2:1 with water)"
              }
            ],
            "supply": [
              {
                "@type": "HowToSupply",
                "name": "Clean water"
              },
              {
                "@type": "HowToSupply",
                "name": "Car cover (optional)"
              }
            ],
            "offers": {
              "@type": "Offer",
              "url": "https://wrappingtheworld.com/downloads/vinyl-wrap-care-guide.pdf",
              "priceCurrency": "USD",
              "price": "0",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Vinyl Wrap Care & Maintenance Guide | Wrapping The World"
        pageDescription="Expert tips on how to care for your vinyl vehicle wrap. Proper cleaning, maintenance and protection advice to extend the life of your car or fleet wrap."
        pageUrl="https://wrappingtheworld.com/vinyl-wrap-care-guide"
      />
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-wrap-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Vinyl Wrap Care Guide
              </h1>
              <p className="text-xl mb-8">
                Learn how to properly maintain and care for your vehicle wrap to maximize its lifespan and appearance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="tel:+13125971286"
                  className="flex items-center gap-2 bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>312-597-1286</span>
                </a>
                <a 
                  href="#download-guide"
                  className="flex items-center gap-2 bg-wrap-red text-white px-6 py-3 rounded-md hover:bg-wrap-red/90 transition-colors"
                >
                  <DownloadCloud size={20} />
                  <span>Download Full Guide</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content Column */}
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2>How to Care for Your Vehicle Wrap</h2>
                  <p>Your vehicle wrap is an investment in your brand's visibility or your vehicle's appearance. Proper care and maintenance will ensure it continues to look great for years to come.</p>
                  
                  <h3>Washing Your Wrapped Vehicle</h3>
                  <p>Regular washing is important to maintain your wrap's appearance and longevity. Here are the recommended steps:</p>
                  <ul>
                    <li>Hand wash with a gentle automotive detergent and a soft cloth or sponge</li>
                    <li>Rinse thoroughly with clean water</li>
                    <li>Air dry or use a microfiber cloth</li>
                    <li>Avoid high-pressure washes, which can damage the edges of the wrap</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-6 my-8 rounded-lg border border-gray-200">
                    <h4 className="text-wrap-blue flex items-center mb-3">
                      <CheckCircle className="mr-2 text-wrap-red" size={20} />
                      Pro Tip: Washing Frequency
                    </h4>
                    <p className="mb-0">
                      We recommend washing your wrapped vehicle at least every two weeks. If your vehicle is exposed to heavy contaminants, such as road salt, bird droppings, or tree sap, wash it more frequently to prevent damage to the vinyl.
                    </p>
                  </div>
                  
                  <h3>Removing Tough Stains</h3>
                  <p>For stubborn stains like bird droppings, tree sap, or bug splatter, follow these steps:</p>
                  <ol>
                    <li>Soak the affected area with warm, soapy water</li>
                    <li>Let it sit for several minutes to soften the contaminant</li>
                    <li>Gently wipe away with a soft cloth</li>
                    <li>For persistent stains, use isopropyl alcohol diluted with water (2:1 ratio)</li>
                  </ol>
                  
                  <div className="bg-red-50 p-6 my-8 rounded-lg border border-red-100">
                    <h4 className="text-wrap-red flex items-center mb-3">
                      <Shield className="mr-2" size={20} />
                      Important Warning
                    </h4>
                    <p className="mb-0">
                      Never use abrasive tools or materials on your wrap. Avoid brushes, scrapers, or abrasive sponges, as these can scratch and damage the vinyl surface permanently.
                    </p>
                  </div>
                  
                  <h3>Protecting Your Wrap from the Elements</h3>
                  <p>Environmental factors can affect your wrap's lifespan. Consider these protective measures:</p>
                  <ul>
                    <li>Park in a garage or covered area whenever possible</li>
                    <li>Use a car cover for extended outdoor parking</li>
                    <li>Avoid prolonged exposure to direct sunlight when possible</li>
                    <li>In winter, rinse salt and road chemicals off regularly</li>
                  </ul>
                  
                  <h3>What to Avoid</h3>
                  <p>To prevent damage to your vehicle wrap, avoid:</p>
                  <ul>
                    <li>Automatic car washes with abrasive brushes</li>
                    <li>Harsh chemicals, solvents, or oil-based cleaners</li>
                    <li>Wax or polish products (these can damage the finish)</li>
                    <li>Pressure washing edges of the wrap</li>
                    <li>Petroleum-based products and gas spills (clean immediately if exposed)</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-6 my-8 rounded-lg border border-gray-200">
                    <h4 className="text-wrap-blue flex items-center mb-3">
                      <Clock className="mr-2 text-wrap-red" size={20} />
                      Maintenance Schedule
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-bold mb-2">Weekly:</p>
                        <ul className="list-disc pl-5 mb-0">
                          <li>Visual inspection for damage</li>
                          <li>Clean off visible debris</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-bold mb-2">Monthly:</p>
                        <ul className="list-disc pl-5 mb-0">
                          <li>Full hand wash</li>
                          <li>Check edges for lifting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <h3>Seasonal Maintenance Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4>Summer</h4>
                      <ul className="list-disc pl-5 mb-0">
                        <li>Rinse off insect remains promptly as they can be acidic</li>
                        <li>Park in shade when possible</li>
                        <li>Apply UV protectant approved for vinyl wraps</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4>Fall</h4>
                      <ul className="list-disc pl-5 mb-0">
                        <li>Remove fallen leaves promptly</li>
                        <li>Clean tree sap immediately</li>
                        <li>Prepare for winter with thorough cleaning</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4>Winter</h4>
                      <ul className="list-disc pl-5 mb-0">
                        <li>Wash more frequently to remove road salt</li>
                        <li>Rinse undercarriage regularly</li>
                        <li>Avoid ice scrapers on wrapped surfaces</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4>Spring</h4>
                      <ul className="list-disc pl-5 mb-0">
                        <li>Check for any damage after winter</li>
                        <li>Perform a thorough deep cleaning</li>
                        <li>Schedule professional inspection if needed</li>
                      </ul>
                    </div>
                  </div>
                  
                  <h2>Professional Maintenance</h2>
                  <p>Schedule a professional inspection with our team annually to assess your wrap's condition and address any issues promptly. This can significantly extend the life of your vehicle wrap.</p>
                  
                  <div id="download-guide" className="bg-wrap-blue text-white p-6 my-8 rounded-lg">
                    <h3 className="text-white mb-3">Download Our Complete Care Guide</h3>
                    <p>Get our detailed care guide with printable maintenance schedules and product recommendations.</p>
                    
                    {!isPdfAvailable && (
                      <div className="bg-yellow-600 p-3 mb-3 rounded flex items-start">
                        <AlertTriangle className="mr-2 flex-shrink-0 mt-0.5" size={18} />
                        <p className="text-sm m-0">
                          Our PDF guide is currently unavailable as we're updating it with the latest care recommendations. Please check back soon!
                        </p>
                      </div>
                    )}
                    
                    <button 
                      onClick={handleDownloadGuide}
                      className={`bg-white text-wrap-blue px-6 py-2 rounded-md hover:bg-gray-100 transition-colors mt-2 flex items-center ${!isPdfAvailable ? 'opacity-75' : ''}`}
                    >
                      <FileText className="mr-2" size={18} />
                      Download PDF Guide
                    </button>
                    
                    {/* Toggle button for demo purposes - can be removed in production */}
                    <button 
                      onClick={togglePdfAvailability} 
                      className="mt-3 text-xs underline hover:no-underline"
                    >
                      {isPdfAvailable ? 'Test: Simulate Unavailable PDF' : 'Test: Simulate Available PDF'}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-wrap-blue mb-4">Related Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/ceramic-coating-faq" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Ceramic Coating FAQ
                        </Link>
                      </li>
                      <li>
                        <Link to="/design-template-library" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Design Template Library
                        </Link>
                      </li>
                      <li>
                        <Link to="/wrap-installation-process" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Installation Process
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Case Studies
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-wrap-blue text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Need Professional Help?</h3>
                    <p className="mb-4">
                      Our team of wrap care specialists is ready to assist with maintenance, repairs, or any questions about your vehicle wrap.
                    </p>
                    <a 
                      href="tel:+13125971286"
                      className="flex items-center justify-center gap-2 bg-white text-wrap-blue px-4 py-2 rounded-md hover:bg-gray-100 transition-colors w-full mb-3"
                    >
                      <Phone size={18} />
                      <span>312-597-1286</span>
                    </a>
                    <Link 
                      to="/contact"
                      className="flex items-center justify-center gap-2 bg-wrap-red text-white px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors w-full"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-wrap-blue text-center mb-12">
              Our Wrap Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                  alt="Commercial Fleet Wraps" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-wrap-blue mb-3">
                    Commercial Fleet Wraps
                  </h3>
                  <p className="text-wrap-grey mb-4">
                    Transform your business vehicles into mobile billboards with our premium fleet wrapping services.
                  </p>
                  <Link 
                    to="/services/commercial-fleet-wraps"
                    className="text-wrap-red hover:text-wrap-red/80 font-medium inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                  alt="Color Change Wraps" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-wrap-blue mb-3">
                    Color Change Wraps
                  </h3>
                  <p className="text-wrap-grey mb-4">
                    Give your vehicle a completely new look with our premium color change and custom design wraps.
                  </p>
                  <Link 
                    to="/services/color-change-wraps"
                    className="text-wrap-red hover:text-wrap-red/80 font-medium inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png" 
                  alt="Ceramic Coatings" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-wrap-blue mb-3">
                    Ceramic Coatings
                  </h3>
                  <p className="text-wrap-grey mb-4">
                    Protect your vehicle's paint or wrap with our professional-grade ceramic coating services.
                  </p>
                  <Link 
                    to="/services/ceramic-coatings"
                    className="text-wrap-red hover:text-wrap-red/80 font-medium inline-flex items-center"
                  >
                    Learn More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default VinylWrapCareGuide;
