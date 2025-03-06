
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface RegionalLocation {
  name: string;
  slug: string;
  county: string;
  population: string;
  distance: string;
}

interface RegionalPageContentProps {
  regionName: string;
  regionDescription: string;
  regionFocus: string;
  regionImage: string;
  citiesServed: RegionalLocation[];
  adjacentRegions: {name: string, slug: string}[];
}

const RegionalPageContent: React.FC<RegionalPageContentProps> = ({
  regionName,
  regionDescription,
  regionFocus,
  regionImage,
  citiesServed,
  adjacentRegions
}) => {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section 
        className="bg-wrap-blue text-white py-16 bg-center bg-cover bg-blend-overlay bg-black/30" 
        style={{ backgroundImage: `url(${regionImage})` }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Vehicle Wrapping & Protection in {regionName}
          </h1>
          <p className="text-xl max-w-2xl mb-8">
            Premium commercial fleet wraps, ceramic coatings, and paint protection services throughout {regionName}. Your local source for exceptional vehicle transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-6 py-3 rounded-md transition-colors">
              Request a Free Quote
            </Link>
            <a href="tel:+13125971286" className="bg-white hover:bg-gray-100 text-wrap-blue px-6 py-3 rounded-md transition-colors flex items-center gap-2">
              <Phone size={18} />
              <span>312-597-1286</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-6">
                Professional Vehicle Wrapping Services in {regionName}
              </h2>
              
              <div className="prose prose-lg max-w-none text-wrap-grey">
                <p dangerouslySetInnerHTML={{ __html: regionDescription }}></p>
                
                <h3>Why Choose Wrapping The World for {regionName} Vehicle Services?</h3>
                <ul>
                  <li>Expert vehicle wrap installation by certified professionals</li>
                  <li>Premium 3M and Avery Dennison materials for exceptional durability</li>
                  <li>Comprehensive vehicle protection solutions including ceramic coatings</li>
                  <li>Custom designs tailored to your brand and business needs</li>
                  <li>Exceptional service from concept to completion</li>
                </ul>
                
                <h3>Our Services in {regionName}</h3>
                <p>{regionFocus}</p>
                
                <div className="not-prose mt-8">
                  <h3 className="text-2xl font-serif font-semibold text-wrap-blue mb-4">
                    Serving All {regionName} Communities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {citiesServed.map((city) => (
                      <Link 
                        key={city.slug}
                        to={`/locations/${city.slug}`}
                        className="block p-4 border border-gray-200 rounded-lg hover:border-wrap-blue hover:shadow-md transition-all"
                      >
                        <h4 className="font-medium text-wrap-blue">{city.name}</h4>
                        <p className="text-sm text-wrap-grey">
                          {city.county} County | Pop: {city.population} | {city.distance}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
                  Contact Us in {regionName}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-wrap-red mt-1" />
                    <div>
                      <p className="font-medium">Wrapping The World</p>
                      <p className="text-wrap-grey">4711 N. Lamon Ave</p>
                      <p className="text-wrap-grey">Chicago, IL 60630</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-wrap-red" />
                    <a href="tel:+13125971286" className="text-wrap-blue hover:text-wrap-red transition-colors">
                      312-597-1286
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-wrap-red" />
                    <a href="mailto:info@wrappingtheworld.com" className="text-wrap-blue hover:text-wrap-red transition-colors">
                      info@wrappingtheworld.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-wrap-blue p-6 rounded-lg shadow-sm text-white">
                <h3 className="text-xl font-serif font-semibold mb-4">
                  Our Services in {regionName}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/services/commercial-fleet-wraps" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
                      <ExternalLink size={16} />
                      <span>Commercial Fleet Wraps</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/color-change-wraps" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
                      <ExternalLink size={16} />
                      <span>Color Change Wraps</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/ceramic-coatings" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
                      <ExternalLink size={16} />
                      <span>Ceramic Coatings</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/paint-protection" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
                      <ExternalLink size={16} />
                      <span>Paint Protection Film</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/vehicle-graphics" className="flex items-center gap-2 hover:text-wrap-red transition-colors">
                      <ExternalLink size={16} />
                      <span>Custom Vehicle Graphics</span>
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-serif font-semibold text-wrap-blue mb-4">
                  Nearby Regions
                </h3>
                <ul className="space-y-2">
                  {adjacentRegions.map((region) => (
                    <li key={region.slug}>
                      <Link 
                        to={`/regions/${region.slug}`}
                        className="flex items-center gap-2 text-wrap-blue hover:text-wrap-red transition-colors"
                      >
                        <MapPin size={16} />
                        <span>{region.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold text-wrap-blue mb-4">
            Ready to Transform Your Vehicles in {regionName}?
          </h2>
          <p className="text-wrap-grey text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and quote on premium vehicle wrapping, ceramic coating, and paint protection services throughout {regionName}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-wrap-red hover:bg-wrap-red/90 text-white px-8 py-3 rounded-md transition-colors">
              Get a Free Quote
            </Link>
            <Link to="/gallery" className="bg-gray-200 hover:bg-gray-300 text-wrap-blue px-8 py-3 rounded-md transition-colors">
              View Our Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegionalPageContent;
