
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
  image?: string; // Added image property
}

export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'wrap_material' | 'design' | 'protection' | 'merchandise' | 'premium_listing' | 'shipping';
  image?: string;
  images?: string[]; // Added array of images
  color?: string;
  term?: '1_month' | '3_months' | '6_months' | '12_months';
  featured?: boolean;
  bestValue?: boolean;
  features?: string[];
  originalPrice?: number;
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
