
export interface Installer {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  specialties: string[];
  isOurShop?: boolean;
  isPremium?: boolean;
  premiumUntil?: string; // Date the premium subscription expires
  featured?: boolean; // Whether this installer should be featured at the top
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'premium_listing' | 'wrap_material' | 'design' | 'protection' | 'shipping' | 'merchandise';
  term?: '1_month' | '3_months' | '6_months' | '12_months'; // For subscription-based items
  featured?: boolean;
  bestValue?: boolean;
  image?: string;
  color?: string; // Added for color selection
}

export interface CartItem extends ShopItem {
  quantity: number;
}

export interface MembershipUser {
  id: string;
  email: string;
  fullName: string;
  company?: string;
  isPremium: boolean;
  premiumUntil?: string;
  joinDate: string;
}
