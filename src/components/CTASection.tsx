
import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTownByName } from '@/utils/townData';

interface CTASectionProps {
  townName?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ townName = 'Chicago' }) => {
  // Get the town's government website URL
  const townData = getTownByName(townName);
  const townUrl = townData?.governmentUrl || `https://www.google.com/search?q=${townName}+government+website`;
  
  return (
    <section className="bg-wrap-blue py-16 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 text-center max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1 bg-wrap-red/10 text-wrap-red rounded-full text-sm font-medium mb-4">
            Professional Vehicle Wraps & Protection in <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-red hover:text-wrap-blue underline">{townName}</a>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6 text-white">
            Ready to Transform & Protect Your Vehicle in <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-wrap-red/90 underline">{townName}</a>?
          </h2>
          <p className="text-wrap-light/90 text-lg mb-8 max-w-3xl mx-auto">
            Get in touch with Chicago Fleet Wraps today for a free consultation and quote. 
            Our team of vehicle wrap and protection experts serving <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">{townName}</a> is ready to help you create the perfect 
            commercial fleet wraps, color change wraps, ceramic coatings, or paint protection film solution for your business fleet or personal vehicle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="tel:+13125555555" className="btn-secondary flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>Call For <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-blue hover:text-wrap-red underline">{townName}</a> Service</span>
            </a>
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              <Mail size={18} />
              <span>Get a Free <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-wrap-light underline">{townName}</a> Quote</span>
            </Link>
          </div>
          <p className="text-wrap-light/70 text-sm">
            Serving <a href={townUrl} target="_blank" rel="noopener noreferrer" className="text-wrap-light hover:text-white underline">{townName}</a> and surrounding areas with premium vehicle wrap, ceramic coating, and paint protection film services. 
            We offer mobile service throughout the greater Chicago area.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
