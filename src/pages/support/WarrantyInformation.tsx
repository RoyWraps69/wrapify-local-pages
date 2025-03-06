
import React from 'react';
import ResourcePageTemplate from '@/components/resources/ResourcePageTemplate';

const WarrantyInformation = () => {
  return (
    <ResourcePageTemplate
      title="Warranty Information"
      description="Details about our comprehensive warranty coverage for vehicle wraps, ceramic coatings, and paint protection films."
      seoTitle="Vehicle Wrap & Protection Warranty Information | Wrapping The World"
      seoDescription="Learn about our comprehensive warranty coverage for vehicle wraps, ceramic coatings, and paint protection films. Understand what's covered and how to maintain your warranty."
      content={`
        <h2>Our Comprehensive Warranty Coverage</h2>
        <p>At Wrapping The World, we stand behind the quality of our work with industry-leading warranty coverage. Our warranties protect your investment and provide peace of mind that your vehicle wrap or protection will perform as expected for years to come.</p>
        
        <div class="my-8">
          <h3>Commercial Fleet Wrap Warranty</h3>
          <p>Our commercial vehicle wraps include the following warranty coverage:</p>
          <ul>
            <li><strong>Material Warranty:</strong> 5-7 years (depending on material grade) covering manufacturing defects, excessive fading, cracking, or peeling</li>
            <li><strong>Installation Warranty:</strong> 1 year covering any installation-related issues including lifting, bubbling, or improper adhesion</li>
            <li><strong>Design Warranty:</strong> Lifetime guarantee that digital files and design work will be maintained for future repairs or replacements</li>
          </ul>
          <p class="text-sm mt-2 text-wrap-grey">*Vertical surfaces carry full warranty period. Horizontal surfaces (hood, roof) carry a pro-rated warranty due to increased environmental exposure.</p>
        </div>
        
        <div class="my-8">
          <h3>Color Change Wrap Warranty</h3>
          <p>Our color change vehicle wraps include the following coverage:</p>
          <ul>
            <li><strong>Material Warranty:</strong> 3-5 years (depending on material grade and color selection) covering manufacturing defects, excessive fading, cracking, or peeling</li>
            <li><strong>Installation Warranty:</strong> 1 year covering installation-related issues including lifting, bubbling, or improper adhesion</li>
          </ul>
          <p class="text-sm mt-2 text-wrap-grey">*Specialty finishes (matte, satin, chrome, color-shift) may have modified warranty terms. Please request specific warranty details for these materials.</p>
        </div>
        
        <div class="my-8">
          <h3>Ceramic Coating Warranty</h3>
          <p>Our professional ceramic coating services include tiered warranty options:</p>
          <ul>
            <li><strong>Standard Protection:</strong> 2-year warranty on hydrophobic properties and coating integrity</li>
            <li><strong>Premium Protection:</strong> 5-year warranty on hydrophobic properties, coating integrity, and gloss retention</li>
            <li><strong>Ultimate Protection:</strong> 7-year warranty with annual inspections and maintenance treatments</li>
          </ul>
          <p class="text-sm mt-2 text-wrap-grey">*Ceramic coating warranties require documented maintenance and annual inspections to remain valid.</p>
        </div>
        
        <div class="my-8">
          <h3>Paint Protection Film Warranty</h3>
          <p>Our PPF installations include the following coverage:</p>
          <ul>
            <li><strong>Material Warranty:</strong> 5-10 years (depending on film grade) covering yellowing, bubbling, cracking, or peeling</li>
            <li><strong>Self-Healing Properties:</strong> Guaranteed for the first 2-5 years (depending on film grade)</li>
            <li><strong>Installation Warranty:</strong> 1 year covering any installation-related issues</li>
          </ul>
        </div>
        
        <h3>Warranty Maintenance Requirements</h3>
        <p>To maintain the validity of your warranty, please adhere to these maintenance requirements:</p>
        <ol>
          <li>Follow all care instructions provided at the time of installation</li>
          <li>Keep documentation of proper maintenance and cleaning</li>
          <li>Address any issues promptly by contacting our service department</li>
          <li>Schedule recommended inspections (required for certain premium warranties)</li>
          <li>Avoid automated car washes with abrasive brushes</li>
        </ol>
        
        <div class="bg-gray-100 p-6 rounded-lg my-8">
          <h3 class="text-wrap-blue">How to Make a Warranty Claim</h3>
          <p>If you experience any issues covered by your warranty:</p>
          <ol>
            <li>Contact our service department at 312-597-1286</li>
            <li>Provide your original work order number and vehicle information</li>
            <li>Submit photos of the issue via email to warranty@wrappingtheworld.com</li>
            <li>Schedule an inspection at our facility</li>
            <li>Approved warranty claims will be scheduled for repair promptly</li>
          </ol>
        </div>
        
        <h3>Warranty Exclusions</h3>
        <p>Our warranties do not cover damage resulting from:</p>
        <ul>
          <li>Accidents, vandalism, or intentional damage</li>
          <li>Improper cleaning or use of harsh chemicals</li>
          <li>Normal wear and tear in high-friction areas</li>
          <li>Environmental damage from extreme conditions</li>
          <li>Modifications made by anyone other than Wrapping The World technicians</li>
        </ul>
        
        <p class="mt-6">For complete warranty details specific to your vehicle and selected services, please refer to your service agreement or contact our customer service team.</p>
      `}
      relatedLinks={[
        { to: "/wrap-installation-process", label: "Installation Process" },
        { to: "/payment-options", label: "Payment Options" },
        { to: "/vinyl-wrap-care-guide", label: "Vinyl Wrap Care Guide" }
      ]}
    />
  );
};

export default WarrantyInformation;
