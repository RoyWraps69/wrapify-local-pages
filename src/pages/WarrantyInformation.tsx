
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageSEO from '@/components/seo/PageSEO';
import { ChevronDown, ChevronUp, Shield, CheckCircle } from 'lucide-react';
import { generateWarrantySchemas } from '@/utils/seo/schemaGenerator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const WarrantyInformation = () => {
  const [openSection, setOpenSection] = React.useState<string | null>("vehicle-wraps");
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  // Generate all schemas for the warranty page
  const { warrantySchema, orgSchema, webPageSchema } = generateWarrantySchemas();
  
  // Create array of all schemas for the page
  const structuredData = [warrantySchema, orgSchema, webPageSchema];
  
  // Keywords for better SEO
  const keywords = "vehicle wrap warranty, ceramic coating warranty, paint protection film warranty, wrap guarantee, 5-year warranty, professional installation warranty, Chicago vehicle wrap warranty, vehicle enhancement warranty";
  
  return (
    <>
      <PageSEO
        title="Warranty Information | Wrapping The World"
        description="Our comprehensive 5-year warranty covers all professional vehicle wraps, ceramic coatings, and paint protection film installations performed by certified Wrapping The World technicians."
        canonicalUrl="/warranty-information"
        keywords={keywords}
        structuredData={structuredData}
        location="Chicago"
        publishedTime="2023-01-15T08:00:00+08:00"
        modifiedTime={new Date().toISOString()}
      />
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-wrap-blue/10 text-wrap-blue rounded-full text-sm font-medium mb-4">
                Our Commitment To Quality
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-semibold text-wrap-blue mb-4">
                Warranty Information
              </h1>
              <p className="text-wrap-grey text-lg max-w-3xl mx-auto">
                We stand behind our work with comprehensive warranty coverage for all our professional vehicle enhancement services.
              </p>
            </div>
            
            <div className="bg-wrap-blue/5 p-8 rounded-lg mb-12">
              <div className="flex items-start mb-6">
                <div className="shrink-0 mr-4">
                  <Shield className="h-12 w-12 text-wrap-blue" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-wrap-blue mb-2">Our 5-Year Warranty Promise</h2>
                  <p className="text-wrap-grey">
                    At Wrapping The World, we're confident in the quality of our materials and craftsmanship. That's why we offer a comprehensive 5-year warranty on all our professional installations. This warranty represents our commitment to excellence and customer satisfaction.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-wrap-red" />
                  </div>
                  <h3 className="font-medium text-lg mb-2 text-wrap-blue">Material Defects</h3>
                  <p className="text-sm text-wrap-grey">
                    Coverage for any manufacturer defects in vinyl wraps, ceramic coatings, and paint protection film.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-wrap-red" />
                  </div>
                  <h3 className="font-medium text-lg mb-2 text-wrap-blue">Installation Quality</h3>
                  <p className="text-sm text-wrap-grey">
                    Protection against bubbling, peeling, or lifting due to installation issues.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="h-12 w-12 bg-wrap-red/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-wrap-red" />
                  </div>
                  <h3 className="font-medium text-lg mb-2 text-wrap-blue">Color Fastness</h3>
                  <p className="text-sm text-wrap-grey">
                    Warranty against excessive fading or discoloration beyond normal wear.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 mb-12">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("vehicle-wraps")}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-wrap-blue text-xl">Vehicle Wraps Warranty</h3>
                  {openSection === "vehicle-wraps" ? (
                    <ChevronUp className="h-5 w-5 text-wrap-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-wrap-blue" />
                  )}
                </button>
                
                <div 
                  className={`bg-white p-4 transition-all duration-300 ease-in-out ${
                    openSection === "vehicle-wraps" ? 'block' : 'hidden'
                  }`}
                >
                  <ul className="space-y-2 text-wrap-grey">
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>5-year warranty on premium 3M and Avery Dennison commercial vinyl wraps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>3-year warranty on color change wraps</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Coverage for peeling, bubbling, and excessive fading</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Free repairs for installation-related issues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Prorated coverage for partial replacement if needed</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-wrap-blue mb-2">Warranty Exclusions:</h4>
                    <p className="text-sm text-wrap-grey mb-2">
                      Our warranty does not cover damage resulting from:
                    </p>
                    <ul className="space-y-1 text-sm text-wrap-grey">
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Improper cleaning or maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Accidents, vandalism, or negligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Abrasive car washing methods (automated car washes)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Chemical spills or harsh contaminants</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("ceramic-coating")}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-wrap-blue text-xl">Ceramic Coating Warranty</h3>
                  {openSection === "ceramic-coating" ? (
                    <ChevronUp className="h-5 w-5 text-wrap-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-wrap-blue" />
                  )}
                </button>
                
                <div 
                  className={`bg-white p-4 transition-all duration-300 ease-in-out ${
                    openSection === "ceramic-coating" ? 'block' : 'hidden'
                  }`}
                >
                  <ul className="space-y-2 text-wrap-grey">
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>5-year warranty on professional ceramic coating applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Guaranteed hydrophobic properties for the warranty period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Coverage for coating failure, delamination, or loss of gloss</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Annual inspection and maintenance service included</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Free reapplication if coating fails prematurely</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-wrap-blue mb-2">Maintaining Your Warranty:</h4>
                    <p className="text-sm text-wrap-grey mb-2">
                      To maintain your ceramic coating warranty:
                    </p>
                    <ul className="space-y-1 text-sm text-wrap-grey">
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Schedule annual inspection and maintenance service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Follow proper washing techniques using pH-neutral products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Avoid automatic car washes with abrasive brushes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-wrap-red mr-2">•</span>
                        <span>Clean bird droppings and tree sap promptly</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("ppf")}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-wrap-blue text-xl">Paint Protection Film Warranty</h3>
                  {openSection === "ppf" ? (
                    <ChevronUp className="h-5 w-5 text-wrap-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-wrap-blue" />
                  )}
                </button>
                
                <div 
                  className={`bg-white p-4 transition-all duration-300 ease-in-out ${
                    openSection === "ppf" ? 'block' : 'hidden'
                  }`}
                >
                  <ul className="space-y-2 text-wrap-grey">
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>5-year warranty on self-healing paint protection film</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Coverage for yellowing, bubbling, cracking, or peeling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Guaranteed self-healing properties for minor scratches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Free replacement if film fails within warranty period</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-wrap-red mr-2">•</span>
                      <span>Transferable warranty for one-time vehicle ownership change</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-medium text-wrap-blue mb-2">Self-Healing Activation:</h4>
                    <p className="text-sm text-wrap-grey">
                      The self-healing properties of our paint protection film are activated by heat. Minor scratches and swirl marks will disappear when exposed to warm water or sunlight. For faster healing in colder months, you can use a hairdryer on low heat to restore the film's appearance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection("warranty-claims")}
                  className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-medium text-wrap-blue text-xl">How to File a Warranty Claim</h3>
                  {openSection === "warranty-claims" ? (
                    <ChevronUp className="h-5 w-5 text-wrap-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-wrap-blue" />
                  )}
                </button>
                
                <div 
                  className={`bg-white p-4 transition-all duration-300 ease-in-out ${
                    openSection === "warranty-claims" ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-wrap-grey mb-4">
                    Filing a warranty claim is simple. Follow these steps:
                  </p>
                  
                  <ol className="space-y-3 text-wrap-grey list-decimal pl-5">
                    <li>
                      <span className="font-medium text-wrap-blue">Contact our service department</span>
                      <p className="mt-1 text-sm">
                        Call us at (312) 597-1286 or email warranty@wrappingtheworld.com to report the issue.
                      </p>
                    </li>
                    
                    <li>
                      <span className="font-medium text-wrap-blue">Provide documentation</span>
                      <p className="mt-1 text-sm">
                        Send clear photos of the issue along with your original invoice number and vehicle information.
                      </p>
                    </li>
                    
                    <li>
                      <span className="font-medium text-wrap-blue">Schedule an inspection</span>
                      <p className="mt-1 text-sm">
                        Our technicians will examine your vehicle to assess the warranty claim and determine the appropriate solution.
                      </p>
                    </li>
                    
                    <li>
                      <span className="font-medium text-wrap-blue">Repair or replacement</span>
                      <p className="mt-1 text-sm">
                        If your claim is approved, we'll schedule the necessary repairs or replacement services at no cost to you.
                      </p>
                    </li>
                  </ol>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-sm text-wrap-grey italic">
                      <strong>Note:</strong> For fastest service, please have your original invoice number, installation date, and vehicle information ready when filing a warranty claim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-semibold text-wrap-blue mb-4">
                Ready to Protect Your Vehicle Investment?
              </h2>
              <p className="text-wrap-grey mb-6">
                Our professional installations come with industry-leading warranty coverage for complete peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-wrap-red hover:bg-red-600 text-white"
                >
                  <Link to="/contact">
                    Contact Us Today
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-wrap-blue text-wrap-blue hover:bg-wrap-blue/5"
                >
                  <Link to="/wrap-insurance">
                    Explore Insurance Options
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default WarrantyInformation;
