
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-wrap-blue to-wrap-red text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Transform Your Vehicle?</h2>
        <p className="text-white/90 text-xl max-w-3xl mx-auto mb-8">
          Get started with our Print & Ship service today and receive your premium vehicle wrap materials anywhere in the United States.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#print-ship" className="inline-flex items-center justify-center gap-2 bg-white text-wrap-blue px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            <ShoppingCart className="h-5 w-5" />
            Start Your Custom Order
          </a>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-medium backdrop-blur-sm border border-white/10">
            <Phone className="h-5 w-5" />
            Speak with a Wrap Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
