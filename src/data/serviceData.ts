
export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  hero: string;
  benefits: ServiceBenefit[];
}

const serviceData: Record<string, ServiceInfo> = {
  'commercial-fleet-wraps': {
    title: 'Commercial Fleet Wraps',
    description: 'Transform your company vehicles into moving billboards with our high-quality commercial fleet wraps. We help businesses of all sizes stand out and get noticed.',
    longDescription: "Our commercial fleet wraps are designed to maximize your brand visibility on the road. Using premium vinyl materials from 3M and Avery Dennison, we create durable, eye-catching wraps that turn your vehicles into 24/7 mobile advertisements. Our design team works closely with you to develop graphics that align with your brand identity and marketing goals, ensuring a consistent and professional look across your entire fleet. Whether you have sedans, vans, trucks, or specialty vehicles, our wraps are custom-fitted for a perfect installation every time.",
    hero: '/lovable-uploads/7ac46be0-393d-4b31-a43a-37b37644190f.png', // Bratcher fleet vans
    benefits: [
      {
        title: 'Increased Brand Visibility',
        description: 'Generate thousands of impressions daily as your vehicles travel throughout your service area.'
      },
      {
        title: 'Professional Appearance',
        description: 'Present a cohesive, professional image that builds trust with customers.'
      },
      {
        title: 'Cost-Effective Advertising',
        description: 'Lower cost-per-impression than traditional advertising methods like billboards or print ads.'
      },
      {
        title: 'Vehicle Protection',
        description: 'High-quality vinyl helps protect your vehicles from minor scratches and road debris.'
      }
    ]
  },
  'ceramic-coatings': {
    title: 'Ceramic Coatings',
    description: "Protect your vehicle's paint with our long-lasting ceramic coatings. These hydrophobic coatings repel water, resist scratches, and make cleaning easier while keeping your car looking shiny.",
    longDescription: "Our advanced ceramic coatings create a permanent bond with your vehicle's paint, forming a protective layer that shields against environmental contaminants, UV damage, and minor scratches. The hydrophobic properties cause water to bead and roll off the surface, taking dirt and grime with it for easier cleaning. Unlike traditional waxes that need frequent reapplication, our ceramic coatings provide years of protection with proper maintenance. We offer various coating packages to suit different needs and budgets, from entry-level protection to our premium multi-layer systems for maximum durability and shine.",
    hero: '/lovable-uploads/6f06c0f2-2138-4d06-87b1-52a216974632.png', // Blue Lexus
    benefits: [
      {
        title: 'Long-Lasting Protection',
        description: 'Superior durability compared to waxes or sealants, with protection that lasts years instead of months.'
      },
      {
        title: 'Hydrophobic Surface',
        description: 'Water beads up and rolls off, taking dirt with it and making cleaning much easier.'
      },
      {
        title: 'Enhanced Gloss',
        description: "Delivers a deep, wet-look shine that enhances your vehicle's appearance."
      },
      {
        title: 'Chemical Resistance',
        description: 'Protects against harsh chemicals, bird droppings, tree sap, and road salt.'
      }
    ]
  },
  'paint-protection-film': {
    title: 'Paint Protection Film',
    description: 'Shield your car from rocks, bugs, and road debris with our strong paint protection film. This clear film helps prevent chips and scratches while being nearly invisible.',
    longDescription: "Our premium paint protection film (PPF) is a clear, thermoplastic urethane film that we apply to the most vulnerable areas of your vehicle to protect against stone chips, bug damage, minor abrasions, and environmental contaminants. The self-healing properties allow minor scratches to disappear with heat exposure from the sun or warm water. We offer both partial installations (focusing on high-impact areas like the hood, fenders, and mirrors) and full-vehicle coverage for maximum protection. Our experienced technicians use computer-cut patterns specific to your vehicle model, ensuring a perfect fit with minimal seams.",
    hero: '/lovable-uploads/15b9c65f-a662-4712-a305-d20c02f5ca70.png', // Blue Ford truck
    benefits: [
      {
        title: 'Invisible Protection',
        description: "Clear film preserves your vehicle's appearance while providing serious protection."
      },
      {
        title: 'Self-Healing Technology',
        description: 'Minor scratches disappear with heat, maintaining a flawless finish.'
      },
      {
        title: 'Preserves Resale Value',
        description: "Keeps your paint in pristine condition, maximizing your vehicle's value."
      },
      {
        title: 'UV Resistance',
        description: 'Prevents paint fading and oxidation caused by sun exposure.'
      }
    ]
  },
  'color-change-wraps': {
    title: 'Color Change Wraps',
    description: 'Change the look of your car without painting it! Our color change wraps come in many colors and finishes to transform your vehicle completely.',
    longDescription: "Color change wraps offer a flexible, reversible way to transform your vehicle's appearance without the permanence or expense of a paint job. We offer a vast selection of colors, textures, and finishes – from glossy and matte solids to metallic, satin, chrome, and even color-shifting options. Each wrap is precisely cut and installed to provide a smooth, seamless look that mimics a factory paint job. The vinyl material also serves as a protective layer for your original paint, preserving its condition and your vehicle's resale value. Whether you want a subtle change or a dramatic transformation, our color change wraps deliver professional results.",
    hero: '/lovable-uploads/39af2f7f-a89b-42b4-833b-75a980a647ba.png', // Red convertible
    benefits: [
      {
        title: 'Reversible Customization',
        description: "Change your vehicle's appearance without affecting the original paint."
      },
      {
        title: 'Endless Options',
        description: 'Choose from hundreds of colors and finishes not available in factory paint.'
      },
      {
        title: 'Paint Protection',
        description: 'The vinyl wrap acts as a barrier against minor scratches and stone chips.'
      },
      {
        title: 'Cost-Effective Alternative',
        description: 'Significantly less expensive than a quality paint job with similar visual impact.'
      }
    ]
  },
  'vehicle-graphics': {
    title: 'Vehicle Graphics',
    description: 'Add custom graphics to your vehicle with our professional design and installation services. From small logos to partial wraps, we can make your vision come to life.',
    longDescription: "Our vehicle graphics services range from simple decals and lettering to complex custom designs that transform ordinary vehicles into attention-grabbing marketing tools. We work with businesses of all sizes to create impactful graphics that communicate your brand message effectively. Our in-house design team can develop graphics from scratch or work with your existing branding to create vehicle graphics that align with your marketing strategy. Using high-quality materials and precision installation techniques, we ensure your graphics look professional and last for years, even in challenging weather conditions.",
    hero: '/lovable-uploads/712c766b-dd74-41af-942c-ef67e92c62c8.png', // Rivian with Blue Origin graphics
    benefits: [
      {
        title: 'Flexible Branding Options',
        description: 'From simple door logos to complex partial wraps - options for every budget.'
      },
      {
        title: 'Quick Installation',
        description: 'Less downtime for your vehicles compared to full wraps.'
      },
      {
        title: 'Easy Updates',
        description: 'Graphics can be replaced individually as your branding or information changes.'
      },
      {
        title: 'Targeted Messaging',
        description: 'Focus attention on specific information like contact details or services offered.'
      }
    ]
  },
  'partial-wraps': {
    title: 'Partial Vehicle Wraps',
    description: 'Make an impact without wrapping your entire vehicle. Our partial wraps focus on key areas for maximum visibility while working with your budget.',
    longDescription: "Partial vehicle wraps offer an excellent middle ground between full wraps and simple decals. By strategically covering portions of your vehicle – typically 25% to 75% of the surface area – we create high-impact designs that maximize visibility while keeping costs manageable. We carefully design partial wraps to work harmoniously with your vehicle's factory paint color, creating a cohesive look that appears intentional rather than incomplete. This approach is particularly popular with small businesses looking to establish a professional presence without the investment of a full fleet wrap program.",
    hero: '/lovable-uploads/beb6dd1d-1473-408c-acfe-c487df340eed.png', // Pink car
    benefits: [
      {
        title: 'Budget-Friendly Option',
        description: 'Get significant brand exposure at a lower cost than full vehicle wraps.'
      },
      {
        title: 'Focused Impact',
        description: 'Draw attention to the most visible areas of your vehicle.'
      },
      {
        title: 'Works With Factory Paint',
        description: "Integrates with your vehicle's original color for a cohesive design."
      },
      {
        title: 'Quicker Installation',
        description: 'Less installation time means your vehicle is back on the road faster.'
      }
    ]
  }
};

export const getServiceData = (serviceType: string | undefined): ServiceInfo => {
  // Default to "Not Found" service if serviceType doesn't match any keys
  if (!serviceType || !serviceData[serviceType]) {
    return {
      title: 'Service Not Found',
      description: "The service you're looking for isn't available. Please check our main services page.",
      longDescription: "We couldn't find the service you're looking for. Please navigate to our main services page to see our complete range of vehicle wrap and protection services.",
      hero: '/lovable-uploads/9523f1f5-8b31-4d2f-b869-620325b6ea59.png', // Fleet of Rivian trucks as default
      benefits: []
    };
  }
  
  return serviceData[serviceType];
};

export default serviceData;
