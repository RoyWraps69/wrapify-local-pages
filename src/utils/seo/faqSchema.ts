
interface FAQSchemaProps {
  townName: string;
}

export const createFAQSchema = ({ townName }: FAQSchemaProps) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Where can I get a professional car wrap in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Wrapping The World provides premium vehicle wrapping services in ${townName} and surrounding areas. Our shop is conveniently located for all ${townName} residents and businesses, offering complete fleet branding, color change wraps, ceramic coatings, paint protection film, and custom graphics using premium 3M and Avery Dennison materials.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does it cost to wrap a vehicle in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The cost of wrapping a vehicle in ${townName} varies depending on several factors including vehicle size, complexity of the surface area, type of wrap (commercial, color change, partial), quality of vinyl used, and design complexity. Commercial fleet wraps typically range from $2,500-$5,000 per vehicle, while premium color change wraps range from $3,000-$6,000 depending on vehicle size. Contact us for a free, personalized quote specific to your vehicle and requirements.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does a professional vehicle wrap last in ${townName}'s climate?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `A professional vehicle wrap installed by Wrapping The World typically lasts 5-7 years in ${townName}'s climate. We use premium 3M and Avery Dennison vinyl materials specifically designed to withstand local weather conditions, including hot summers and cold winters. With proper maintenance and care, commercial fleet wraps and color change wraps can maintain their appearance and effectiveness throughout this period.`
        }
      },
      {
        "@type": "Question",
        "name": `Will a vehicle wrap damage my car's paint?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No, a professionally installed vehicle wrap from Wrapping The World will not damage your car's paint. In fact, wraps provide protection for your vehicle's original paint from UV rays, minor scratches, and small debris. When removed correctly by our ${townName} experts, your original paint will remain in the same condition as when it was wrapped, often in better condition than exposed painted surfaces.`
        }
      },
      {
        "@type": "Question",
        "name": `What types of businesses benefit most from fleet wraps in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Many types of businesses in ${townName} benefit from professional fleet wraps, including: service businesses (plumbing, electrical, HVAC), delivery services, construction companies, real estate agencies, food and catering businesses, retail stores with delivery vehicles, and any business with vehicles that travel throughout ${townName}. Fleet wraps transform ordinary vehicles into powerful mobile advertising that generates thousands of impressions daily.`
        }
      },
      {
        "@type": "Question",
        "name": `What is ceramic coating and how does it protect my vehicle in ${townName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Ceramic coating is a liquid polymer applied to your vehicle's exterior that creates a permanent bond with the factory paint, providing superior protection. In ${townName}'s varied climate, ceramic coating offers exceptional protection against UV damage, oxidation, road salt, chemical stains, and environmental contaminants. It creates a hydrophobic surface that repels water, making your vehicle easier to clean while enhancing gloss and preserving color depth for years.`
        }
      },
      {
        "@type": "Question",
        "name": `What's the difference between ceramic coating and paint protection film (PPF) for my ${townName} vehicle?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `While both protect your vehicle, they serve different purposes for ${townName} drivers. Ceramic coating provides excellent chemical resistance, enhanced gloss, and makes cleaning easier, but offers minimal physical protection. Paint Protection Film (PPF or clear bra) is a thicker, self-healing film that provides superior protection against rock chips, scratches, and physical damage. Many ${townName} clients choose to combine both: PPF on high-impact areas and ceramic coating over the entire vehicle for comprehensive protection.`
        }
      }
    ]
  };
};
