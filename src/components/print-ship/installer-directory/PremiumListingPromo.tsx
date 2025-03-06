
import React, { useState } from 'react';
import { Award, Check, ShoppingCart, TrendingUp, BadgePercent, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShopItem } from '../types/installer';
import { useToast } from '@/components/ui/use-toast';
import { useShoppingCart } from '../shopping-cart/ShoppingCart';
import { Link } from 'react-router-dom';

const PremiumListingPromo: React.FC = () => {
  const { toast } = useToast();
  const { addItem } = useShoppingCart();
  const [selectedTerm, setSelectedTerm] = useState<'1_month' | '3_months' | '6_months' | '12_months'>('1_month');
  
  const premiumPlans: ShopItem[] = [
    {
      id: 'premium_1_month',
      name: 'Premium Listing - 1 Month',
      description: 'Boost your visibility for 1 month',
      price: 9.99,
      category: 'premium_listing',
      term: '1_month',
    },
    {
      id: 'premium_3_months',
      name: 'Premium Listing - 3 Months',
      description: 'Boost your visibility for 3 months',
      price: 27.99,
      category: 'premium_listing',
      term: '3_months',
    },
    {
      id: 'premium_6_months',
      name: 'Premium Listing - 6 Months',
      description: 'Boost your visibility for 6 months',
      price: 53.99,
      category: 'premium_listing',
      term: '6_months',
      bestValue: true,
    },
    {
      id: 'premium_12_months',
      name: 'Premium Listing - 12 Months',
      description: 'Boost your visibility for 12 months',
      price: 99.99,
      category: 'premium_listing',
      term: '12_months',
      featured: true,
    },
  ];

  const handleAddToCart = (item: ShopItem) => {
    addItem(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const getDiscountPercentage = (term: '1_month' | '3_months' | '6_months' | '12_months') => {
    switch (term) {
      case '3_months': return 7; // ~7% discount compared to monthly
      case '6_months': return 10; // 10% discount
      case '12_months': return 17; // ~17% discount
      default: return 0;
    }
  };

  const getPlan = (term: '1_month' | '3_months' | '6_months' | '12_months') => {
    return premiumPlans.find(plan => plan.term === term)!;
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="mb-6 text-center">
        <h4 className="text-xl font-semibold text-wrap-blue mb-3 flex items-center justify-center">
          <Award className="text-amber-500 mr-2" /> Upgrade to a Premium Listing
        </h4>
        <p className="text-wrap-grey mb-4">
          Stand out from the competition and increase your customer inquiries with a premium installer listing.
        </p>
      </div>
      
      <div className="bg-amber-50 rounded-lg p-4 mb-6">
        <h5 className="font-semibold text-amber-800 mb-3 flex items-center">
          <Trophy className="mr-2 text-amber-600" /> Why Go Premium?
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-start">
            <TrendingUp className="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <span className="font-medium">3x More Leads</span>: Premium listings receive up to 3x more customer inquiries
            </p>
          </div>
          <div className="flex items-start">
            <Award className="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <span className="font-medium">Priority Placement</span>: Appear at the top of search results
            </p>
          </div>
          <div className="flex items-start">
            <Check className="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <span className="font-medium">Trust Badge</span>: Premium badge builds customer confidence
            </p>
          </div>
          <div className="flex items-start">
            <BadgePercent className="w-4 h-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
            <p className="text-sm text-amber-800">
              <span className="font-medium">Material Discounts</span>: Exclusive discounts on wrap materials
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h5 className="font-semibold text-wrap-blue mb-3">Choose Your Plan</h5>
        <div className="flex flex-wrap gap-2">
          {premiumPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedTerm(plan.term!)}
              className={`flex-1 py-2 px-3 rounded-md text-sm border transition-all ${
                selectedTerm === plan.term
                  ? "border-amber-500 bg-amber-50 text-amber-900"
                  : "border-gray-200 hover:border-amber-300"
              } ${plan.featured ? "relative overflow-hidden" : ""}`}
            >
              {plan.featured && (
                <div className="absolute top-0 right-0 bg-wrap-red text-white text-[10px] px-1.5 py-0.5 transform rotate-0 origin-top-right">
                  POPULAR
                </div>
              )}
              {plan.bestValue && (
                <div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] px-1.5 py-0.5 transform rotate-0 origin-top-right">
                  BEST VALUE
                </div>
              )}
              <span className="block font-medium">{plan.term?.replace("_", " ").replace("months", "mo")}</span>
              <span className="block">${plan.price.toFixed(2)}</span>
              {getDiscountPercentage(plan.term!) > 0 && (
                <span className="text-green-600 text-xs">Save {getDiscountPercentage(plan.term!)}%</span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Selected Plan:</span>
          <span className="text-sm font-bold">
            {selectedTerm.replace("_", " ").replace("months", " Months").replace("month", " Month")}
          </span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium">Price:</span>
          <span className="text-xl font-bold text-wrap-blue">
            ${getPlan(selectedTerm).price.toFixed(2)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            className="w-full bg-amber-500 hover:bg-amber-600"
            onClick={() => handleAddToCart(getPlan(selectedTerm))}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          
          <Link
            to={`/shopping/${getPlan(selectedTerm).id}`}
            className="flex items-center justify-center w-full py-2 px-4 border border-amber-500 text-amber-600 rounded-md hover:bg-amber-50 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
      
      <p className="text-xs text-center text-wrap-grey">
        No automatic renewals. We'll notify you before your premium listing expires.
      </p>
    </div>
  );
};

export default PremiumListingPromo;
