
import React from 'react';

interface CreateTownFAQsProps {
  townName: string;
}

export const createTownFAQs = ({ townName }: CreateTownFAQsProps) => {
  return [
    {
      question: `Where can I get professional vehicle wraps in ${townName}?`,
      answer: (
        <p>
          Wrapping The World provides premium vehicle wrapping services in {townName} and surrounding areas. 
          Our team serves all {townName} businesses and residents with high-quality commercial fleet wraps, 
          color change wraps, ceramic coatings, and custom vehicle graphics. Contact us today for 
          a free consultation about your {townName} vehicle wrapping project.
        </p>
      )
    },
    {
      question: `How much does ceramic coating cost in ${townName}?`,
      answer: (
        <div>
          <p className="mb-3">
            The cost of ceramic coating for vehicles in {townName} depends on several factors:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vehicle size and type</li>
            <li>Current condition of the paint</li>
            <li>Level of preparation required</li>
            <li>Grade of ceramic coating selected</li>
            <li>Additional services (paint correction, etc.)</li>
          </ul>
          <p className="mt-3">
            Our ceramic coating packages for {townName} clients typically range from $699 for basic 
            protection to $1,899+ for our premium ceramic coating with multi-year protection. 
            Contact us for a personalized quote for your specific vehicle.
          </p>
        </div>
      )
    },
    {
      question: `What businesses in ${townName} benefit most from fleet wraps?`,
      answer: (
        <div>
          <p className="mb-3">
            Many types of businesses in {townName} see significant benefits from professional fleet wraps:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Service businesses (plumbing, electrical, HVAC, landscaping)</li>
            <li>Construction and contracting companies</li>
            <li>Food trucks and catering businesses</li>
            <li>Delivery services and couriers</li>
            <li>Real estate agencies</li>
            <li>Local retailers with delivery vehicles</li>
            <li>Home service providers</li>
          </ul>
          <p className="mt-3">
            Any {townName} business with vehicles that travel throughout the area can transform them into 
            powerful mobile billboards, generating thousands of local impressions daily.
          </p>
        </div>
      )
    },
    {
      question: `What's the difference between ceramic coating and paint protection film for my ${townName} vehicle?`,
      answer: (
        <p>
          For {townName} vehicle owners, both ceramic coating and paint protection film (PPF) offer distinct benefits. 
          Ceramic coating provides chemical resistance, hydrophobic properties (making cleaning easier), and enhanced gloss, 
          but minimal physical protection. Paint Protection Film offers superior physical protection against rock chips 
          and scratches with self-healing technology. Many {townName} clients choose to combine both: PPF on high-impact areas 
          (front bumper, hood) and ceramic coating over the entire vehicle for complete protection against Chicago's harsh weather 
          and road conditions.
        </p>
      )
    },
    {
      question: `How long do vehicle wraps last in the ${townName} climate?`,
      answer: (
        <p>
          In {townName}'s climate, professionally installed vehicle wraps typically last 5-7 years. Our premium 
          3M and Avery Dennison vinyl materials are specifically engineered to withstand the Midwest's extreme 
          temperature variations, from hot summers to frigid winters. To maximize longevity, we recommend 
          regular gentle washing and keeping wrapped vehicles garaged when possible. Our {townName} clients 
          enjoy excellent durability, with proper maintenance ensuring your wrap maintains its vibrant 
          appearance for years.
        </p>
      )
    },
  ];
};

export default createTownFAQs;
