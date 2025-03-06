
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-serif font-bold text-2xl text-wrap-blue">Wrapping The World</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Services
          </Link>
          <Link to="/gallery" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Gallery
          </Link>
          <Link to="/print-ship" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Print & Ship
          </Link>
          <Link to="/blog" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Blog
          </Link>
          <Link to="/about" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-wrap-dark font-medium hover:text-wrap-red transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a 
            href="tel:+13125971286" 
            className="flex items-center space-x-2 text-wrap-blue hover:text-wrap-red transition-colors"
          >
            <Phone size={18} />
            <span className="font-medium">312-597-1286</span>
          </a>
          <Link 
            to="/contact" 
            className="btn-primary whitespace-nowrap"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-wrap-blue" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "mobile-menu fixed top-[60px] left-0 w-full h-screen bg-white z-40 md:hidden p-6",
          isMobileMenuOpen ? "open" : "closed"
        )}
      >
        <div className="flex flex-col space-y-6">
          <Link 
            to="/" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/print-ship" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Print & Ship
          </Link>
          <Link 
            to="/blog" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/about" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-wrap-blue font-medium text-xl py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 flex flex-col space-y-4">
            <a 
              href="tel:+13125971286" 
              className="flex items-center space-x-2 text-wrap-blue"
            >
              <Phone size={18} />
              <span className="font-medium">312-597-1286</span>
            </a>
            <Link 
              to="/contact" 
              className="btn-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
