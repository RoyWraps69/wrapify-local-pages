
import React from 'react';
import ResourcePageTemplate from '@/components/resources/ResourcePageTemplate';

const OurTeam = () => {
  return (
    <ResourcePageTemplate
      title="Meet Our Expert Vehicle Wrap Team"
      description="The skilled professionals behind Wrapping The World, dedicated to delivering exceptional vehicle transformations."
      seoTitle="Meet Our Vehicle Wrap & Protection Experts | Wrapping The World"
      seoDescription="Meet the experienced team behind Wrapping The World. Our certified installers, designers, and customer service professionals are committed to excellence in vehicle wrapping."
      content={`
        <h2>The Team Behind Your Vehicle Transformation</h2>
        <p>At Wrapping The World, our greatest asset is our team of dedicated professionals. Each member brings specialized expertise and a commitment to excellence that ensures every project meets our exacting standards.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-40 h-40 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-xl font-semibold">Michael Rodriguez</h3>
            <p class="text-wrap-blue font-medium">Founder & Lead Installer</p>
            <p class="mt-2">With over 15 years of experience in vehicle wrapping, Michael founded Wrapping The World with a vision of bringing premium quality installations to the Chicago area. He holds 3M Preferred and Avery Dennison certifications and personally trains all installation staff.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-40 h-40 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-xl font-semibold">Sarah Chen</h3>
            <p class="text-wrap-blue font-medium">Lead Designer</p>
            <p class="mt-2">Sarah brings 12+ years of graphic design experience with a specialization in vehicle graphics and fleet branding. Her background in automotive design gives her unique insight into creating graphics that complement each vehicle's unique contours.</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">James Wilson</h3>
            <p class="text-wrap-blue font-medium">Senior Installer</p>
            <p class="mt-2">3M Certified with 8 years of experience specializing in color change wraps and complex surface applications.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">Maria Gonzalez</h3>
            <p class="text-wrap-blue font-medium">Ceramic Coating Specialist</p>
            <p class="mt-2">IDA Certified detailer with extensive training in ceramic coating applications and paint correction techniques.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">David Park</h3>
            <p class="text-wrap-blue font-medium">Fleet Operations Manager</p>
            <p class="mt-2">Coordinates our commercial fleet projects, ensuring efficient scheduling and consistent quality across multi-vehicle installations.</p>
          </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">Jennifer Taylor</h3>
            <p class="text-wrap-blue font-medium">Design Specialist</p>
            <p class="mt-2">Creates eye-catching graphics and brand-focused designs for commercial fleet clients.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">Robert Johnson</h3>
            <p class="text-wrap-blue font-medium">Paint Protection Film Specialist</p>
            <p class="mt-2">Expert in XPEL and SunTek PPF installations with certification in advanced pattern cutting.</p>
          </div>
          
          <div class="flex flex-col items-center text-center">
            <div class="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
            <h3 class="text-lg font-semibold">Lisa Nguyen</h3>
            <p class="text-wrap-blue font-medium">Client Services Manager</p>
            <p class="mt-2">Oversees customer experience from initial consultation through project completion and follow-up care.</p>
          </div>
        </div>
        
        <h3 class="mt-12">Our Certifications & Training</h3>
        <p>Our commitment to quality is reflected in our team's professional credentials:</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <h4 class="font-medium">3M Preferred Installers</h4>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <h4 class="font-medium">Avery Dennison Certified</h4>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <h4 class="font-medium">PDAA Master Certified</h4>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg text-center">
            <h4 class="font-medium">XPEL Factory Trained</h4>
          </div>
        </div>
        <p>Every team member undergoes regular training to stay current with the latest materials, techniques, and industry standards. This ensures we continue to deliver the highest quality results for every project.</p>
        
        <h3 class="mt-8">Our Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="border-l-4 border-wrap-blue pl-4">
            <h4 class="font-semibold">Quality Without Compromise</h4>
            <p class="text-sm">We never cut corners or rush installations, ensuring every project meets our exacting standards.</p>
          </div>
          <div class="border-l-4 border-wrap-blue pl-4">
            <h4 class="font-semibold">Transparency & Integrity</h4>
            <p class="text-sm">Clear communication, honest recommendations, and straightforward pricing guide every client interaction.</p>
          </div>
          <div class="border-l-4 border-wrap-blue pl-4">
            <h4 class="font-semibold">Continuous Improvement</h4>
            <p class="text-sm">We constantly refine our processes and techniques to deliver better results with each project.</p>
          </div>
        </div>
      `}
      relatedLinks={[
        { to: "/about", label: "About Us" },
        { to: "/careers", label: "Careers" },
        { to: "/testimonials", label: "Testimonials" }
      ]}
    />
  );
};

export default OurTeam;
