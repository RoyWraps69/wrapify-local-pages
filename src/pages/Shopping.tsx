import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShoppingCartProvider } from '@/components/print-ship/shopping-cart/ShoppingCart';
import MiniCart from '@/components/print-ship/shopping-cart/MiniCart';
import SEOSchema from '@/components/SEOSchema';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Package, Shield, Palette, Truck, Shirt } from 'lucide-react';
import { shopItems } from '@/components/print-ship/data/installers';
import { ShopItem } from '@/components/print-ship/types/installer';
import { useShoppingCart } from '@/components/print-ship/shopping-cart/ShoppingCart';

// Helper component for product categories
const CategorySection = ({ title, description, children }: { 
  title: string;
  description: string;
  children: React.ReactNode;
}) => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wrap-blue mb-4">
          {title}
        </h2>
        <p className="text-wrap-grey max-w-2xl mx-auto">
          {description}
        </p>
      </div>
      {children}
    </div>
  </section>
);

// Product card component
const ProductCard = ({ item, onAddToCart }: { 
  item: ShopItem;
  onAddToCart: (item: ShopItem) => void;
}) => {
  let icon;
  let gradientClass = "bg-gradient-to-r from-blue-500 to-purple-500";
  
  switch (item.category) {
    case 'wrap_material':
      icon = <Package size={64} className="text-white" />;
      break;
    case 'design':
      icon = <Palette size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-amber-400 to-orange-500";
      break;
    case 'protection':
      icon = <Shield size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-slate-500 to-zinc-600";
      break;
    case 'merchandise':
      icon = <Shirt size={64} className="text-white" />;
      gradientClass = "bg-gradient-to-r from-wrap-blue to-blue-600";
      break;
    default:
      icon = <Package size={64} className="text-white" />;
  }
  
  return (
    <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-all hover:shadow-lg">
      <div className={`h-48 ${gradientClass} flex items-center justify-center`}>
        {item.image ? (
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        ) : (
          icon
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold mb-2 text-wrap-blue">{item.name}</h3>
        <p className="text-wrap-grey mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-wrap-blue">${item.price.toFixed(2)}</span>
          <Button 
            variant="outline" 
            className="border-wrap-red text-wrap-red hover:bg-wrap-red hover:text-white"
            onClick={() => onAddToCart(item)}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

// Filter items by category
const filterItemsByCategory = (items: ShopItem[], category: 'premium_listing' | 'wrap_material' | 'design' | 'protection' | 'shipping' | 'merchandise') => {
  return items.filter(item => item.category === category);
};

const ShoppingPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Local component that uses the shopping cart context
  const ShoppingContent = () => {
    const { addItem } = useShoppingCart();
    
    const handleAddToCart = (item: ShopItem) => {
      addItem(item);
    };
    
    const wrapMaterials = filterItemsByCategory(shopItems, 'wrap_material');
    const protectionItems = filterItemsByCategory(shopItems, 'protection');
    const designServices = filterItemsByCategory(shopItems, 'design');
    const merchandiseItems = filterItemsByCategory(shopItems, 'merchandise');
    
    return (
      <main className="pt-20 md:pt-24 overflow-x-hidden">
        <section className="py-12 bg-gradient-to-br from-wrap-blue to-wrap-blue/90 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">
                  Premium Wrap Materials & Services
                </h1>
                <p className="text-white/90 text-lg mb-6 max-w-xl">
                  Everything you need for professional vehicle transformations. From high-quality wrap materials to expert design services and installer support.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={() => setActiveCategory('wrap_material')} 
                    variant="secondary"
                  >
                    Explore Materials
                  </Button>
                  <Button 
                    onClick={() => setActiveCategory('merchandise')} 
                    variant="default"
                    className="bg-wrap-red hover:bg-wrap-red/90"
                  >
                    View Merchandise
                  </Button>
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

        {/* Product Categories Navigation */}
        <div className="bg-gray-50 py-4 sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant={activeCategory === 'all' ? "default" : "outline"}
                onClick={() => setActiveCategory('all')}
              >
                All Products
              </Button>
              <Button 
                variant={activeCategory === 'merchandise' ? "default" : "outline"}
                onClick={() => setActiveCategory('merchandise')}
              >
                <Shirt className="mr-2 h-4 w-4" /> Merchandise
              </Button>
              <Button 
                variant={activeCategory === 'wrap_material' ? "default" : "outline"}
                onClick={() => setActiveCategory('wrap_material')}
              >
                <Package className="mr-2 h-4 w-4" /> Wrap Materials
              </Button>
              <Button 
                variant={activeCategory === 'protection' ? "default" : "outline"}
                onClick={() => setActiveCategory('protection')}
              >
                <Shield className="mr-2 h-4 w-4" /> Protection
              </Button>
              <Button 
                variant={activeCategory === 'design' ? "default" : "outline"}
                onClick={() => setActiveCategory('design')}
              >
                <Palette className="mr-2 h-4 w-4" /> Design Services
              </Button>
            </div>
          </div>
        </div>

        {/* Merchandise Section */}
        {(activeCategory === 'all' || activeCategory === 'merchandise') && (
          <CategorySection 
            title="Wrapping The World Merchandise" 
            description="Show your love for vehicle wraps with our premium quality t-shirts featuring the Wrapping The World logo."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {merchandiseItems.map(item => (
                <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </CategorySection>
        )}

        {/* Wrap Materials Section */}
        {(activeCategory === 'all' || activeCategory === 'wrap_material') && (
          <CategorySection 
            title="Premium Wrap Materials" 
            description="Professional-grade vinyl materials for every vehicle wrap project. Available for direct purchase or print-and-ship service."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wrapMaterials.map(item => (
                <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </CategorySection>
        )}

        {/* Protection Products Section */}
        {(activeCategory === 'all' || activeCategory === 'protection') && (
          <CategorySection 
            title="Protection Products" 
            description="Keep your vehicle wrap looking fresh and protected with these premium protection options."
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {protectionItems.map(item => (
                <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </CategorySection>
        )}

        {/* Design Services Section */}
        {(activeCategory === 'all' || activeCategory === 'design') && (
          <CategorySection 
            title="Professional Design Services" 
            description="Expert design services to ensure your vehicle wrap project turns out perfectly."
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {designServices.map(item => (
                <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </CategorySection>
        )}

        <section className="py-12 bg-wrap-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Ready to Transform Your Vehicle?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Browse our premium materials and professional services to get started with your vehicle transformation project today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-wrap-red hover:bg-wrap-red/90 text-white"
                onClick={() => setActiveCategory('merchandise')}
              >
                Shop Merchandise
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => setActiveCategory('all')}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </section>
      </main>
    );
  };

  return (
    <>
      <Helmet>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://wrappingtheworld.com/shopping" />
        <meta name="keywords" content="vehicle wraps, car wraps, fleet wraps, ceramic coating, paint protection film, wrap materials, premium installation, wrap design services, tshirts, merchandise" />
        <meta name="revisit-after" content="3 days" />
      </Helmet>
      
      <SEOSchema 
        townName="Chicago"
        pageTitle="Wrapping The World | Shop Wrap Materials, Merchandise & Services"
        pageDescription="Shop professional-grade vehicle wrap materials, merchandise, design services, and premium installation services. Everything you need for a high-quality vehicle wrap transformation."
        pageUrl="https://wrappingtheworld.com/shopping"
      />
      
      <Navbar />
      
      <ShoppingCartProvider>
        <ShoppingContent />
      </ShoppingCartProvider>
      
      <Footer />
    </>
  );
};

export default ShoppingPage;
