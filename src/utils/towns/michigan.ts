
import { TownData } from '../townTypes';

export const grandRapids: TownData = {
  id: "grand-rapids",
  name: "Grand Rapids",
  state: "MI",
  description: "Grand Rapids is the second-largest city in Michigan and a hub for manufacturing, healthcare, and technology businesses.",
  population: 198917,
  businessCount: 15000,
  distance: 180,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94693.96308569492!2d-85.70525554050906!3d42.96250388942988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88185460bb502815%3A0xa593aacb1bd3a8d0!2sGrand%20Rapids%2C%20MI!5e0!3m2!1sen!2sus!4v1683230098048!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps grand rapids",
    "car wraps grand rapids",
    "fleet wraps grand rapids"
  ],
  governmentUrl: "https://www.grandrapidsmi.gov/",
  businessStats: "Major city with diverse business community.",
  latitude: 42.9634,
  longitude: -85.6681
};

export const detroit: TownData = {
  id: "detroit",
  name: "Detroit",
  state: "MI",
  description: "Detroit is Michigan's largest city and a center for automotive industry, cultural innovation, and urban revitalization.",
  population: 639111,
  businessCount: 62000,
  distance: 283,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188820.1355925855!2d-83.28516451978881!3d42.35233395307322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2sDetroit%2C%20MI!5e0!3m2!1sen!2sus!4v1683230245184!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps detroit",
    "car wraps detroit",
    "fleet wraps detroit"
  ],
  governmentUrl: "https://detroitmi.gov/",
  businessStats: "Major industrial and cultural center.",
  latitude: 42.3314,
  longitude: -83.0458
};

export const annArbor: TownData = {
  id: "ann-arbor",
  name: "Ann Arbor",
  state: "MI",
  description: "Ann Arbor is a vibrant college town home to the University of Michigan, with a thriving tech and research ecosystem.",
  population: 123851,
  businessCount: 9000,
  distance: 243,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94538.48743307195!2d-83.82233391402592!3d42.27874883188558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cb00dd4431f33%3A0xdb09f94686c8b5e2!2sAnn%20Arbor%2C%20MI!5e0!3m2!1sen!2sus!4v1683230298376!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps ann arbor",
    "car wraps ann arbor",
    "fleet wraps ann arbor"
  ],
  governmentUrl: "https://www.a2gov.org/",
  businessStats: "Education and tech innovation hub.",
  latitude: 42.2808,
  longitude: -83.7430
};

export const michiganTowns = [
  grandRapids,
  detroit,
  annArbor
];
