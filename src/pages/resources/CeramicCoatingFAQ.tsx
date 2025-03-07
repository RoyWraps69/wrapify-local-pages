
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer/Footer';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Shield, CheckCircle, RefreshCw, AlertTriangle, Calendar } from 'lucide-react';

const CeramicCoatingFAQ = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ceramic Coating FAQ | Professional Vehicle Protection | Wrapping The World</title>
        <meta 
          name="description" 
          content="Answers to common questions about ceramic coatings for vehicles. Learn about durability, benefits, maintenance requirements and more from Chicago's vehicle protection experts."
        />
        <link rel="canonical" href="https://wrappingtheworld.com/ceramic-coating-faq" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Ceramic Coating FAQ | Professional Vehicle Protection | Wrapping The World"
        pageDescription="Answers to common questions about ceramic coatings for vehicles. Learn about durability, benefits, maintenance requirements and more from Chicago's vehicle protection experts."
        pageUrl="https://wrappingtheworld.com/ceramic-coating-faq"
      />
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-wrap-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ceramic Coating FAQ
              </h1>
              <p className="text-xl mb-8">
                Answers to your most common questions about ceramic coatings - learn about benefits, application process, and maintenance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/services/ceramic-coatings"
                  className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors"
                >
                  View Ceramic Coating Services
                </Link>
                <a 
                  href="tel:+13125971286"
                  className="flex items-center gap-2 bg-white text-wrap-blue px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <Phone size={20} />
                  <span>312-597-1286</span>
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
                  <h2>Ceramic Coating Frequently Asked Questions</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        What is ceramic coating?
                      </h3>
                      <div className="pl-11">
                        <p>Ceramic coating is a liquid polymer that chemically bonds with your vehicle's factory paint, creating a layer of protection that is significantly harder than clear coat. This semi-permanent bond creates a hydrophobic (water-repelling) surface that offers superior protection against environmental contaminants and UV damage.</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        How long does ceramic coating last?
                      </h3>
                      <div className="pl-11">
                        <p>Professional ceramic coatings can last anywhere from 2-5 years, depending on the specific product used, application method, environmental exposure, and maintenance. Our premium ceramic coating packages offer up to 5 years of protection with proper care.</p>
                        
                        <div className="bg-blue-50 p-4 rounded-lg mt-4 flex">
                          <Calendar className="text-wrap-blue mr-3 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <p className="text-sm font-medium text-wrap-blue mb-1">Longevity by Coating Type:</p>
                            <ul className="list-disc pl-5 mb-0 text-sm">
                              <li><strong>Entry-Level:</strong> 1-2 years</li>
                              <li><strong>Mid-Range:</strong> 2-3 years</li>
                              <li><strong>Professional Grade:</strong> 3-5+ years</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        What are the benefits of ceramic coating?
                      </h3>
                      <div className="pl-11">
                        <p>Ceramic coatings offer numerous benefits including:</p>
                        <ul>
                          <li className="flex items-start mb-3">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Superior protection</strong> against environmental damage (bird droppings, tree sap, road salt)</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Enhanced resistance</strong> to UV rays and oxidation</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Hydrophobic properties</strong> that make cleaning easier</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Improved gloss and depth</strong> to your vehicle's paint</span>
                          </li>
                          <li className="flex items-start mb-3">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Reduced need</strong> for waxing and polishing</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={20} />
                            <span><strong>Protection against</strong> minor scratches and swirl marks</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        Is ceramic coating worth the cost?
                      </h3>
                      <div className="pl-11">
                        <p>While ceramic coating represents a higher initial investment than traditional waxing, it provides superior protection and longevity, often lasting several years. For those who value their vehicle's appearance and want to maintain its resale value, ceramic coating is a cost-effective long-term solution that requires less frequent reapplication than traditional methods.</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        Can I apply ceramic coating myself?
                      </h3>
                      <div className="pl-11">
                        <p>While DIY ceramic coating products exist, professional application ensures optimal results. Our certified installers thoroughly prepare the surface (including paint correction), apply the coating in a controlled environment, and ensure proper curing. Professional application maximizes durability and performance while avoiding common DIY issues like high spots, streaking, or improper curing.</p>
                        
                        <div className="bg-red-50 p-4 rounded-lg mt-4 flex">
                          <AlertTriangle className="text-wrap-red mr-3 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <p className="text-sm font-medium text-wrap-red mb-1">Common DIY Pitfalls:</p>
                            <ul className="list-disc pl-5 mb-0 text-sm">
                              <li>Insufficient paint preparation</li>
                              <li>Improper application technique</li>
                              <li>Inadequate curing conditions</li>
                              <li>Uneven coverage and high spots</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        How do I maintain a ceramic coated vehicle?
                      </h3>
                      <div className="pl-11">
                        <p>Maintaining a ceramic coated vehicle is relatively simple:</p>
                        <ol>
                          <li className="mb-2">Wash regularly with pH-neutral soap</li>
                          <li className="mb-2">Avoid automatic car washes with abrasive brushes</li>
                          <li className="mb-2">Use microfiber towels for drying</li>
                          <li className="mb-2">Apply a ceramic boost spray every 3-4 months for optimal performance</li>
                          <li>Address contaminants (bird droppings, tree sap) promptly</li>
                        </ol>
                        
                        <div className="bg-wrap-blue p-4 rounded-lg mt-4 text-white flex">
                          <RefreshCw className="mr-3 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <p className="font-medium mb-1">Maintenance Schedule:</p>
                            <p className="text-sm mb-0">For maximum performance, we recommend bringing your vehicle in for a professional maintenance inspection every 6-12 months, depending on your driving conditions.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        Can ceramic coating be applied over vinyl wraps?
                      </h3>
                      <div className="pl-11">
                        <p>Yes, we offer specialized ceramic coatings designed specifically for vinyl wraps. These provide the same hydrophobic properties and protection while being safe for vinyl surfaces. This combination provides maximum protection and easier maintenance for wrapped vehicles.</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-wrap-blue">
                      <h3 className="flex items-start">
                        <span className="bg-wrap-blue text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">Q</span>
                        Does ceramic coating prevent scratches?
                      </h3>
                      <div className="pl-11">
                        <p>Ceramic coating provides resistance against minor scratches and swirl marks. However, it's not scratch-proof. For maximum protection against rock chips and deeper scratches, we recommend combining ceramic coating with Paint Protection Film (PPF) in high-impact areas.</p>
                        
                        <div className="bg-gray-100 p-4 rounded-lg mt-4 flex">
                          <Shield className="text-wrap-blue mr-3 flex-shrink-0 mt-1" size={24} />
                          <div>
                            <p className="text-sm font-medium mb-1">Protection Levels:</p>
                            <ul className="list-disc pl-5 mb-0 text-sm">
                              <li><strong>Ceramic Coating:</strong> Light scratches, UV, chemicals</li>
                              <li><strong>PPF:</strong> Rock chips, road debris, deeper scratches</li>
                              <li><strong>Combined:</strong> Maximum protection for high-value vehicles</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-wrap-blue text-white p-6 my-8 rounded-lg">
                    <h3 className="text-white mb-4">Schedule a Free Consultation</h3>
                    <p>Our experts can help determine the best ceramic coating package for your vehicle and needs.</p>
                    <Link 
                      to="/contact"
                      className="bg-white text-wrap-blue px-6 py-2 rounded-md hover:bg-gray-100 transition-colors mt-2 inline-block"
                    >
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-wrap-blue mb-4">Our Coating Packages</h3>
                    <ul className="space-y-4">
                      <li className="border-b border-gray-200 pb-3">
                        <p className="font-bold text-wrap-blue">Standard Protection</p>
                        <p className="text-sm text-wrap-grey mb-1">1-2 year protection</p>
                        <p className="text-sm mb-0">Ideal for lease vehicles or those on a budget</p>
                      </li>
                      <li className="border-b border-gray-200 pb-3">
                        <p className="font-bold text-wrap-blue">Premium Protection</p>
                        <p className="text-sm text-wrap-grey mb-1">3-4 year protection</p>
                        <p className="text-sm mb-0">Perfect for daily drivers and most vehicle owners</p>
                      </li>
                      <li>
                        <p className="font-bold text-wrap-blue">Elite Protection</p>
                        <p className="text-sm text-wrap-grey mb-1">5+ year protection</p>
                        <p className="text-sm mb-0">The ultimate in ceramic protection for high-end vehicles</p>
                      </li>
                    </ul>
                    <Link 
                      to="/services/ceramic-coatings"
                      className="mt-4 block bg-wrap-red text-white text-center px-4 py-2 rounded-md hover:bg-wrap-red/90 transition-colors"
                    >
                      View Detailed Pricing
                    </Link>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-wrap-blue mb-4">Related Resources</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/vinyl-wrap-care-guide" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Vinyl Wrap Care Guide
                        </Link>
                      </li>
                      <li>
                        <Link to="/design-template-library" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Design Template Library
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/paint-protection-film" className="text-wrap-blue hover:text-wrap-red transition-colors flex items-center">
                          <span className="w-1.5 h-1.5 bg-wrap-red rounded-full mr-2"></span>
                          Paint Protection Film
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
                    <h3 className="text-xl font-bold mb-4">Ready to Protect Your Vehicle?</h3>
                    <p className="mb-4">
                      Contact our ceramic coating experts for a free consultation and quote.
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
                      Request a Quote
                    </Link>
                  </div>
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

export default CeramicCoatingFAQ;
