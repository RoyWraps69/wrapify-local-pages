
import React from 'react';
import ResourcePageTemplate from '@/components/resources/ResourcePageTemplate';

const DesignTemplateLibrary = () => {
  return (
    <ResourcePageTemplate
      title="Design Template Library"
      description="Browse our collection of vehicle wrap design templates to inspire your next project."
      seoTitle="Vehicle Wrap Design Templates | Commercial Fleet Graphics Library"
      seoDescription="Browse our vehicle wrap design template library. Find inspiration for commercial fleet graphics, business vehicle branding, and custom wraps."
      content={`
        <h2>Vehicle Wrap Design Templates</h2>
        <p>Our design template library serves as inspiration for your vehicle wrap project. These templates can be customized with your brand colors, logos, and messaging to create a unique look for your vehicles.</p>
        
        <div class="my-8">
          <h3>Commercial Van Templates</h3>
          <p>Designs optimized for service vans, delivery vehicles, and cargo vans.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Commercial Van Template 1" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Essential Service Template</p>
              <p class="text-sm text-wrap-grey">Ideal for HVAC, plumbing, electrical businesses</p>
            </div>
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Commercial Van Template 2" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Delivery Fleet Template</p>
              <p class="text-sm text-wrap-grey">Perfect for courier services and retail delivery</p>
            </div>
          </div>
        </div>
        
        <div class="my-8">
          <h3>Truck & Box Truck Templates</h3>
          <p>Designs tailored for larger commercial vehicles and box trucks.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Box Truck Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Box Truck Full Wrap</p>
              <p class="text-sm text-wrap-grey">Maximizes visibility with side and rear graphics</p>
            </div>
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Pickup Truck Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Contractor Pickup Design</p>
              <p class="text-sm text-wrap-grey">For construction and trade businesses</p>
            </div>
          </div>
        </div>
        
        <div class="my-8">
          <h3>Car & Sedan Templates</h3>
          <p>Designs for company cars, real estate vehicles, and personal branding.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Sedan Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Professional Service Car</p>
              <p class="text-sm text-wrap-grey">Subtle branding for business professionals</p>
            </div>
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Real Estate Car Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Real Estate Agent Design</p>
              <p class="text-sm text-wrap-grey">Featuring property imagery and contact details</p>
            </div>
          </div>
        </div>
        
        <div class="my-8">
          <h3>Specialty Vehicle Templates</h3>
          <p>Unique designs for food trucks, trailers, and specialty service vehicles.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Food Truck Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Food Truck Design</p>
              <p class="text-sm text-wrap-grey">Eye-catching graphics with menu integration</p>
            </div>
            <div class="border border-gray-200 p-4 rounded-lg">
              <img src="/placeholder.svg" alt="Trailer Template" class="w-full h-auto rounded mb-2" />
              <p class="font-medium">Trailer Wrap Template</p>
              <p class="text-sm text-wrap-grey">For event trailers and mobile businesses</p>
            </div>
          </div>
        </div>
        
        <h2 class="mt-12">Custom Design Services</h2>
        <p>While our template library provides excellent starting points, our in-house design team specializes in creating completely custom vehicle wrap designs tailored to your specific business needs and brand identity. Contact us to discuss your custom design project.</p>
      `}
      relatedLinks={[
        { to: "/vinyl-wrap-care-guide", label: "Vinyl Wrap Care Guide" },
        { to: "/services/commercial-fleet-wraps", label: "Commercial Fleet Wraps" },
        { to: "/services/vehicle-graphics", label: "Custom Vehicle Graphics" }
      ]}
    />
  );
};

export default DesignTemplateLibrary;
