
// Define the vehicle category and pricing structures
export interface VehicleSize {
  category: string;
  description: string;
  squareFeet: number;
  basePrice: number;
  examples: string;
}

export const vehicleSizes: VehicleSize[] = [
  {
    category: "Compact",
    description: "Small cars and compact vehicles",
    squareFeet: 220,
    basePrice: 2160, // Increased by 35% from 1600
    examples: "Honda Civic, Toyota Corolla, VW Golf"
  },
  {
    category: "Mid-Size",
    description: "Medium sedans and small crossovers",
    squareFeet: 280,
    basePrice: 2835, // Increased by 35% from 2100
    examples: "Toyota Camry, Honda Accord, Mazda CX-5"
  },
  {
    category: "Full-Size",
    description: "Large sedans and mid-size SUVs",
    squareFeet: 340,
    basePrice: 3578, // Increased by 35% from 2650
    examples: "Chevy Impala, Ford Explorer, Jeep Grand Cherokee"
  },
  {
    category: "Large SUV",
    description: "Full-size SUVs and small vans",
    squareFeet: 420,
    basePrice: 4320, // Increased by 35% from 3200
    examples: "Chevy Tahoe, Ford Expedition, Toyota Sienna"
  },
  {
    category: "Cargo Van",
    description: "Delivery vans and cargo vehicles",
    squareFeet: 520,
    basePrice: 5535, // Increased by 35% from 4100
    examples: "Ford Transit, Mercedes Sprinter, Ram ProMaster"
  },
  {
    category: "Box Truck",
    description: "Commercial box trucks",
    squareFeet: 780,
    basePrice: 7830, // Increased by 35% from 5800
    examples: "Isuzu NPR, Freightliner M2, Ford F-650 Box"
  }
];

export interface WrapMaterial {
  id: string;
  name: string;
  description: string;
  pricePerSqFt: number;
  durabilityYears: number;
  features: string[];
}

export const wrapMaterials: WrapMaterial[] = [
  {
    id: "standard",
    name: "Standard Vinyl",
    description: "Quality vinyl with 5-7 year durability",
    pricePerSqFt: 10.13, // Increased by 35% from 7.50
    durabilityYears: 5,
    features: ["Digitally printed graphics", "UV laminated", "Conformable to simple curves"]
  },
  {
    id: "premium",
    name: "Premium Cast Vinyl",
    description: "High-performance vinyl with 7-9 year durability",
    pricePerSqFt: 14.51, // Increased by 35% from 10.75
    durabilityYears: 7,
    features: ["Superior conformability", "Enhanced color vibrancy", "Resistant to shrinking and lifting"]
  },
  {
    id: "color-change",
    name: "Color Change Wrap",
    description: "Specialty color change films with unique finishes",
    pricePerSqFt: 18.83, // Increased by 35% from 13.95
    durabilityYears: 5,
    features: ["Matte, gloss, satin, or metallic finishes", "Air-release technology", "Highly conformable"]
  }
];

export interface DesignOption {
  id: string;
  name: string;
  description: string;
  priceAdjustment: number;
}

export const designOptions: DesignOption[] = [
  {
    id: "basic",
    name: "Basic Design",
    description: "Simple design with your logo and contact information",
    priceAdjustment: 0
  },
  {
    id: "standard",
    name: "Standard Design",
    description: "Custom design with brand elements and vehicle contour consideration",
    priceAdjustment: 473 // Increased by 35% from 350
  },
  {
    id: "premium",
    name: "Premium Design",
    description: "Full custom design with 3D mockups and multiple revision rounds",
    priceAdjustment: 1013 // Increased by 35% from 750
  }
];

export interface ShippingOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

export const shippingOptions: ShippingOption[] = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "Regular ground shipping in protective packaging",
    price: 101, // Increased by 35% from 75
    estimatedDays: "5-7 business days"
  },
  {
    id: "expedited",
    name: "Expedited Shipping",
    description: "Faster delivery with tracking and insurance",
    price: 203, // Increased by 35% from 150
    estimatedDays: "2-3 business days"
  },
  {
    id: "rush",
    name: "Rush Shipping",
    description: "Priority overnight delivery for urgent projects",
    price: 338, // Increased by 35% from 250
    estimatedDays: "1-2 business days"
  }
];

export const calculateWrapPrice = (
  vehicleSize: VehicleSize,
  material: WrapMaterial,
  designOption: DesignOption,
  shipping: ShippingOption,
  coverage: number = 1 // 1 = 100% coverage, 0.5 = 50% coverage, etc.
): { 
  subtotal: number; 
  designFee: number; 
  shippingFee: number; 
  total: number;
  pricePerSqFt: number;
  totalSqFt: number;
} => {
  const totalSqFt = vehicleSize.squareFeet * coverage;
  
  const materialCost = totalSqFt * material.pricePerSqFt;
  
  const designFee = designOption.priceAdjustment;
  
  const shippingFee = shipping.price;
  
  const subtotal = materialCost;
  
  const total = subtotal + designFee + shippingFee;
  
  const pricePerSqFt = total / totalSqFt;
  
  return {
    subtotal,
    designFee,
    shippingFee,
    total,
    pricePerSqFt,
    totalSqFt
  };
};
