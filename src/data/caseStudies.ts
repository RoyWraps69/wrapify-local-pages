
export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  gallery?: string[];
  industry: string;
  location: string;
  results: string;
  slug: string;
  client: string;
  completionDate: string;
}

// Mock case studies data - in a real app, this would come from an API
export const caseStudies: CaseStudy[] = [
  {
    id: "cs1",
    title: "Commercial Fleet Branding for Midwest HVAC Provider",
    description: "Complete fleet branding solution for 35 service vehicles, creating consistent brand presence and generating new customer leads.",
    content: `
      <p>The Challenge:</p>
      <p>Midwest HVAC Services, a growing heating and cooling company based in Chicago, came to us with a challenge: how to increase brand recognition and generate more service calls in their competitive market. With 35 service vehicles operating throughout the Chicago area, they recognized the opportunity to turn their fleet into powerful marketing assets.</p>
      
      <p>The Solution:</p>
      <p>Our team developed a comprehensive fleet branding strategy that ensured consistent brand application across their diverse vehicle types while maximizing visibility and impact. We created a bold design that highlighted their services, contact information, and unique selling points. The design needed to be easily readable from a distance and memorable enough to make an impression in just a few seconds.</p>
      
      <p>The Implementation:</p>
      <p>We rolled out the fleet branding program in phases, minimizing disruption to their service schedule. Our installation team worked during off-hours to wrap 5-7 vehicles per week. We used premium 3M vinyl wraps with a 7-year warranty and added an extra layer of UV protection to ensure longevity in Chicago's varied climate conditions.</p>
      
      <p>The Results:</p>
      <p>Within six months of completing the fleet wrap program, Midwest HVAC Services reported:</p>
      <ul>
        <li>28% increase in service calls directly attributed to fleet visibility</li>
        <li>35% increase in brand recall in customer surveys</li>
        <li>Multiple new commercial maintenance contracts from businesses who first noticed their wrapped vehicles</li>
      </ul>
      
      <p>The fleet wraps continue to generate new business daily while projecting a professional, established image that helps the company compete with larger national chains.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png",
      "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png"
    ],
    industry: "Home Services",
    location: "Chicago, IL",
    results: "28% increase in service calls",
    slug: "midwest-hvac-fleet-branding",
    client: "Midwest HVAC Services",
    completionDate: "2022-08-15"
  },
  {
    id: "cs2",
    title: "Food Truck Design & Wrap for Fusion Cuisine Startup",
    description: "Eye-catching food truck wrap that turns heads and effectively communicates menu offerings and brand personality.",
    content: `
      <p>The Challenge:</p>
      <p>Street Fusion, a new food truck startup in Detroit specializing in Korean-Mexican fusion cuisine, needed to create a bold visual identity that would stand out in crowded food truck parks and street festivals. As a new business with no established customer base, the truck itself needed to attract attention and clearly communicate their unique culinary concept.</p>
      
      <p>The Solution:</p>
      <p>Our design team worked closely with the owners to create a vibrant food truck wrap that reflected the fusion nature of their cuisine. We incorporated elements from both Korean and Mexican culture in a contemporary design that appealed to their target demographic of young urban professionals and food enthusiasts. The wrap featured high-impact food photography, clear menu highlights, and bold typography visible from a distance.</p>
      
      <p>The Implementation:</p>
      <p>The installation was completed in just three days, minimizing the startup's downtime before their grand opening. We used high-performance vinyl with enhanced color vibrancy and food-safe laminates to meet health department requirements. The wrap covered all sides of the truck with a cohesive design that created a 360-degree marketing presence.</p>
      
      <p>The Results:</p>
      <p>The impact was immediate and significant:</p>
      <ul>
        <li>52% increase in daily customers compared to their soft launch period with an unwrapped truck</li>
        <li>215% increase in social media mentions and tags as customers shared photos of the distinctive truck</li>
        <li>Featured in local food blogs and publications, generating free publicity worth an estimated $7,500</li>
        <li>Selected to participate in premium food festivals that typically have waiting lists for new vendors</li>
      </ul>
      
      <p>The owners report that customers frequently mention that they were attracted by the truck's appearance, and the wrap has become a central element of their brand identity across all marketing channels.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png"
    ],
    industry: "Food & Beverage",
    location: "Detroit, MI",
    results: "52% increase in daily customers",
    slug: "fusion-cuisine-food-truck",
    client: "Street Fusion",
    completionDate: "2023-03-22"
  },
  {
    id: "cs3",
    title: "Luxury Vehicle Protection for High-End Car Dealership",
    description: "Premium paint protection film and ceramic coating for a dealership's inventory of luxury vehicles, enhancing appearance and protection.",
    content: `
      <p>The Challenge:</p>
      <p>Elite Motors, a luxury car dealership in Indianapolis specializing in high-end European imports, needed a solution to protect their valuable inventory while enhancing the showroom appeal of their vehicles. With an average vehicle value exceeding $125,000, even minor cosmetic damage could significantly impact profit margins.</p>
      
      <p>The Solution:</p>
      <p>We developed a comprehensive protection package combining paint protection film (PPF) for high-impact areas with ceramic coating for the entire vehicle. This dual-layer approach provided maximum protection against road debris, environmental contaminants, and UV damage while enhancing the depth and gloss of the factory paint.</p>
      
      <p>The Implementation:</p>
      <p>Our team established an ongoing service program with the dealership, processing 3-5 vehicles per week as new inventory arrived. Each vehicle received:</p>
      <ul>
        <li>Premium paint protection film on the front fascia, hood, fenders, mirror caps, and other high-impact areas</li>
        <li>9H ceramic coating applied to all exterior surfaces, including wheels</li>
        <li>Interior fabric and leather protection</li>
        <li>Detailed documentation and care instructions for customers</li>
      </ul>
      
      <p>The Results:</p>
      <p>After implementing our protection program for over 200 vehicles, Elite Motors reported:</p>
      <ul>
        <li>86% of customers opted to maintain the protection package when purchasing, creating an additional revenue stream</li>
        <li>Reduction in lot maintenance costs as vehicles stayed cleaner and required less frequent detailing</li>
        <li>Elimination of transport-related damage claims, saving approximately $45,000 annually</li>
        <li>Enhanced showroom appeal, with customers specifically commenting on the superior finish of the vehicles</li>
      </ul>
      
      <p>The dealership now markets our protection packages as a premium feature, highlighting the long-term value protection and enhanced appearance our services provide.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png"
    ],
    industry: "Automotive",
    location: "Indianapolis, IN",
    results: "Preserved value for 200+ vehicles",
    slug: "luxury-dealer-protection",
    client: "Elite Motors",
    completionDate: "2023-01-10"
  },
  {
    id: "featured",
    title: "Fleet Branding Transformation for National Logistics Company",
    description: "How we helped a national logistics company rebrand their entire fleet of 120+ vehicles across 15 states, resulting in 43% increased brand recognition.",
    content: `
      <p>The Challenge:</p>
      <p>Continental Logistics, a national transportation and logistics provider, underwent a complete rebrand following a merger. They needed to update their fleet of over 120 vehicles spread across 15 states within a tight 90-day timeline to coincide with their new brand launch. The diverse fleet included semi-trucks, box trucks, vans, and service vehicles from multiple manufacturers and model years.</p>
      
      <p>The Solution:</p>
      <p>Our nationwide team developed a comprehensive fleet transformation strategy that standardized the brand application across diverse vehicle types while accommodating regional installation logistics. We created a modular design system that maintained brand consistency regardless of vehicle size or shape, with scaled elements to ensure proper visibility and impact.</p>
      
      <p>The Implementation:</p>
      <p>To meet the challenging timeline, we:</p>
      <ul>
        <li>Established five regional installation hubs to minimize vehicle travel time</li>
        <li>Created detailed installation specifications for each vehicle type</li>
        <li>Implemented a rolling schedule to maintain fleet operations during the transition</li>
        <li>Developed a quality control process with photographic documentation of each completed vehicle</li>
        <li>Provided fleet managers with maintenance training and touch-up kits</li>
      </ul>
      
      <p>The Results:</p>
      <p>The fleet rebranding was completed three weeks ahead of schedule with remarkable results:</p>
      <ul>
        <li>43% increase in brand recognition according to post-launch market research</li>
        <li>Over 15 million daily impressions based on fleet visibility metrics</li>
        <li>Consistent brand presentation across all regions and vehicle types</li>
        <li>Significant positive feedback from employees who reported increased pride in representing the company</li>
        <li>Featured in three industry publications as an example of successful fleet branding</li>
      </ul>
      
      <p>Continental Logistics has since established an ongoing relationship with our company, implementing a standardized wrap program for all new fleet additions.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png",
      "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png"
    ],
    industry: "Logistics",
    location: "Nationwide",
    results: "43% increased brand recognition",
    slug: "national-logistics-fleet-branding",
    client: "Continental Logistics",
    completionDate: "2022-11-30"
  },
  {
    id: "cs4",
    title: "Nationwide Fleet Rebrand for Telecommunications Provider",
    description: "Coordinated nationwide rebranding of 250+ vehicles across 30 states, ensuring consistent brand implementation under tight deadlines.",
    content: `
      <p>The Challenge:</p>
      <p>TeleComm Solutions, a leading telecommunications provider, underwent a major rebrand following an acquisition. They needed to update their large fleet of 250+ vehicles across 30 states within a tight four-month timeframe to align with their new corporate identity launch. The fleet included various vehicle types from service vans to bucket trucks.</p>
      
      <p>The Solution:</p>
      <p>Our team developed a comprehensive national fleet rebranding strategy that ensured consistent brand application while accommodating the logistical challenges of working across multiple states. We created a modular design system that could be adapted to different vehicle types while maintaining brand integrity.</p>
      
      <p>The Implementation:</p>
      <p>To execute this large-scale project efficiently:</p>
      <ul>
        <li>We established regional installation hubs in strategic locations</li>
        <li>Created detailed vehicle templates for each model in the fleet</li>
        <li>Implemented a phased roll-out schedule to minimize service disruptions</li>
        <li>Utilized our national network of certified installers</li>
        <li>Developed a quality control system with photo documentation of completed vehicles</li>
      </ul>
      
      <p>The Results:</p>
      <p>The project was completed three weeks ahead of schedule, with impressive outcomes:</p>
      <ul>
        <li>250+ vehicles successfully rebranded with consistent quality</li>
        <li>Seamless integration with the company's new brand identity</li>
        <li>Minimal downtime for their service fleet</li>
        <li>Enhanced brand visibility across all service territories</li>
        <li>Positive feedback from regional managers about the efficiency of the process</li>
      </ul>
      
      <p>TeleComm Solutions was able to launch their new brand identity with a fully updated fleet, creating a powerful visual impression in all their markets simultaneously.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/590d1c5f-1242-4641-8775-d67442eb5985.png"
    ],
    industry: "Telecommunications",
    location: "Nationwide",
    results: "Completed 3 weeks ahead of schedule",
    slug: "telecom-fleet-rebrand",
    client: "TeleComm Solutions",
    completionDate: "2023-02-15"
  },
  {
    id: "cs5",
    title: "Real Estate Company Vehicle Branding Program",
    description: "Consistent, professional vehicle branding for a growing real estate firm with 45 agent vehicles, enhancing corporate identity.",
    content: `
      <p>The Challenge:</p>
      <p>Summit Realty Group, a growing real estate firm in Milwaukee, wanted to create a consistent professional image across their team of 45 agents, each using their personal vehicles for business. They needed a solution that would enhance their corporate identity while accommodating different vehicle types and respecting that these were personal vehicles with both business and family use.</p>
      
      <p>The Solution:</p>
      <p>We developed a flexible partial wrap program that provided professional branding while maintaining the vehicle's versatility for personal use. The design featured removable magnetic panels for some agents and permanent partial wraps for others, depending on their preference. All designs incorporated Summit's branding, agent information, and contact details in a clean, high-end format appropriate for their luxury property market.</p>
      
      <p>The Implementation:</p>
      <p>We executed the program in phases:</p>
      <ul>
        <li>Created standard design templates that could be adapted to different vehicle types</li>
        <li>Developed both permanent and removable options to meet agent preferences</li>
        <li>Scheduled installations in batches to minimize disruption to their business</li>
        <li>Provided care and maintenance guidelines for both wrap types</li>
        <li>Created a standard onboarding process for new agents joining the firm</li>
      </ul>
      
      <p>The Results:</p>
      <p>After implementing the vehicle branding program, Summit Realty Group reported significant benefits:</p>
      <ul>
        <li>35% increased brand recognition in their primary markets</li>
        <li>42% of new clients mentioned seeing their branded vehicles</li>
        <li>More cohesive professional image across all agents</li>
        <li>Improved agent satisfaction and sense of belonging to the company</li>
        <li>Competitive advantage in agent recruitment</li>
      </ul>
      
      <p>The program has now become a central part of Summit's marketing strategy, with new agents receiving vehicle branding as part of their onboarding process.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/da66fc1b-34ee-4085-b73c-49b58773faf2.png"
    ],
    industry: "Real Estate",
    location: "Milwaukee, WI",
    results: "35% increased brand recognition",
    slug: "real-estate-vehicle-branding",
    client: "Summit Realty Group",
    completionDate: "2022-09-30"
  },
  {
    id: "cs6",
    title: "Construction Fleet Identification & Safety Program",
    description: "Combined branding and safety elements for a construction company's fleet of 85 vehicles, improving site visibility and safety.",
    content: `
      <p>The Challenge:</p>
      <p>Peterson Construction, a large construction company in Grand Rapids, needed to update their fleet of 85 vehicles with branding that would both promote their company and improve safety on job sites. Their vehicles ranged from pickup trucks and vans to heavy equipment, all requiring identification that would be visible in various work conditions including low light and inclement weather.</p>
      
      <p>The Solution:</p>
      <p>We designed a comprehensive vehicle identification program that combined bold branding with high-visibility safety elements. The designs incorporated reflective materials and construction-specific safety markings while maintaining strong brand presence. For heavy equipment, we developed specialized graphics that would withstand harsh conditions while providing maximum visibility.</p>
      
      <p>The Implementation:</p>
      <p>The program was implemented across their diverse fleet:</p>
      <ul>
        <li>Created specialized templates for 12 different vehicle and equipment types</li>
        <li>Used industrial-grade materials designed for construction environments</li>
        <li>Incorporated reflective elements for improved visibility in low-light conditions</li>
        <li>Developed a phased installation schedule to minimize equipment downtime</li>
        <li>Included safety information and emergency contact details where appropriate</li>
      </ul>
      
      <p>The Results:</p>
      <p>After implementing the fleet identification program, Peterson Construction reported:</p>
      <ul>
        <li>23% reduction in site accidents involving vehicles</li>
        <li>Improved compliance with job site safety requirements</li>
        <li>Enhanced professional appearance that helped win municipal contracts</li>
        <li>Better equipment tracking and management</li>
        <li>Stronger brand recognition in their service area</li>
      </ul>
      
      <p>The safety improvements alone provided significant return on investment, while the branding elements contributed to their marketing efforts and professional image in a competitive industry.</p>
    `,
    image: "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
    gallery: [
      "/lovable-uploads/bff2ffbd-315a-4e58-8617-6f61aace585a.png",
      "/lovable-uploads/b74857d0-710d-4089-9183-4df0575dc986.png"
    ],
    industry: "Construction",
    location: "Grand Rapids, MI",
    results: "23% reduction in site accidents",
    slug: "construction-fleet-safety",
    client: "Peterson Construction",
    completionDate: "2022-10-15"
  }
];
