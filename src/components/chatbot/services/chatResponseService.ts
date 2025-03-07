import { getTownByName, getNearbyTowns } from '@/utils/townFunctions';
import { installers } from '@/components/print-ship/data/installers';

// Function to find the nearest installer to a given location
export const findNearestInstaller = (locationName: string) => {
  // First check for exact match
  const exactMatch = installers.find(installer => 
    installer.city === locationName || 
    installer.city.toLowerCase() === locationName.toLowerCase()
  );
  
  if (exactMatch) {
    return exactMatch;
  }
  
  // If no exact match, prioritize our own shop
  const ourShop = installers.find(installer => installer.isOurShop);
  if (ourShop) {
    return ourShop;
  }
  
  // Otherwise return the first installer in the list (this is simplistic, in a real app
  // we would calculate distances or use geolocation)
  return installers[0];
};

// This function generates responses based on user queries
export const generateResponse = async (message: string, locationName: string): Promise<string> => {
  // Convert message to lowercase for easier matching
  const lowercaseMessage = message.toLowerCase();
  
  // Find location-specific information
  const townData = getTownByName(locationName);
  
  // Check for installer requests
  if (lowercaseMessage.includes('installer') || lowercaseMessage.includes('shop') || lowercaseMessage.includes('location')) {
    // Find the nearest installer based on the current location
    const nearestInstaller = findNearestInstaller(locationName);
    
    if (nearestInstaller) {
      return `The nearest installer to ${locationName} is ${nearestInstaller.name}. They're located at ${nearestInstaller.address} and can be reached at ${nearestInstaller.phone}. Would you like me to provide more details about their services?`;
    }
    
    return `We have an installation center in Chicago at 4711 N. Lamon Ave, Chicago, IL 60630. For the ${locationName} area, we offer mobile installation services or you can visit our main facility. Would you like to schedule a consultation?`;
  }
  
  // Check for nearby towns or related service areas
  if (lowercaseMessage.includes('nearby') || lowercaseMessage.includes('close to') || lowercaseMessage.includes('around')) {
    if (townData) {
      const nearbyTowns = getNearbyTowns(townData.id, 30);
      const nearbyList = nearbyTowns.slice(0, 5).map(t => t.name).join(', ');
      return `In addition to ${locationName}, we also serve nearby areas including ${nearbyList}. Would you like information about any of these locations specifically?`;
    }
  }
  
  // Respond to warranty questions
  if (lowercaseMessage.includes('warranty') || lowercaseMessage.includes('guarantee')) {
    return `Our comprehensive 5-year warranty covers all professional vehicle wraps and ceramic coatings performed by our certified ${locationName} technicians. It includes protection against peeling, cracking, and excessive fading under normal conditions.`;
  }
  
  // Respond to pricing questions  
  if (lowercaseMessage.includes('price') || lowercaseMessage.includes('cost') || lowercaseMessage.includes('how much')) {
    return `The cost of vehicle wraps in ${locationName} depends on your vehicle size and project needs. Full wraps typically range from $2,500-$6,000, while partial wraps start around $1,000. We're very competitive for the ${locationName} area and offer free consultations!`;
  }
  
  // Respond to location questions
  if (lowercaseMessage.includes('address') || lowercaseMessage.includes('where')) {
    return `Our ${locationName} installation center is located at 4711 N. Lamon Ave, Chicago. We're just 5 minutes from the Kennedy Expressway and serve all ${locationName} and surrounding areas!`;
  }
  
  // Respond to timeline questions
  if (lowercaseMessage.includes('time') || lowercaseMessage.includes('how long') || lowercaseMessage.includes('duration')) {
    return `In our ${locationName} facility, a complete vehicle wrap typically takes 3-5 business days to install. Partial wraps may be completed in 1-2 days. Ceramic coating applications usually require 2-3 days, as we need time for proper curing in our climate-controlled environment.`;
  }
  
  // Respond to contact inquiries
  if (lowercaseMessage.includes('contact') || lowercaseMessage.includes('phone') || lowercaseMessage.includes('email')) {
    return `You can reach our ${locationName} team at (312) 597-1286 or by email at info@wrappingtheworld.com. Our business hours are Monday-Friday 8am-6pm and Saturday 9am-3pm.`;
  }

  // Respond to ceramic coating inquiries
  if (lowercaseMessage.includes('ceramic') || lowercaseMessage.includes('coating')) {
    return `Our ceramic coating services in ${locationName} provide exceptional protection against weather elements, road salt, and UV damage. We use premium nano-ceramic formulations that last up to 5 years and maintain your vehicle's shine in all ${locationName} weather conditions.`;
  }
  
  // Default response
  return `Thank you for your message! Our ${locationName} team specializes in vehicle wraps, ceramic coatings, and paint protection film. If you have specific questions about our services, warranty coverage, or would like to schedule a consultation, please let me know how I can assist you further.`;
};
