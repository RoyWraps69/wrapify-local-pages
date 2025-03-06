
import React from 'react';
import ResourcePageTemplate from '@/components/resources/ResourcePageTemplate';

const Careers = () => {
  return (
    <ResourcePageTemplate
      title="Careers at Wrapping The World"
      description="Join our team of vehicle wrap professionals. Explore current job openings and career opportunities."
      seoTitle="Careers in Vehicle Wrapping & Protection | Wrapping The World"
      seoDescription="Join our team of vehicle wrap professionals. Explore current job openings and career opportunities in vehicle wrapping, design, and installation."
      content={`
        <h2>Join Our Team of Vehicle Transformation Specialists</h2>
        <p>Wrapping The World is always looking for talented, passionate individuals to join our growing team. We offer a collaborative work environment where creativity, craftsmanship, and attention to detail are valued and rewarded.</p>
        
        <h3 class="mt-8">Why Work With Us</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-wrap-blue">Growth Opportunities</h4>
            <p class="mt-2">We invest in our team's development through paid training, certification programs, and clear advancement paths.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-wrap-blue">Creative Environment</h4>
            <p class="mt-2">Work on diverse projects from fleet branding to exotic car color changes, keeping your work interesting and challenging.</p>
          </div>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h4 class="font-semibold text-wrap-blue">Competitive Benefits</h4>
            <p class="mt-2">We offer competitive pay, health benefits, paid time off, and a retirement savings plan for full-time employees.</p>
          </div>
        </div>
        
        <h3 class="mt-10">Current Openings</h3>
        
        <div class="border border-gray-200 rounded-lg overflow-hidden my-6">
          <div class="bg-wrap-blue text-white p-4">
            <h4 class="font-medium">Vehicle Wrap Installer (Experienced)</h4>
          </div>
          <div class="p-4">
            <p class="mb-4">We're seeking an experienced vehicle wrap installer to join our team of professionals.</p>
            <h5 class="font-medium">Requirements:</h5>
            <ul class="list-disc pl-5 mb-4">
              <li>Minimum 2 years experience installing commercial and color change wraps</li>
              <li>3M or Avery Dennison certification preferred</li>
              <li>Portfolio of completed wrap projects</li>
              <li>Detail-oriented with excellent problem-solving skills</li>
              <li>Ability to work in a team environment</li>
            </ul>
            <p><strong>Status:</strong> Full-time</p>
            <p><strong>Location:</strong> Chicago, IL</p>
            <button class="mt-4 bg-wrap-blue hover:bg-wrap-blue/90 text-white px-4 py-2 rounded">Apply Now</button>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg overflow-hidden my-6">
          <div class="bg-wrap-blue text-white p-4">
            <h4 class="font-medium">Graphic Designer - Vehicle Wraps</h4>
          </div>
          <div class="p-4">
            <p class="mb-4">We're looking for a creative graphic designer with experience in vehicle templates and wrap design.</p>
            <h5 class="font-medium">Requirements:</h5>
            <ul class="list-disc pl-5 mb-4">
              <li>Proficiency with Adobe Creative Suite (especially Illustrator and Photoshop)</li>
              <li>Experience with vehicle templates and understanding of print production for wraps</li>
              <li>Strong portfolio demonstrating commercial design skills</li>
              <li>Ability to translate client needs into effective vehicle graphics</li>
              <li>Excellent communication skills</li>
            </ul>
            <p><strong>Status:</strong> Full-time</p>
            <p><strong>Location:</strong> Chicago, IL (hybrid remote options available)</p>
            <button class="mt-4 bg-wrap-blue hover:bg-wrap-blue/90 text-white px-4 py-2 rounded">Apply Now</button>
          </div>
        </div>
        
        <div class="border border-gray-200 rounded-lg overflow-hidden my-6">
          <div class="bg-wrap-blue text-white p-4">
            <h4 class="font-medium">Apprentice Installer (Entry Level)</h4>
          </div>
          <div class="p-4">
            <p class="mb-4">Start your career in vehicle wrapping with our comprehensive apprentice program.</p>
            <h5 class="font-medium">Requirements:</h5>
            <ul class="list-disc pl-5 mb-4">
              <li>Mechanical aptitude and attention to detail</li>
              <li>Willingness to learn and follow instructions precisely</li>
              <li>Strong work ethic and reliable transportation</li>
              <li>Basic understanding of automotive components</li>
              <li>High school diploma or equivalent</li>
            </ul>
            <p><strong>Status:</strong> Full-time</p>
            <p><strong>Location:</strong> Chicago, IL</p>
            <button class="mt-4 bg-wrap-blue hover:bg-wrap-blue/90 text-white px-4 py-2 rounded">Apply Now</button>
          </div>
        </div>
        
        <div class="bg-gray-100 p-6 rounded-lg my-8">
          <h3 class="text-wrap-blue">Application Process</h3>
          <ol class="list-decimal pl-5 mt-2">
            <li>Submit your resume and portfolio (if applicable) through our online application</li>
            <li>Initial phone screening with our hiring team</li>
            <li>In-person interview and skills assessment</li>
            <li>For installers: Hands-on technical evaluation</li>
            <li>Reference checks and final interview</li>
            <li>Offer and onboarding</li>
          </ol>
        </div>
        
        <h3 class="mt-8">Don't See a Position That Fits?</h3>
        <p>We're always interested in connecting with talented individuals who are passionate about vehicle wrapping and graphics. Submit your resume for future consideration, and we'll keep your information on file for upcoming opportunities.</p>
        
        <div class="text-center mt-8">
          <h4 class="font-medium mb-2">Submit General Application</h4>
          <button class="bg-wrap-blue hover:bg-wrap-blue/90 text-white px-6 py-2 rounded">Send Resume</button>
        </div>
      `}
      relatedLinks={[
        { to: "/our-team", label: "Our Team" },
        { to: "/about", label: "About Us" },
        { to: "/testimonials", label: "Testimonials" }
      ]}
    />
  );
};

export default Careers;
