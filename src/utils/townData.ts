
// Define the Town interface
export interface Town {
  id: string;
  name: string;
  description: string;
  distance: number;
  mapUrl: string;
  keywords: string[];
  governmentUrl: string;
  businessStats: string;
  latitude: number;
  longitude: number;
  population: number;
  businessCount?: number;
  state: string;
}

// Town data array with accurate map URLs
const towns: Town[] = [
  {
    id: "chicago",
    name: "Chicago",
    state: "IL",
    description: "Chicago is the third-largest city in the United States and a major business hub. ",
    population: 2697000,
    businessCount: 85000,
    distance: 0,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858851965!2d-87.73196395!3d41.83373645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1652278414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps chicago", "car wraps chicago", "fleet wraps chicago"],
    governmentUrl: "https://www.chicago.gov/",
    businessStats: "Large metropolitan area with diverse industries.",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    id: "evanston",
    name: "Evanston",
    state: "IL",
    description: "Evanston is a vibrant lakefront community known for Northwestern University and its diverse neighborhoods. ",
    population: 78110,
    businessCount: 5200,
    distance: 14,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47583.92258799862!2d-87.72953337162448!2d-87.68834578377439!3d42.04579764509302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcf59aaaabd27%3A0x8c5efc19aa722688!2sEvanston%2C%20IL!5e0!3m2!1sen!2sus!4v1652279414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps evanston", "car wraps evanston", "fleet wraps evanston"],
    governmentUrl: "https://www.cityofevanston.org/",
    businessStats: "Home to Northwestern University.",
    latitude: 42.0451,
    longitude: -87.6878,
  },
  {
    id: "oak-park",
    name: "Oak Park",
    state: "IL",
    description: "Oak Park is a historic village west of Chicago known for its Frank Lloyd Wright architecture and beautiful neighborhoods. ",
    population: 52300,
    businessCount: 3800,
    distance: 9,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23798.94382959232!2d-87.80292517977308!2d-87.76173983192417!3d41.88538899061592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e34af9a5a1385%3A0xa1dd5aba3f265695!2sOak%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1652280414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps oak park", "car wraps oak park", "fleet wraps oak park"],
    governmentUrl: "https://www.oak-park.us/",
    businessStats: "Known for its architecture.",
    latitude: 41.8489,
    longitude: -87.7817,
  },
  {
    id: "naperville",
    name: "Naperville",
    state: "IL",
    description: "Naperville is a thriving suburb with a beautiful Riverwalk, excellent schools, and a robust business community. ",
    population: 149500,
    businessCount: 12000,
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95001.36971054053!2d-88.21215442611032!2d-88.1176761781623!3d41.748051018917174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5761a5997fe7%3A0x6e7ef106dd941375!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1652281414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps naperville", "car wraps naperville", "fleet wraps naperville"],
    governmentUrl: "https://www.naperville.il.us/",
    businessStats: "Large suburb with a strong economy.",
    latitude: 41.7534,
    longitude: -88.1481,
  },
  {
    id: "skokie",
    name: "Skokie",
    state: "IL",
    description: "Skokie is a diverse suburban village just north of Chicago with excellent transportation links and cultural attractions. ",
    population: 65870,
    businessCount: 4500,
    distance: 16,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47628.72615165782!2d-87.77346327167702!2d-87.73227768382694!3d42.03529364608686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcfa2d30dc8c1%3A0xcdab6f8f795b6c72!2sSkokie%2C%20IL!5e0!3m2!1sen!2sus!4v1652282414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps skokie", "car wraps skokie", "fleet wraps skokie"],
    governmentUrl: "https://www.skokie.org/",
    businessStats: "Diverse community with a variety of businesses.",
    latitude: 42.0342,
    longitude: -87.7422,
  },
  {
    id: "des-plaines",
    name: "Des Plaines",
    state: "IL",
    description: "Des Plaines is a bustling suburb near O'Hare International Airport with strong transportation infrastructure. ",
    population: 58840,
    businessCount: 4200,
    distance: 20,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47635.47158219665!2d-87.91468247168063!2d-87.87349688383055!3d42.03324574608942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fba0035bdd775%3A0xf6dea3c7fa7e85c!2sDes%20Plaines%2C%20IL!5e0!3m2!1sen!2sus!4v1652283414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps des plaines", "car wraps des plaines", "fleet wraps des plaines"],
    governmentUrl: "https://www.desplaines.org/",
    businessStats: "Located near O'Hare International Airport.",
    latitude: 42.0334,
    longitude: -87.8834,
  },
  {
    id: "schaumburg",
    name: "Schaumburg",
    state: "IL",
    description: "Schaumburg is a premier commercial hub in Chicago's northwest suburbs, home to Woodfield Mall and numerous corporate headquarters. ",
    population: 78723,
    businessCount: 7500,
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47671.29908071022!2d-88.11438047170074!2d-88.07319488385066!3d42.02276234710024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0142e35798d%3A0x607fdf03c439ede0!2sSchaumburg%2C%20IL!5e0!3m2!1sen!2sus!4v1652284414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps schaumburg", "car wraps schaumburg", "fleet wraps schaumburg"],
    governmentUrl: "https://www.schaumburg.com/",
    businessStats: "Major commercial and economic center.",
    latitude: 42.0275,
    longitude: -88.0831,
  },
  {
    id: "arlington-heights",
    name: "Arlington Heights",
    state: "IL",
    description: "Arlington Heights is a prosperous northwest suburb known for Arlington Park racetrack and excellent quality of life. ",
    population: 77676,
    businessCount: 5800,
    distance: 25,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47567.52641097412!2d-88.00986237161598!2d-87.96867678376588!3d42.08824764465176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb615d2dc2185%3A0x807778f5ca12cfe0!2sArlington%20Heights%2C%20IL!5e0!3m2!1sen!2sus!4v1652285414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps arlington heights", "car wraps arlington heights", "fleet wraps arlington heights"],
    governmentUrl: "https://www.vah.com/",
    businessStats: "Known for its high quality of life.",
    latitude: 42.0889,
    longitude: -87.9806,
  },
  {
    id: "palatine",
    name: "Palatine",
    state: "IL",
    description: "Palatine is a vibrant northwest suburban community with beautiful parks and a charming downtown area. ",
    population: 69144,
    businessCount: 4100,
    distance: 28,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47543.12805935095!2d-88.06686237160255!2d-88.02567678375244!3d42.11324764441026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb4d57d52d483%3A0x8b5723b76f3edad1!2sPalatine%2C%20IL!5e0!3m2!1sen!2sus!4v1652286414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps palatine", "car wraps palatine", "fleet wraps palatine"],
    governmentUrl: "https://www.palatine.il.us/",
    businessStats: "Features a mix of residential and commercial areas.",
    latitude: 42.1139,
    longitude: -88.0356,
  },
  {
    id: "mount-prospect",
    name: "Mount Prospect",
    state: "IL",
    description: "Mount Prospect is a welcoming northwest suburb offering excellent accessibility, diverse dining, and family-friendly amenities. ",
    population: 56852,
    businessCount: 3900,
    distance: 22,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47598.57887380022!2d-87.96986237163265!2d-87.92867678378255!3d42.0669476449367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb595a53d2e7b%3A0x83a408c3e47c4516!2sMount%20Prospect%2C%20IL!5e0!3m2!1sen!2sus!4v1652287414042!5m2!1sen!2sus",
    keywords: ["vehicle wraps mount prospect", "car wraps mount prospect", "fleet wraps mount prospect"],
    governmentUrl: "https://www.mountprospect.org/",
    businessStats: "Offers a range of services and industries.",
    latitude: 42.0653,
    longitude: -87.9356,
  },
];

// Helper function to get town data by ID
export const getTownData = (townId: string): Town | undefined => {
  return towns.find((town) => town.id === townId);
};

// Helper function to get town data by name
export const getTownByName = (townName: string): Town | undefined => {
  const lowerCaseName = townName.toLowerCase();
  return towns.find((town) => town.name.toLowerCase() === lowerCaseName);
};

// Helper function to get all towns
export const getAllTowns = (): Town[] => {
  return [...towns];
};

