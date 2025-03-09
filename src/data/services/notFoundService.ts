
import { ServiceInfo } from './types';

export const notFoundServiceData: ServiceInfo = {
  title: 'Service Not Found',
  description: "The service you're looking for isn't available. Please check our main services page.",
  longDescription: "We couldn't find the service you're looking for. Please navigate to our main services page to see our complete range of vehicle wrap and protection services.",
  hero: '/lovable-uploads/9523f1f5-8b31-4d2f-b869-620325b6ea59.png', // Fleet of Rivian trucks as default
  benefits: [],
  faqs: [
    {
      question: "Why am I seeing this 'Service Not Found' page?",
      answer: "You may have clicked a link to a service that doesn't exist in our system, or there might be a typo in the URL. Please use the navigation menu to browse our available services."
    },
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of vehicle enhancement services including vehicle wraps, commercial fleet wraps, color change wraps, ceramic coatings, paint protection film, fleet graphics, vehicle graphics, and partial wraps."
    },
    {
      question: "How can I find the service I'm looking for?",
      answer: "You can navigate to our main Services page using the navigation menu at the top of the page, or click on the Services dropdown to see all available options."
    }
  ]
};
