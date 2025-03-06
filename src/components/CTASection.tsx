
import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  townName?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ townName = 'Chicago' }) => {
  return (
    <section className="bg-wrap-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="glass-card p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-semibold mb-6 text-white">
            Ready to Transform Your Vehicle?
          </h2>
          <p className="text-wrap-light/90 text-lg mb-8">
            Contact us today for a free consultation and quote on car wraps, 
            graphics, or paint protection for your vehicle.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
            <a href="tel:+13125971286" className="btn-secondary flex items-center justify-center gap-2">
              <Phone size={18} />
              <span>Call Us</span>
            </a>
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2">
              <Mail size={18} />
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
