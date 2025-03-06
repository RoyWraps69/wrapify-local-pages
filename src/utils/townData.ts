
interface Town {
  id: string;
  name: string;
  state: string;
  distance: number; // Distance from Chicago in miles
  population: number;
  description: string;
  businessCount?: number;
  keywords?: string[];
  mapUrl?: string;
}

export const towns: Town[] = [
  {
    id: "chicago",
    name: "Chicago",
    state: "IL",
    distance: 0,
    population: 2746388,
    description: "Chicago is the third-largest city in the United States and a major center for business and transportation. As a bustling metropolitan area, Chicago businesses and residents alike benefit from professional vehicle wraps that help them stand out in this competitive market.",
    businessCount: 85000,
    keywords: ["Chicago vehicle wraps", "Chicago car wrapping", "fleet wraps Chicago", "commercial vehicle wraps Chicago"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858851965!2d-87.73196395!3d41.83373645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1652278414042!5m2!1sen!2sus"
  },
  {
    id: "evanston",
    name: "Evanston",
    state: "IL",
    distance: 12,
    population: 78110,
    description: "Evanston is a vibrant suburban city just north of Chicago, home to Northwestern University and a thriving business community. With its educated population and mix of academic, retail, and service businesses, Evanston offers great opportunities for vehicle wrap advertising.",
    businessCount: 3200,
    keywords: ["Evanston vehicle wraps", "car wrapping Evanston IL", "Northwestern University area vehicle graphics", "Evanston business fleet wraps"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47506.56208528876!2d-87.7336559726306!3d42.04582370427972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fccd0c5b80413%3A0xe1b5f964f4ea6ac!2sEvanston%2C%20IL!5e0!3m2!1sen!2sus!4v1683566832512!5m2!1sen!2sus"
  },
  {
    id: "oak-park",
    name: "Oak Park",
    state: "IL",
    distance: 9,
    population: 54583,
    description: "Oak Park is a charming village known for its historic architecture, including homes designed by Frank Lloyd Wright. With a mix of residential areas and business districts, Oak Park offers unique opportunities for both commercial and personal vehicle wraps.",
    businessCount: 1800,
    keywords: ["Oak Park vehicle wraps", "car wrapping Oak Park IL", "fleet branding Oak Park", "Oak Park business vehicle graphics"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11887.899129883314!2d-87.79483562076373!3d41.88529111614896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e348f5b56a5af%3A0x8e3d679d64b74954!2sOak%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683566886317!5m2!1sen!2sus"
  },
  {
    id: "naperville",
    name: "Naperville",
    state: "IL",
    distance: 28,
    population: 149540,
    description: "Naperville is one of Chicago's largest and most prosperous suburbs, frequently ranked as one of the best places to live in the United States. Its affluent population and strong business community make it an ideal market for high-quality vehicle wraps.",
    businessCount: 5600,
    keywords: ["Naperville vehicle wraps", "Naperville car wrapping", "fleet wraps Naperville IL", "commercial vehicle branding Naperville"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95099.17627734168!2d-88.20956245000001!3d41.750957949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5761843c37d9%3A0x324dd6b2f79d0fd5!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1683566941107!5m2!1sen!2sus"
  },
  {
    id: "skokie",
    name: "Skokie",
    state: "IL",
    distance: 15,
    population: 64784,
    description: "Skokie is a diverse village with a rich cultural heritage and a strong business presence. Its convenient location near major highways makes it an excellent place for businesses to utilize vehicle wraps for maximum visibility as they travel throughout the Chicago area.",
    businessCount: 2100,
    keywords: ["Skokie vehicle wraps", "car wrapping Skokie IL", "Skokie fleet graphics", "commercial vehicle wraps Skokie"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47486.31507014407!2d-87.77583077243169!3d42.0799591021281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5d4c8eb0b27%3A0xbdf81a149d228bc2!2sSkokie%2C%20IL!5e0!3m2!1sen!2sus!4v1683566994937!5m2!1sen!2sus"
  },
  {
    id: "schaumburg",
    name: "Schaumburg",
    state: "IL",
    distance: 30,
    population: 78723,
    description: "Schaumburg is a major commercial hub in the Chicago suburbs, home to Woodfield Mall and numerous corporate headquarters. The high traffic in this business-oriented community creates an ideal environment for vehicle wrap advertising.",
    businessCount: 3900,
    keywords: ["Schaumburg vehicle wraps", "car wrapping Schaumburg IL", "Schaumburg fleet branding", "Woodfield area vehicle graphics"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47438.54364699935!2d-88.10966087233155!3d42.15916315132686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0cd594ff33d%3A0x43a3d4551e59096d!2sSchaumburg%2C%20IL!5e0!3m2!1sen!2sus!4v1683567066167!5m2!1sen!2sus"
  },
  {
    id: "cicero",
    name: "Cicero",
    state: "IL",
    distance: 7,
    population: 83891,
    description: "Cicero is a historic town and manufacturing center with a hardworking, predominantly Hispanic community. Small businesses and service companies in Cicero can benefit greatly from the affordable advertising that vehicle wraps provide.",
    businessCount: 1800,
    keywords: ["Cicero vehicle wraps", "car wrapping Cicero IL", "Cicero business fleet wraps", "Spanish language vehicle graphics Cicero"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47603.17707097068!2d-87.78199577269283!3d41.855014614789695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e33696ff8b607%3A0x2cc179df3b97ed6a!2sCicero%2C%20IL!5e0!3m2!1sen!2sus!4v1683567127467!5m2!1sen!2sus"
  },
  {
    id: "park-ridge",
    name: "Park Ridge",
    state: "IL",
    distance: 14,
    population: 37480,
    description: "Park Ridge is an upscale suburb near O'Hare International Airport with a charming downtown and strong community focus. Its affluent residents and proximity to major transportation corridors make it an excellent location for premium vehicle wrap services.",
    businessCount: 1200,
    keywords: ["Park Ridge vehicle wraps", "car wrapping Park Ridge IL", "O'Hare area fleet wraps", "Park Ridge luxury vehicle wraps"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23767.39052022499!2d-87.85892888602603!3d42.01115459659342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc9b495652a33%3A0x30c9686e81844c06!2sPark%20Ridge%2C%20IL!5e0!3m2!1sen!2sus!4v1683567185007!5m2!1sen!2sus"
  },
  {
    id: "oak-lawn",
    name: "Oak Lawn",
    state: "IL",
    distance: 13,
    population: 56690,
    description: "Oak Lawn is a family-friendly suburb southwest of Chicago with a strong retail presence and growing medical sector centered around Christ Medical Center. Businesses in this mixed residential and commercial area benefit from the local visibility vehicle wraps provide.",
    businessCount: 1600,
    keywords: ["Oak Lawn vehicle wraps", "car wrapping Oak Lawn IL", "fleet wraps Oak Lawn", "medical vehicle graphics Oak Lawn"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47629.51839426538!2d-87.78006877274095!3d41.805012218950805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e39ad02c99191%3A0xd165eee6e097c67e!2sOak%20Lawn%2C%20IL!5e0!3m2!1sen!2sus!4v1683567239887!5m2!1sen!2sus"
  },
  {
    id: "berwyn",
    name: "Berwyn",
    state: "IL",
    distance: 10,
    population: 56579,
    description: "Berwyn is a close-knit suburban community known for its historic bungalow district and strong local business scene. Small-to-medium businesses in Berwyn can leverage vehicle wraps to increase their visibility both locally and throughout the Chicago area.",
    businessCount: 1400,
    keywords: ["Berwyn vehicle wraps", "car wrapping Berwyn IL", "Berwyn fleet graphics", "small business vehicle wraps Berwyn"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47607.79066228767!2d-87.80974707270176!3d41.84599061530089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e346c2b7d08c5%3A0x5063fe3d59c841e8!2sBerwyn%2C%20IL!5e0!3m2!1sen!2sus!4v1683567302527!5m2!1sen!2sus"
  },
  {
    id: "des-plaines",
    name: "Des Plaines",
    state: "IL",
    distance: 17,
    population: 58840,
    description: "Des Plaines is a thriving suburb located near O'Hare International Airport with a diverse economy. Its strategic location makes it an ideal place for businesses to utilize vehicle wraps that will be seen by both locals and visitors to the Chicago area.",
    businessCount: 2200,
    keywords: ["Des Plaines vehicle wraps", "car wrapping Des Plaines IL", "O'Hare area fleet wraps", "Des Plaines business vehicle graphics"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47457.76037557574!2d-87.93421437238267!3d42.12778465348577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb622696c8499%3A0x8494532d641de17!2sDes%20Plaines%2C%20IL!5e0!3m2!1sen!2sus!4v1683567357397!5m2!1sen!2sus"
  },
  {
    id: "arlington-heights",
    name: "Arlington Heights",
    state: "IL",
    distance: 24,
    population: 75634,
    description: "Arlington Heights is an affluent suburb northwest of Chicago, known for Arlington Park Racetrack and a vibrant downtown district. The community's high median income makes it a prime market for premium vehicle wrap services.",
    businessCount: 2800,
    keywords: ["Arlington Heights vehicle wraps", "car wrapping Arlington Heights", "fleet wraps Arlington Heights", "luxury vehicle wraps Arlington Heights"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47438.37673349172!2d-88.02045917233143!3d42.159436651328804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb472ae7e8151%3A0x7cdf31e5a8b02bbb!2sArlington%20Heights%2C%20IL!5e0!3m2!1sen!2sus!4v1683567418857!5m2!1sen!2sus"
  }
];

export const getTownById = (townId: string): Town | undefined => {
  return towns.find(town => town.id === townId);
};

export const getTownByName = (townName: string): Town | undefined => {
  return towns.find(town => town.name.toLowerCase() === townName.toLowerCase());
};

export const getAllTownIds = (): string[] => {
  return towns.map(town => town.id);
};

export const getTownsWithin = (distance: number): Town[] => {
  return towns.filter(town => town.distance <= distance);
};

// Add the missing functions
export const getAllTowns = (): Town[] => {
  return towns;
};

export const getTownData = (townSlug: string): Town | undefined => {
  return towns.find(town => town.id === townSlug);
};
