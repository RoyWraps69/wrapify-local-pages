import { StaticImageData } from 'next/image';

// Define the structure for town data
export interface TownData {
  id: string;
  name: string;
  state: string;
  description: string;
  population: number;
  businessCount: number;
  distance: number;
  mapUrl: string;
  keywords: string[];
  governmentUrl: string;
  businessStats: string;
	latitude: number;
	longitude: number;
}

// Example town data (Chicago)
const chicago = {
  id: "chicago",
  name: "Chicago",
  state: "IL",
  description: "Chicago, the largest city in Illinois, is a vibrant hub for culture, business, and transportation. Known for its stunning architecture, diverse neighborhoods, and rich history, Chicago offers a dynamic environment for businesses and residents alike.",
  population: 2693976,
  businessCount: 250000,
  distance: 0,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2354177.4741574795!2d-88.75694247737537!3d41.82400933982465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1683134274444!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps chicago",
    "car wraps chicago",
    "fleet wraps chicago"
  ],
  governmentUrl: "https://www.chicago.gov/",
  businessStats: "Major transportation hub with a diverse economy.",
	latitude: 41.8781,
	longitude: -87.6298
};

// Example town data (Evanston)
const evanston = {
  id: "evanston",
  name: "Evanston",
  state: "IL",
  description: "Evanston, a suburb of Chicago, is known for its beautiful lakefront, Northwestern University, and vibrant arts scene. The city offers a mix of residential neighborhoods, commercial districts, and cultural attractions.",
  population: 78110,
  businessCount: 7000,
  distance: 12,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47483.6149344354!2d-87.7187842648015!3d42.04505544789927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcb518219f6a5%3A0x653465b79678953!2sEvanston%2C%20IL!5e0!3m2!1sen!2sus!4v1683134347414!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps evanston",
    "car wraps evanston",
    "fleet wraps evanston"
  ],
  governmentUrl: "https://www.cityofevanston.org/",
  businessStats: "Home to Northwestern University and a thriving local economy.",
	latitude: 42.0451,
	longitude: -87.6878
};

// Example town data (Oak Park)
const oakPark = {
  id: "oak-park",
  name: "Oak Park",
  state: "IL",
  description: "Oak Park, a village just west of Chicago, is known for its historic architecture, including numerous Frank Lloyd Wright-designed homes. The community offers a mix of urban amenities and suburban charm.",
  population: 52233,
  businessCount: 5000,
  distance: 10,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23714.852344564294!2d-87.79544976423018!3d41.88577871879253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e33549544d2d3%3A0x259a8a87501b5967!2sOak%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683134410044!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps oak park",
    "car wraps oak park",
    "fleet wraps oak park"
  ],
  governmentUrl: "https://www.oak-park.us/",
  businessStats: "Known for its historic architecture and strong community.",
	latitude: 41.8858,
	longitude: -87.7909
};

// Example town data (Naperville)
const naperville = {
  id: "naperville",
  name: "Naperville",
  state: "IL",
  description: "Naperville, a large suburb of Chicago, is known for its excellent schools, family-friendly environment, and thriving business community. The city offers a mix of residential neighborhoods, commercial centers, and recreational amenities.",
  population: 149540,
  businessCount: 12000,
  distance: 33,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94814.85422942316!2d-88.2142238648105!3d41.75036443208739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e575795351b71%3A0x5b06962539f2b9f2!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1683134472914!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps naperville",
    "car wraps naperville",
    "fleet wraps naperville"
  ],
  governmentUrl: "https://www.naperville.il.us/",
  businessStats: "Large suburban city with a strong economy and top-rated schools.",
	latitude: 41.7577,
	longitude: -88.1561
};

// Example town data (Schaumburg)
const schaumburg = {
  id: "schaumburg",
  name: "Schaumburg",
  state: "IL",
  description: "Schaumburg, a major suburb of Chicago, is known for its large shopping mall (Woodfield Mall), corporate centers, and diverse business community. The village offers a mix of commercial, residential, and recreational opportunities.",
  population: 78723,
  businessCount: 8000,
  distance: 31,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47348.15987273793!2d-88.0897772647794!3d42.03532059783832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f0444c0999999%3A0x5001dfb0ca1b2bd!2sSchaumburg%2C%20IL!5e0!3m2!1sen!2sus!4v1683134535334!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps schaumburg",
    "car wraps schaumburg",
    "fleet wraps schaumburg"
  ],
  governmentUrl: "https://www.schaumburg.com/",
  businessStats: "Major commercial and retail center with a diverse economy.",
	latitude: 42.0354,
	longitude: -88.0830
};

// Example town data (Arlington Heights)
const arlingtonHeights = {
  id: "arlington-heights",
  name: "Arlington Heights",
  state: "IL",
  description: "Arlington Heights, a suburb of Chicago, is known for its high quality of life, excellent schools, and vibrant downtown area. The village offers a mix of residential neighborhoods, commercial districts, and cultural amenities.",
  population: 75249,
  businessCount: 6000,
  distance: 24,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47370.09237824823!2d-88.0092272647811!3d42.09214289785588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc29c3ca5c6d3%3A0x5001dfb0ca1ba91!2sArlington%20Heights%2C%20IL!5e0!3m2!1sen!2sus!4v1683134597734!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps arlington heights",
    "car wraps arlington heights",
    "fleet wraps arlington heights"
  ],
  governmentUrl: "https://www.vah.com/",
  businessStats: "Family-friendly suburb with a strong community and excellent schools.",
	latitude: 42.0922,
	longitude: -87.9809
};

// Example town data (Skokie)
const skokie = {
  id: "skokie",
  name: "Skokie",
  state: "IL",
  description: "Skokie, a suburb just north of Chicago, is known for its diverse community, excellent schools, and convenient access to the city. The village offers a mix of residential neighborhoods, commercial districts, and cultural attractions.",
  population: 67824,
  businessCount: 5500,
  distance: 15,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23694.09159963663!2d-87.7523662642148!3d42.03377121877689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcb99c8e98c99%3A0x5001dfb0ca1b999!2sSkokie%2C%20IL!5e0!3m2!1sen!2sus!4v1683134660094!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps skokie",
    "car wraps skokie",
    "fleet wraps skokie"
  ],
  governmentUrl: "https://www.skokie.org/",
  businessStats: "Diverse suburb with a strong local economy and convenient location.",
	latitude: 42.0338,
	longitude: -87.7311
};

// Example town data (Des Plaines)
const desPlaines = {
  id: "des-plaines",
  name: "Des Plaines",
  state: "IL",
  description: "Des Plaines, a suburb northwest of Chicago, is known for its convenient transportation options, diverse business community, and family-friendly environment. The city offers a mix of residential neighborhoods, commercial districts, and recreational amenities.",
  population: 58899,
  businessCount: 4800,
  distance: 17,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23688.92923247013!2d-87.8908122642106!3d42.02044821877258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc159a4089561%3A0x5001dfb0ca1ba20!2sDes%20Plaines%2C%20IL!5e0!3m2!1sen!2sus!4v1683134722474!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps des plaines",
    "car wraps des plaines",
    "fleet wraps des plaines"
  ],
  governmentUrl: "https://www.desplaines.org/",
  businessStats: "Transportation hub with a diverse economy and family-friendly community.",
	latitude: 42.0205,
	longitude: -87.8842
};

// Add missing towns from Michigan
const grandRapids = {
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

const detroit = {
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

const annArbor = {
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

// Add missing towns from Indiana
const indianapolis = {
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

const fortWayne = {
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

// Add missing towns from Wisconsin
const milwaukee = {
  id: "milwaukee",
  name: "Milwaukee",
  state: "WI",
  description: "Milwaukee is the largest city in Wisconsin, known for its brewing traditions, cultural festivals, and revitalized waterfront.",
  population: 577222,
  businessCount: 38000,
  distance: 92,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188626.16873099033!2d-88.0686969148283!3d43.057806381125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880502d7578b47e7%3A0x445f1922b5417b84!2sMilwaukee%2C%20WI!5e0!3m2!1sen!2sus!4v1683230510170!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps milwaukee",
    "car wraps milwaukee",
    "fleet wraps milwaukee"
  ],
  governmentUrl: "https://city.milwaukee.gov/",
  businessStats: "Manufacturing and brewing industry hub.",
  latitude: 43.0389,
  longitude: -87.9065
};

const madison = {
  id: "madison",
  name: "Madison",
  state: "WI",
  description: "Madison is the capital city of Wisconsin, home to the University of Wisconsin, with a thriving research and technology sector.",
  population: 269840,
  businessCount: 20000,
  distance: 147,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93716.95434993494!2d-89.5373578396313!3d43.07294164660487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806536d3a2019ff%3A0x4e0cfcb5ba484198!2sMadison%2C%20WI!5e0!3m2!1sen!2sus!4v1683230575738!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps madison",
    "car wraps madison",
    "fleet wraps madison"
  ],
  governmentUrl: "https://www.cityofmadison.com/",
  businessStats: "Education and government center.",
  latitude: 43.0731,
  longitude: -89.4012
};

// Define a function to retrieve town data by slug
export const getTownData = (townSlug: string): TownData | null => {
  const towns: { [key: string]: TownData } = {
    "chicago": chicago,
    "evanston": evanston,
    "oak-park": oakPark,
    "naperville": naperville,
    "schaumburg": schaumburg,
    "arlington-heights": arlingtonHeights,
    "skokie": skokie,
    "des-plaines": desPlaines,
    
    // Add Michigan towns
    "detroit": detroit,
    "grand-rapids": grandRapids,
    "ann-arbor": annArbor,
    
    // Add Indiana towns
    "indianapolis": indianapolis,
    "fort-wayne": fortWayne,
    
    // Add Wisconsin towns
    "milwaukee": milwaukee,
    "madison": madison,
  };

  return towns[townSlug] || null;
};
