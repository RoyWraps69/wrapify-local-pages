
import { generateFAQSchema } from './faqSchemas';

/**
 * Creates an FAQ schema specifically for the AI chatbot responses
 * This helps search engines understand the types of questions the chatbot can answer
 */
export const generateChatbotFAQSchema = (locationName: string = 'Chicago') => {
  // Common questions the chatbot can handle with location-specific answers
  const chatbotFaqs = [
    {
      question: `How much does it cost to wrap a vehicle in ${locationName}?`,
      answer: `The cost of vehicle wraps in ${locationName} depends on your vehicle size and project needs. Full wraps typically range from $2,500-$6,000, while partial wraps start around $1,000. We're very competitive for the ${locationName} area and offer free consultations.`
    },
    {
      question: `How long does a vehicle wrap installation take in ${locationName}?`,
      answer: `In our ${locationName} facility, a complete vehicle wrap typically takes 3-5 business days to install. Partial wraps may be completed in 1-2 days. We maintain a climate-controlled environment to ensure optimal installation regardless of ${locationName}'s weather conditions.`
    },
    {
      question: `What warranty do you offer on vehicle wraps in ${locationName}?`,
      answer: `Our comprehensive 5-year warranty covers all professional vehicle wraps performed by our certified ${locationName} technicians. It includes protection against peeling, cracking, and excessive fading under normal conditions when properly maintained.`
    },
    {
      question: `Where is your ${locationName} vehicle wrap facility located?`,
      answer: `Our ${locationName} installation center is located at 4711 N. Lamon Ave, Chicago. We're just 5 minutes from the Kennedy Expressway and serve all ${locationName} and surrounding areas.`
    },
    {
      question: `Do you offer ceramic coating services in ${locationName}?`,
      answer: `Yes, we provide premium ceramic coating services in ${locationName}. Our ceramic coatings offer exceptional protection against local weather elements, road salt, and UV damage. We use premium nano-ceramic formulations that last up to 5 years and maintain your vehicle's shine in all ${locationName} weather conditions.`
    },
    {
      question: `How do I care for my vehicle wrap in ${locationName}'s climate?`,
      answer: `For ${locationName}'s climate, we recommend hand washing your wrapped vehicle with a gentle automotive soap, avoiding automatic car washes with brushes. During winter, rinse off road salt promptly. In summer, park in shade when possible to reduce UV exposure. We provide all clients with a detailed care guide specific to ${locationName}'s seasonal conditions.`
    }
  ];

  // Generate the schema using our existing utility
  return generateFAQSchema(chatbotFaqs);
};
