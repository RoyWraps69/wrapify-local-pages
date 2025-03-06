
import { Installer } from '../types/installer';

export const installers: Installer[] = [
  {
    id: 1,
    name: "Wrapping The World Chicago",
    city: "Chicago",
    state: "IL",
    address: "4711 N. Lamon Ave, Chicago, IL 60630",
    phone: "(312) 597-1286",
    email: "info@wrappingtheworld.com",
    website: "wrappingtheworld.com",
    specialties: ["Commercial Fleet", "Color Change", "PPF", "Ceramic Coating"],
    isOurShop: true
  },
  {
    id: 2,
    name: "NYC Vehicle Wrapping",
    city: "New York",
    state: "NY",
    address: "127 W 26th St, New York, NY 10001",
    phone: "(212) 555-6789",
    email: "info@nycvehiclewrapping.com",
    website: "nycvehiclewrapping.com",
    specialties: ["Luxury Vehicles", "Commercial Fleet", "Ceramic Coating"],
    isPremium: true,
    featured: true,
    premiumUntil: "2023-12-31"
  },
  {
    id: 3,
    name: "LA Wrap Kings",
    city: "Los Angeles",
    state: "CA",
    address: "7825 Santa Monica Blvd, Los Angeles, CA 90046",
    phone: "(323) 555-4321",
    email: "hello@lawrapkings.com",
    website: "lawrapkings.com",
    specialties: ["Custom Designs", "High-End Vehicles", "PPF"],
    isPremium: true,
    premiumUntil: "2023-11-15"
  },
  {
    id: 4,
    name: "Houston Wraps & Graphics",
    city: "Houston",
    state: "TX",
    address: "5120 Westheimer Rd, Houston, TX 77056",
    phone: "(713) 555-7890",
    email: "contact@houstonwraps.com",
    website: "houstonwraps.com",
    specialties: ["Fleet Graphics", "Commercial Vehicles", "Rust Protection"]
  },
  {
    id: 5,
    name: "Phoenix Auto Films",
    city: "Phoenix",
    state: "AZ",
    address: "2501 E Camelback Rd, Phoenix, AZ 85016",
    phone: "(602) 555-3456",
    email: "info@phoenixautofilms.com",
    website: "phoenixautofilms.com",
    specialties: ["Heat-Resistant Wraps", "Commercial Fleet", "Ceramic Coating"],
    isPremium: true,
    premiumUntil: "2023-10-30"
  },
  {
    id: 6,
    name: "Philly Vehicle Graphics",
    city: "Philadelphia",
    state: "PA",
    address: "1218 Chestnut St, Philadelphia, PA 19107",
    phone: "(215) 555-8901",
    email: "info@phillyvehiclegraphics.com",
    website: "phillyvehiclegraphics.com",
    specialties: ["Fleet Branding", "Color Change", "PPF"]
  },
  {
    id: 7,
    name: "San Antonio Wraps",
    city: "San Antonio",
    state: "TX",
    address: "9910 San Pedro Ave, San Antonio, TX 78216",
    phone: "(210) 555-2345",
    email: "info@sanantoniowraps.com",
    website: "sanantoniowraps.com",
    specialties: ["Commercial Vehicles", "Custom Designs", "PPF"]
  },
  {
    id: 8,
    name: "San Diego Auto Styling",
    city: "San Diego",
    state: "CA",
    address: "7710 Balboa Ave, San Diego, CA 92111",
    phone: "(619) 555-6789",
    email: "info@sdautostyling.com",
    website: "sdautostyling.com",
    specialties: ["Marine Wraps", "Commercial Fleet", "Ceramic Coating"]
  },
  {
    id: 9,
    name: "Dallas Vehicle Wraps",
    city: "Dallas",
    state: "TX",
    address: "1845 Woodall Rodgers Fwy, Dallas, TX 75201",
    phone: "(214) 555-0123",
    email: "info@dallasvehiclewraps.com",
    website: "dallasvehiclewraps.com",
    specialties: ["Commercial Vehicles", "Color Change", "PPF"]
  },
  {
    id: 10,
    name: "San Jose Auto Films",
    city: "San Jose",
    state: "CA",
    address: "1701 Junction Ct, San Jose, CA 95112",
    phone: "(408) 555-4567",
    email: "info@sanjoseautofilms.com",
    website: "sanjoseautofilms.com",
    specialties: ["Tech Fleet Branding", "Commercial Vehicles", "Ceramic Coating"]
  },
  {
    id: 11,
    name: "Austin Vehicle Graphics",
    city: "Austin",
    state: "TX",
    address: "2900 S Congress Ave, Austin, TX 78704",
    phone: "(512) 555-8901",
    email: "info@austinvehiclegraphics.com",
    website: "austinvehiclegraphics.com",
    specialties: ["Custom Design", "Commercial Fleet", "PPF"]
  },
  {
    id: 12,
    name: "Jacksonville Wraps",
    city: "Jacksonville",
    state: "FL",
    address: "9735 Gate Pkwy N, Jacksonville, FL 32246",
    phone: "(904) 555-2345",
    email: "info@jacksonvillewraps.com",
    website: "jacksonvillewraps.com",
    specialties: ["Marine Wraps", "Commercial Vehicles", "PPF"]
  },
  {
    id: 13,
    name: "Columbus Auto Styling",
    city: "Columbus",
    state: "OH",
    address: "3900 Morse Rd, Columbus, OH 43219",
    phone: "(614) 555-6789",
    email: "info@columbusautostyling.com",
    website: "columbusautostyling.com",
    specialties: ["Fleet Graphics", "Color Change", "Ceramic Coating"]
  },
  {
    id: 14,
    name: "Charlotte Vehicle Wraps",
    city: "Charlotte",
    state: "NC",
    address: "6201 Fairview Rd, Charlotte, NC 28210",
    phone: "(704) 555-0123",
    email: "info@charlottevehiclewraps.com",
    website: "charlottevehiclewrapping.com",
    specialties: ["Commercial Fleet", "Custom Designs", "PPF"]
  },
  {
    id: 15,
    name: "Seattle Auto Films",
    city: "Seattle",
    state: "WA",
    address: "601 Westlake Ave N, Seattle, WA 98109",
    phone: "(206) 555-4567",
    email: "info@seattleautofilms.com",
    website: "seattleautofilms.com",
    specialties: ["Commercial Vehicles", "Marine Wraps", "Ceramic Coating"]
  },
];

export const shopItems = [
  // Premium Listing Items
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
  
  // Wrap Material Items
  {
    id: 'wrap_standard',
    name: 'Standard Wrap Material',
    description: '5-year vinyl wrap material',
    price: 8.99,
    category: 'wrap_material',
  },
  {
    id: 'wrap_premium',
    name: 'Premium Wrap Material',
    description: '7-year premium vinyl wrap material',
    price: 12.99,
    category: 'wrap_material',
  },
  
  // Protection Items
  {
    id: 'ceramic_coating',
    name: 'Ceramic Coating Protection',
    description: 'Advanced ceramic coating for wrap protection',
    price: 299.00,
    category: 'protection',
  },
  {
    id: 'ppf',
    name: 'Paint Protection Film (PPF)',
    description: 'Additional protection for high-impact areas',
    price: 349.00,
    category: 'protection',
  },
  {
    id: 'insurance',
    name: 'Wrap Insurance',
    description: '1-year coverage against damage',
    price: 49.99,
    category: 'protection',
  },
  
  // Design Services
  {
    id: 'design_basic',
    name: 'Basic Design Service',
    description: 'Simple design customization',
    price: 199.00,
    category: 'design',
  },
  {
    id: 'design_premium',
    name: 'Premium Design Service',
    description: 'Custom design with unlimited revisions',
    price: 499.00,
    category: 'design',
  },
  
  // Shipping Options
  {
    id: 'shipping_standard',
    name: 'Standard Shipping',
    description: '5-7 business days',
    price: 15.99,
    category: 'shipping',
  },
  {
    id: 'shipping_express',
    name: 'Express Shipping',
    description: '2-3 business days',
    price: 29.99,
    category: 'shipping',
  },
  {
    id: 'shipping_overnight',
    name: 'Overnight Shipping',
    description: 'Next business day delivery',
    price: 49.99,
    category: 'shipping',
  },
];
