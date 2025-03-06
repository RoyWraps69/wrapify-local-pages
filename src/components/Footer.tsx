import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wrap-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">Chicago Fleet Wraps</h3>
          <p className="mb-6 text-wrap-light/80">
            Professional vehicle wrapping services in Chicago and the surrounding areas. Transforming vehicles with premium vinyl wraps since 2010.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-wrap-light hover:text-wrap-red transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" className="text-wrap-light hover:text-wrap-red transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" className="text-wrap-light hover:text-wrap-red transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" className="text-wrap-light hover:text-wrap-red transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-medium mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Project Gallery
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Services */}
        <div>
          <h4 className="text-xl font-medium mb-6">Our Services</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/services/commercial-fleet-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Commercial Fleet Wraps
              </Link>
            </li>
            <li>
              <Link to="/services/color-change-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Color Change Wraps
              </Link>
            </li>
            <li>
              <Link to="/services/custom-vehicle-wraps" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Custom Vehicle Designs
              </Link>
            </li>
            <li>
              <Link to="/services/vehicle-graphics" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Vehicle Graphics
              </Link>
            </li>
            <li>
              <Link to="/services/paint-protection-film" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                Paint Protection Films
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-medium mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-wrap-red flex-shrink-0 mt-1" />
              <span className="text-wrap-light/80">
                4711 N. Lamon Ave, Chicago, IL 60630
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-wrap-red flex-shrink-0" />
              <a href="tel:+13125971286" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                312-597-1286
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-wrap-red flex-shrink-0" />
              <a href="mailto:roy@chicagofleetwraps.com" className="text-wrap-light/80 hover:text-wrap-red transition-colors">
                roy@chicagofleetwraps.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <a href="/contact" className="btn-secondary">
              Request a Quote
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-wrap-light/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chicago Fleet Wraps. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-wrap-light/70">
            <a href="/privacy-policy" className="hover:text-wrap-red transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:text-wrap-red transition-colors">
              Terms of Service
            </a>
            <a href="/sitemap" className="hover:text-wrap-red transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
