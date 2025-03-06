
import React from 'react';
import ResourcePageTemplate from '@/components/resources/ResourcePageTemplate';

const PaymentOptions = () => {
  return (
    <ResourcePageTemplate
      title="Payment Options & Financing"
      description="Flexible payment solutions for your vehicle wrap or protection project, including financing options for businesses and individuals."
      seoTitle="Vehicle Wrap Payment Options & Financing | Wrapping The World"
      seoDescription="Explore our flexible payment and financing options for vehicle wraps and protection services. Business financing, payment plans, and fleet program discounts available."
      content={`
        <h2>Flexible Payment Solutions for Vehicle Wrapping Services</h2>
        <p>We understand that investing in professional vehicle wraps and protection services represents a significant decision for both businesses and individuals. That's why we offer a variety of payment options to accommodate different budgets and needs.</p>
        
        <div class="my-8">
          <h3>Standard Payment Methods</h3>
          <p>We accept the following payment methods for all services:</p>
          <ul>
            <li>All major credit cards (Visa, Mastercard, American Express, Discover)</li>
            <li>Business checks (subject to verification)</li>
            <li>ACH bank transfers</li>
            <li>Cash payments</li>
            <li>Digital payment platforms (Apple Pay, Google Pay, PayPal, Venmo for Business)</li>
          </ul>
        </div>
        
        <div class="my-8">
          <h3>Commercial Fleet Programs</h3>
          <p>For businesses with multiple vehicles, we offer specialized payment programs:</p>
          <ul>
            <li><strong>Volume Discounts:</strong> Tiered pricing based on the number of vehicles in your fleet</li>
            <li><strong>Phased Implementation:</strong> Spread the cost by wrapping vehicles in scheduled phases</li>
            <li><strong>Corporate Accounts:</strong> Established billing relationships with net-30 terms for qualified businesses</li>
            <li><strong>Annual Service Agreements:</strong> Bundled pricing for companies that regularly update vehicle graphics</li>
          </ul>
        </div>
        
        <div class="my-8">
          <h3>Financing Options</h3>
          <p>We partner with several financing providers to offer flexible payment plans:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div class="border border-gray-200 p-4 rounded-lg">
              <h4 class="font-semibold">Business Equipment Financing</h4>
              <p>Treat your vehicle wraps as a business equipment investment with these benefits:</p>
              <ul class="text-sm mt-2">
                <li>Terms from 12-60 months</li>
                <li>Potential tax advantages (consult your tax advisor)</li>
                <li>Conserve working capital</li>
                <li>Simple application process</li>
              </ul>
            </div>
            
            <div class="border border-gray-200 p-4 rounded-lg">
              <h4 class="font-semibold">Consumer Financing</h4>
              <p>For individuals investing in color change wraps and vehicle protection:</p>
              <ul class="text-sm mt-2">
                <li>0% interest options for qualified applicants</li>
                <li>Terms from 6-36 months</li>
                <li>Quick approval process</li>
                <li>No prepayment penalties</li>
              </ul>
            </div>
          </div>
          
          <p class="text-sm italic mt-2">Financing subject to credit approval. Minimum purchase amounts may apply.</p>
        </div>
        
        <div class="my-8">
          <h3>Deposit Requirements</h3>
          <p>Our standard payment structure includes:</p>
          <ul>
            <li>50% deposit required to secure your installation appointment and begin design work</li>
            <li>Balance due upon project completion and final approval</li>
            <li>Custom deposit structures available for large commercial projects</li>
          </ul>
        </div>
        
        <div class="bg-gray-100 p-6 rounded-lg my-8">
          <h3 class="text-wrap-blue">Small Business Advertising Programs</h3>
          <p>We offer special programs designed specifically for small businesses:</p>
          <ul>
            <li><strong>New Business Starter Package:</strong> Deferred payment options for qualifying new businesses</li>
            <li><strong>Seasonal Business Program:</strong> Payment schedules aligned with your business's cash flow cycle</li>
            <li><strong>Co-Op Advertising Support:</strong> Assistance with documentation for manufacturer co-op programs</li>
          </ul>
        </div>
        
        <h3>Estimate Process</h3>
        <p>To provide you with accurate pricing information:</p>
        <ol>
          <li>Complete our online quote request or call 312-597-1286</li>
          <li>Schedule an in-person vehicle assessment (recommended for most accurate pricing)</li>
          <li>Receive a detailed written estimate outlining all costs</li>
          <li>Estimates are valid for 30 days</li>
          <li>Design concepts provided after deposit payment</li>
        </ol>
        
        <h3>Tax Considerations</h3>
        <p>Vehicle wraps and graphics may offer tax advantages for businesses:</p>
        <ul>
          <li>Often qualify as a tax-deductible advertising expense</li>
          <li>May be eligible for depreciation if considered a capital improvement</li>
          <li>Documentation provided for all transactions for your business records</li>
        </ul>
        <p class="text-sm italic mt-2">Always consult with your tax professional regarding specific tax treatment for your business.</p>
      `}
      relatedLinks={[
        { to: "/warranty-information", label: "Warranty Information" },
        { to: "/wrap-installation-process", label: "Installation Process" },
        { to: "/contact", label: "Contact Us For a Quote" }
      ]}
    />
  );
};

export default PaymentOptions;
