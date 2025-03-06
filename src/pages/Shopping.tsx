
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import MiniCart from '@/components/print-ship/shopping-cart/MiniCart';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Package, Shield, Palette, Truck } from 'lucide-react';

const ShoppingPage = () => {
  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/shopping" />
        <meta name="keywords" content="vehicle wraps, car wraps, fleet wraps, ceramic coating, paint protection film, wrap materials, premium installation, wrap design services" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Shop Wrap Materials, Design Services & Premium Products"
        pageDescription="Shop professional-grade vehicle wrap materials, design services, and premium installation services. Everything you need for a high-quality vehicle wrap transformation."
        pageUrl="https://wrappingtheworld.com/shopping"
      />
      
      <Navbar />
      
      <ShoppingCartProvider>
        <main className="pt-20 md:pt-24 overflow-x-hidden">
          <section className="py-12 bg-gradient-to-br from-wrap-blue to-wrap-blue/90 text-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                    Premium Wrap Materials & Services
                  </h1>
                  <p className="text-white/90 text-lg mb-6 max-w-xl">
                    Everything you need for professional vehicle transformations. From high-quality wrap materials to expert design services and installation support.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#wrap-materials" className="btn-secondary">
                      Explore Materials
                    </a>
                    <a href="#premium-services" className="btn-primary">
                      View Services
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 shadow-xl">
                    <MiniCart />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="wrap-materials" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                  Premium Wrap Materials
                </h2>
                <p className="text-wrap-grey max-w-2xl mx-auto">
                  Professional-grade vinyl materials for every vehicle wrap project. Available for direct purchase or print-and-ship service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Premium Cast Vinyl */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Package size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Premium Cast Vinyl</h3>
                    <p className="text-wrap-grey mb-4">Top-tier conformable vinyl for complex curves and long-term applications. 5-7 year durability.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-wrap-blue">$19.99/sqft</span>
                      <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Color Change Wrap */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center">
                    <Palette size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Color Change Wrap</h3>
                    <p className="text-wrap-grey mb-4">Premium color and finish options including matte, satin, gloss, metallic, and color-shift effects.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-wrap-blue">$22.99/sqft</span>
                      <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Paint Protection Film */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
                  <div className="h-48 bg-gradient-to-r from-slate-500 to-zinc-600 flex items-center justify-center">
                    <Shield size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Paint Protection Film</h3>
                    <p className="text-wrap-grey mb-4">Self-healing clear protection film for high-impact areas. Prevents chips, scratches and road debris damage.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-semibold text-wrap-blue">$34.99/sqft</span>
                      <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="premium-services" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
                  Professional Services
                </h2>
                <p className="text-wrap-grey max-w-2xl mx-auto">
                  Expert design, installation and premium services to ensure your vehicle wrap project turns out perfectly.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Design Services */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Palette className="text-wrap-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Custom Design Services</h3>
                      <p className="text-wrap-grey mb-4">Professional design services for your vehicle wrap. Our designers will create a custom design based on your requirements.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-wrap-blue">From $299</span>
                        <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Installation */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Truck className="text-wrap-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Premium Installer Listing</h3>
                      <p className="text-wrap-grey mb-4">Get featured placement in our installer directory. Increase visibility and receive more client inquiries.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-wrap-blue">$9.99/month</span>
                        <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ceramic Coating */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="text-wrap-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">Ceramic Coating Add-On</h3>
                      <p className="text-wrap-grey mb-4">Professional-grade ceramic coating to protect your wrap and enhance its appearance with added gloss and protection.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-wrap-blue">$299</span>
                        <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Installation Kit */}
                <div className="bg-white rounded-xl shadow-soft border border-gray-100 p-6 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-wrap-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Package className="text-wrap-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">DIY Installation Kit</h3>
                      <p className="text-wrap-grey mb-4">Complete toolkit for DIY installation including squeegee, heat gun, trimming tools, and step-by-step guide.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-semibold text-wrap-blue">$89.99</span>
                        <Button variant="outline" className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-wrap-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Ready to Transform Your Vehicle?</h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Browse our premium materials and professional services to get started with your vehicle transformation project today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-wrap-red hover:bg-wrap-red/90 text-white">
                  View Your Cart
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Continue Shopping
                </Button>
              </div>
            </div>
          </section>
        </main>
      </ShoppingCartProvider>
      
      <Footer />
    </>
  );
};

export default ShoppingPage;
