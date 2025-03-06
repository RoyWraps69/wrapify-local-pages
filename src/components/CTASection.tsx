
import React from 'react';
import { Phone, Mail, ArrowRight, Check, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTownByName } from '@/utils/townData';

interface CTASectionProps {
  townName?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ townName = 'Chicago' }) => {
  // Get the town's government website URL and data
  const townData = getTownByName(townName);
  const townUrl = townData?.governmentUrl || `https://www.google.com/search?q=${townName}+government+website`;
  
  return (
    <section className="bg-wrap-blue py-16 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 text-center max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4">
            <MapPin className="inline-block mr-1 h-4 w-4" /> Professional Vehicle Wraps & Protection in {townName}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-white">
            Ready to Transform & Protect Your Vehicle in {townName}?
          </h2>
          <p className="text-wrap-light/90 text-lg mb-8 max-w-3xl mx-auto">
            Get in touch with Chicago Fleet Wraps today for a free consultation and quote. 
            Our team of vehicle wrap and protection experts serving {townName} is ready to help you create the perfect 
            commercial fleet wraps, color change wraps, ceramic coatings, or paint protection film solution for your business fleet or personal vehicle.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white/10 p-6 rounded-lg text-left hover:bg-white/15 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Our {townName} Vehicle Wraps?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-wrap-light">Premium 3M & Avery Dennison materials for exceptional durability</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-wrap-light">Expert installation by certified professionals serving {townName}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-wrap-light">Custom design services to match your brand perfectly</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-wrap-red mr-2 flex-shrink-0 mt-1" size={18} />
                  <span className="text-wrap-light">5+ year warranty on all {townName} vehicle wrap installations</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/services" className="btn-secondary w-full text-center flex items-center justify-center">
                  <span>Explore {townName} Services</span>
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-left hover:bg-white/15 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Our {townName} Wrap Experts</h3>
              <p className="text-wrap-light mb-4">Three easy ways to reach our {townName} vehicle wrap specialists:</p>
              <div className="space-y-4">
                <a href="tel:+13125971286" className="flex items-center text-white hover:text-wrap-red transition-colors">
                  <Phone size={18} className="mr-2" />
                  <span>312-597-1286 (Call directly)</span>
                </a>
                <Link to="/contact" className="flex items-center text-white hover:text-wrap-red transition-colors">
                  <Mail size={18} className="mr-2" />
                  <span>Send us a message online</span>
                </Link>
                <div className="pt-2">
                  <p className="text-wrap-light text-sm mb-2">Or get started right away:</p>
                  <Link to="/contact" className="btn-primary w-full flex items-center justify-center">
                    <span>Request Your Free {townName} Quote</span>
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="tel:+13125971286" className="btn-secondary flex items-center justify-center gap-2 group">
              <Phone size={18} className="group-hover:animate-bounce" />
              <span>Call For {townName} Service</span>
            </a>
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 group">
              <Mail size={18} />
              <span>Get a Free {townName} Quote</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-wrap-light/70 text-sm">
            Serving {townName} and surrounding areas with premium <a href="https://www.3m.com/3M/en_US/graphics-signage-us/graphics-films/" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">3M</a> and <a href="https://graphics.averydennison.com" target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">Avery Dennison</a> vehicle wrap, ceramic coating, and paint protection film services. 
            We offer mobile service throughout {townName} and the greater Chicago area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
