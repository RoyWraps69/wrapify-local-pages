
interface ChatbotFAQItem {
  question: string;
  answer: string;
}

export const generateChatbotFAQSchema = (locationName: string = 'Chicago') => {
  // Generate location-specific FAQs
  const locationSpecificFAQs: ChatbotFAQItem[] = [
    {
      question: `What services does Wrapping The World offer in ${locationName}?`,
      answer: `In ${locationName}, we offer a comprehensive range of vehicle transformation services including commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, partial wraps, vehicle graphics, and nationwide print & ship services for DIY installers.`
    },
    {
      question: `How much does a vehicle wrap cost in ${locationName}?`,
      answer: `Vehicle wrap pricing in ${locationName} varies based on vehicle size, wrap complexity, coverage area, and material quality. Commercial fleet wraps typically range from $2,500 to $5,000+ per vehicle, while color change wraps for personal vehicles range from $3,000 to $7,000+. We offer free consultations and quotes for all projects.`
    },
    {
      question: `How long does a vehicle wrap installation take in ${locationName}?`,
      answer: `In our ${locationName} facility, most standard vehicle wraps are completed in 3-5 business days. Complex custom designs or fleet projects may require additional time. We provide detailed timelines during your initial consultation.`
    },
    {
      question: `Do you offer ceramic coating services in ${locationName}?`,
      answer: `Yes, we provide professional ceramic coating services in ${locationName}. Our premium ceramic coatings offer superior protection against environmental contaminants, UV rays, and minor scratches while enhancing your vehicle's appearance with a deep, long-lasting shine.`
    }
  ];

  // General FAQs about services
  const generalServiceFAQs: ChatbotFAQItem[] = [
    {
      question: "What's the difference between a partial wrap and a full vehicle wrap?",
      answer: "A partial wrap covers only portions of your vehicle, typically 25-75% of the surface area, while a full wrap covers the entire vehicle. Partial wraps are a cost-effective option that still offers significant brand visibility by strategically covering key areas of your vehicle."
    },
    {
      question: "How long do your vehicle wraps last?",
      answer: "Our premium 3M and Avery Dennison vehicle wraps typically last 5-7 years with proper care and maintenance. Factors affecting longevity include exposure to harsh weather conditions, regular washing, and storage conditions."
    },
    {
      question: "Can I wash my wrapped vehicle?",
      answer: "Yes, but we recommend hand washing with mild soap and water or using touchless car washes. Avoid high-pressure washes, abrasive cleaning tools, and harsh chemicals that can damage the vinyl wrap. We provide detailed care instructions with every wrap installation."
    }
  ];

  // Print & Ship specific FAQs
  const printShipFAQs: ChatbotFAQItem[] = [
    {
      question: "How does your Print & Ship service work?",
      answer: "Our Print & Ship service allows you to order custom-designed vehicle wraps that we print in our Chicago facility and ship directly to you or your preferred installer anywhere in the United States. Each order includes detailed installation instructions and access to technical support."
    },
    {
      question: "Do I need professional installation for a shipped wrap?",
      answer: "While professional installation is recommended for best results, our Print & Ship wraps are designed to be installer-friendly. We can connect you with our nationwide network of certified installers, or if you have experience, you can perform the installation yourself with our detailed instructions."
    }
  ];

  // Combine all FAQs
  const allFAQs = [...locationSpecificFAQs, ...generalServiceFAQs, ...printShipFAQs];

  // Create the schema
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
