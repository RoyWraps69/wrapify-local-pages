
import { TownData } from '../townTypes';

export const indianapolis: TownData = {
  id: "indianapolis",
  name: "Indianapolis",
  state: "IN",
  description: "Indianapolis is the capital and most populous city of Indiana, known for motorsports, conventions, and a growing tech sector.",
  population: 887642,
  businessCount: 75000,
  distance: 184,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196799.63772217754!2d-86.33310793009074!3d39.77795898075124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN!5e0!3m2!1sen!2sus!4v1683230377199!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps indianapolis",
    "car wraps indianapolis",
    "fleet wraps indianapolis"
  ],
  governmentUrl: "https://www.indy.gov/",
  businessStats: "Major city with diverse economic base.",
  latitude: 39.7684,
  longitude: -86.1581
};

export const fortWayne: TownData = {
  id: "fort-wayne",
  name: "Fort Wayne",
  state: "IN",
  description: "Fort Wayne is the second-largest city in Indiana, known for its three rivers, manufacturing base, and cultural amenities.",
  population: 268378,
  businessCount: 22000,
  distance: 160,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95757.62559463606!2d-85.20239049576903!3d41.07741843563177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e4917f227c85%3A0x6ebf8df9146366!2sFort%20Wayne%2C%20IN!5e0!3m2!1sen!2sus!4v1683230451473!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps fort wayne",
    "car wraps fort wayne",
    "fleet wraps fort wayne"
  ],
  governmentUrl: "https://www.cityoffortwayne.org/",
  businessStats: "Manufacturing and healthcare center.",
  latitude: 41.0793,
  longitude: -85.1394
};

export const indianaTowns = [
  indianapolis,
  fortWayne
];
