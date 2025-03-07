
// FAQ schema utility functions

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generates a standard Schema.org FAQPage schema from an array of FAQ items
 * 
 * @param faqs Array of question/answer pairs
 * @returns Schema.org FAQPage structured data object
 */
export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generates service-specific FAQ schema for different service types
 * 
 * @param serviceType The type of service (e.g., 'vehicle-wraps', 'ceramic-coating')
 * @param locationName Optional location name to include in questions/answers
 * @returns Schema.org FAQPage structured data object
 */
export const generateServiceFAQSchema = (serviceType: string, locationName?: string) => {
  const location = locationName ? ` in ${locationName}` : '';
  
  // Common FAQ items across services
  const commonFAQs: FAQItem[] = [
    {
      question: `How much does it cost${location}?`,
      answer: `Pricing${location} varies based on vehicle size, complexity, and specific requirements. We provide detailed, transparent quotes after a free consultation to assess your exact needs.`
    },
    {
      question: `How long does the service take${location}?`,
      answer: `Service time${location} depends on the scope of work. Most installations are completed within 3-5 business days. We provide a specific timeline during your consultation.`
    },
    {
      question: `Do you offer warranties${location}?`,
      answer: `Yes, all our services${location} come with comprehensive warranties. The specific terms depend on the service type and materials used.`
    }
  ];
  
  // Service-specific FAQ items
  let serviceFAQs: FAQItem[] = [];
  
  switch(serviceType) {
    case 'vehicle-wraps':
      serviceFAQs = [
        {
          question: `How long do vehicle wraps last${location}?`,
          answer: `Our premium vehicle wraps${location} typically last 5-7 years with proper care and maintenance. Factors affecting longevity include exposure conditions, washing frequency, and storage environment.`
        },
        {
          question: `Will a vehicle wrap damage my paint${location}?`,
          answer: `No, professional vehicle wraps${location} actually protect your vehicle's original paint. When properly installed and removed by professionals, the vinyl wrap leaves no damage or residue.`
        },
        {
          question: `Can I wash my wrapped vehicle${location}?`,
          answer: `Yes, you can wash your wrapped vehicle${location}. We recommend hand washing with mild soap and water or using touchless car washes. Avoid high-pressure washes and abrasive cleaning tools.`
        }
      ];
      break;
      
    case 'ceramic-coating':
      serviceFAQs = [
        {
          question: `How long does ceramic coating last${location}?`,
          answer: `Our ceramic coatings${location} typically last 2-5 years depending on the specific product and package you choose. Professional application and proper maintenance significantly extend the coating's lifespan.`
        },
        {
          question: `What are the benefits of ceramic coating${location}?`,
          answer: `Ceramic coatings${location} provide superior protection against environmental contaminants, UV rays, and minor scratches. They create a hydrophobic surface that repels water and makes cleaning easier, while enhancing your vehicle's appearance with a deep, long-lasting shine.`
        },
        {
          question: `Do I need to prep my vehicle before ceramic coating${location}?`,
          answer: `Vehicle preparation is included in our ceramic coating service${location}. Our professionals thoroughly clean, clay bar, and polish your vehicle to ensure optimal coating adhesion and maximum protection.`
        }
      ];
      break;
      
    case 'paint-protection':
      serviceFAQs = [
        {
          question: `What is paint protection film (PPF)${location}?`,
          answer: `Paint protection film${location} is a clear, thermoplastic urethane film applied to painted surfaces to protect from stone chips, bug stains, and minor abrasions. Our premium films feature self-healing properties that allow minor scratches to disappear with heat.`
        },
        {
          question: `How long does paint protection film last${location}?`,
          answer: `Our professional-grade paint protection films${location} typically last 7-10 years with proper care. They maintain clarity and do not yellow or fade with age.`
        },
        {
          question: `Can PPF be applied to any vehicle${location}?`,
          answer: `Yes, paint protection film${location} can be applied to virtually any vehicle. We offer both pre-cut patterns for common vehicle models and custom cutting for exotic or modified vehicles.`
        }
      ];
      break;
      
    case 'print-ship':
      serviceFAQs = [
        {
          question: `How does your Print & Ship service work${location}?`,
          answer: `Our Print & Ship service allows you to order custom-designed vehicle wraps that we print in our Chicago facility and ship directly to you or your preferred installer anywhere in the United States. Each order includes detailed installation instructions and access to technical support.`
        },
        {
          question: `What materials do you use for Print & Ship wraps${location}?`,
          answer: `We exclusively use premium 3M and Avery Dennison vinyl wrap materials${location} that offer superior durability, color retention, and ease of installation. These professional-grade materials are designed to withstand harsh weather conditions and provide long-lasting results.`
        },
        {
          question: `Do I need professional installation for a shipped wrap${location}?`,
          answer: `While professional installation is recommended for best results, our Print & Ship wraps are designed to be installer-friendly. We can connect you with our nationwide network of certified installers, or if you have experience, you can perform the installation yourself with our detailed instructions.`
        }
      ];
      break;
      
    default:
      // Use only common FAQs for other service types
      break;
  }
  
  // Combine common and service-specific FAQs
  const allFAQs = [...commonFAQs, ...serviceFAQs];
  
  return generateFAQSchema(allFAQs);
};
