
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
  {
    id: "elmhurst",
    name: "Elmhurst",
    state: "IL",
    description: "Elmhurst is a vibrant western suburb with tree-lined streets, a thriving downtown, and strong business community.",
    population: 47260,
    businessCount: 3300,
    distance: 16,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4c694de1963d%3A0x2838df516d4e8d08!2sElmhurst%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps elmhurst", "car wraps elmhurst", "fleet wraps elmhurst"],
    governmentUrl: "https://www.elmhurst.org/",
    businessStats: "Home to many local businesses and restaurants.",
    latitude: 41.8998,
    longitude: -87.9403,
  },
  {
    id: "lombard",
    name: "Lombard",
    state: "IL",
    description: "Lombard is known as the Lilac Village and offers a blend of residential areas and commercial districts.",
    population: 44476,
    businessCount: 2900,
    distance: 20,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4e3035823281%3A0x92c79c0b6e375804!2sLombard%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps lombard", "car wraps lombard", "fleet wraps lombard"],
    governmentUrl: "https://www.villageoflombard.org/",
    businessStats: "Features a diverse range of small to medium businesses.",
    latitude: 41.8800,
    longitude: -88.0078,
  },
  {
    id: "glen-ellyn",
    name: "Glen Ellyn",
    state: "IL",
    description: "Glen Ellyn is a picturesque village with historic charm, excellent schools, and beautiful Lake Ellyn.",
    population: 27928,
    businessCount: 1800,
    distance: 23,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e539fac61636d%3A0x1b593651a98855df!2sGlen%20Ellyn%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps glen ellyn", "car wraps glen ellyn", "fleet wraps glen ellyn"],
    governmentUrl: "https://www.glenellyn.org/",
    businessStats: "Home to College of DuPage and many local businesses.",
    latitude: 41.8776,
    longitude: -88.0676,
  },
  {
    id: "wheaton",
    name: "Wheaton",
    state: "IL",
    description: "Wheaton is known for its religious institutions, Wheaton College, and well-maintained residential areas.",
    population: 53389,
    businessCount: 3600,
    distance: 25,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e53a0ade8706f%3A0x8e0c1a80d7785043!2sWheaton%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps wheaton", "car wraps wheaton", "fleet wraps wheaton"],
    governmentUrl: "https://www.wheaton.il.us/",
    businessStats: "Features diverse commercial areas and small businesses.",
    latitude: 41.8662,
    longitude: -88.1070,
  },
  {
    id: "downers-grove",
    name: "Downers Grove",
    state: "IL",
    description: "Downers Grove is a lively suburb with a vibrant downtown, excellent transportation access, and beautiful neighborhoods.",
    population: 49649,
    businessCount: 3800,
    distance: 22,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4ed3052097c7%3A0xe668ee64c089e794!2sDowners%20Grove%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps downers grove", "car wraps downers grove", "fleet wraps downers grove"],
    governmentUrl: "https://www.downers.us/",
    businessStats: "Strong economic center with diverse businesses.",
    latitude: 41.8089,
    longitude: -88.0112,
  },
  {
    id: "oak-lawn",
    name: "Oak Lawn",
    state: "IL",
    description: "Oak Lawn is a southwest suburb with excellent healthcare facilities and a diverse community.",
    population: 55245,
    businessCount: 3700,
    distance: 13,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.7197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e30f43d39d2c5%3A0xa34c286583f507cb!2sOak%20Lawn%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps oak lawn", "car wraps oak lawn", "fleet wraps oak lawn"],
    governmentUrl: "https://www.oaklawn-il.gov/",
    businessStats: "Features many service-oriented businesses.",
    latitude: 41.7197,
    longitude: -87.7479,
  },
  {
    id: "orland-park",
    name: "Orland Park",
    state: "IL",
    description: "Orland Park is a premier shopping destination with numerous retail centers and beautiful residential areas.",
    population: 58312,
    businessCount: 4100,
    distance: 24,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.6303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e16c3116de881%3A0x55fc3dc2481afc4a!2sOrland%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps orland park", "car wraps orland park", "fleet wraps orland park"],
    governmentUrl: "https://www.orland-park.il.us/",
    businessStats: "Major retail hub in the southwest suburbs.",
    latitude: 41.6303,
    longitude: -87.8538,
  },
  {
    id: "tinley-park",
    name: "Tinley Park",
    state: "IL",
    description: "Tinley Park is known for its concert venue, Hollywood Casino Amphitheatre, and strong sense of community.",
    population: 55800,
    businessCount: 3900,
    distance: 28,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.5732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e17bd938b153f%3A0xdcd89a79c46a8bca!2sTinley%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps tinley park", "car wraps tinley park", "fleet wraps tinley park"],
    governmentUrl: "https://www.tinleypark.org/",
    businessStats: "Features entertainment venues and diverse businesses.",
    latitude: 41.5732,
    longitude: -87.7845,
  },
  {
    id: "park-ridge",
    name: "Park Ridge",
    state: "IL",
    description: "Park Ridge is an upscale suburb with beautiful homes, excellent schools, and a vibrant downtown area.",
    population: 37494,
    businessCount: 2600,
    distance: 15,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcde63e64ee3b%3A0xe3256f2504ea5c16!2sPark%20Ridge%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps park ridge", "car wraps park ridge", "fleet wraps park ridge"],
    governmentUrl: "https://www.parkridge.us/",
    businessStats: "Thriving local business community in downtown area.",
    latitude: 42.0111,
    longitude: -87.8406,
  },
  {
    id: "niles",
    name: "Niles",
    state: "IL",
    description: "Niles is a diverse community with strong retail presence and excellent municipal services.",
    population: 29803,
    businessCount: 2100,
    distance: 17,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcdef8c7363b3%3A0xfc8026386d0c4d1a!2sNiles%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps niles", "car wraps niles", "fleet wraps niles"],
    governmentUrl: "https://www.vniles.com/",
    businessStats: "Home to Golf Mill Shopping Center and many businesses.",
    latitude: 42.0295,
    longitude: -87.8023,
  },
  {
    id: "morton-grove",
    name: "Morton Grove",
    state: "IL",
    description: "Morton Grove is a family-friendly village with excellent parks and forest preserves.",
    population: 23302,
    businessCount: 1500,
    distance: 16,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcdc2b00891cd%3A0xf5a9ccd70de5c90a!2sMorton%20Grove%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps morton grove", "car wraps morton grove", "fleet wraps morton grove"],
    governmentUrl: "https://www.mortongroveil.org/",
    businessStats: "Diverse commercial and industrial base.",
    latitude: 42.0395,
    longitude: -87.7826,
  },
  {
    id: "glenview",
    name: "Glenview",
    state: "IL",
    description: "Glenview is an affluent suburb with excellent shopping at The Glen Town Center and beautiful residential areas.",
    population: 47333,
    businessCount: 3400,
    distance: 19,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc6e0e2bf4131%3A0x4e76bf4611bf6920!2sGlenview%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps glenview", "car wraps glenview", "fleet wraps glenview"],
    governmentUrl: "https://www.glenview.il.us/",
    businessStats: "Strong corporate presence and retail sector.",
    latitude: 42.0697,
    longitude: -87.7878,
  },
  {
    id: "northbrook",
    name: "Northbrook",
    state: "IL",
    description: "Northbrook is an affluent community with Northbrook Court mall and numerous corporate headquarters.",
    population: 33655,
    businessCount: 2800,
    distance: 21,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.1275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5f4271c116f%3A0x612c2c7cf1d8ad2b!2sNorthbrook%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps northbrook", "car wraps northbrook", "fleet wraps northbrook"],
    governmentUrl: "https://www.northbrook.il.us/",
    businessStats: "Major corporate center with strong economic base.",
    latitude: 42.1275,
    longitude: -87.8293,
  },
  {
    id: "buffalo-grove",
    name: "Buffalo Grove",
    state: "IL",
    description: "Buffalo Grove is a well-planned village with excellent parks, schools, and community services.",
    population: 41551,
    businessCount: 2900,
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.1662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb01b57279b97%3A0x9a132bc3031b420c!2sBuffalo%20Grove%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps buffalo grove", "car wraps buffalo grove", "fleet wraps buffalo grove"],
    governmentUrl: "https://www.vbg.org/",
    businessStats: "Home to several corporate office parks.",
    latitude: 42.1662,
    longitude: -87.9631,
  },
  {
    id: "bolingbrook",
    name: "Bolingbrook",
    state: "IL",
    description: "Bolingbrook is a diverse community with excellent shopping at The Promenade Bolingbrook and strong transportation links.",
    population: 75379,
    businessCount: 4600,
    distance: 31,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.7003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5e0975fa175f%3A0xde9e22673d001358!2sBolingbrook%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps bolingbrook", "car wraps bolingbrook", "fleet wraps bolingbrook"],
    governmentUrl: "https://www.bolingbrook.com/",
    businessStats: "Features a mix of retail and industrial businesses.",
    latitude: 41.7003,
    longitude: -88.0719,
  },
  {
    id: "woodridge",
    name: "Woodridge",
    state: "IL",
    description: "Woodridge is a family-friendly village with excellent parks and forest preserves nearby.",
    population: 33378,
    businessCount: 2100,
    distance: 28,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.7469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5a6c7a9f0bf7%3A0x3bf40f9893f10bbc!2sWoodridge%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps woodridge", "car wraps woodridge", "fleet wraps woodridge"],
    governmentUrl: "https://www.woodridgeil.gov/",
    businessStats: "Features several business parks and retail centers.",
    latitude: 41.7469,
    longitude: -88.0497,
  },
  {
    id: "burr-ridge",
    name: "Burr Ridge",
    state: "IL",
    description: "Burr Ridge is an affluent community with upscale shopping at Burr Ridge Village Center and beautiful homes.",
    population: 11215,
    businessCount: 950,
    distance: 19,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.7483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f5a2dd9d759%3A0x6a34e6edd7d1e76!2sBurr%20Ridge%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps burr ridge", "car wraps burr ridge", "fleet wraps burr ridge"],
    governmentUrl: "https://www.burr-ridge.gov/",
    businessStats: "Home to upscale restaurants and luxury retailers.",
    latitude: 41.7483,
    longitude: -87.9145,
  },
  {
    id: "wilmette",
    name: "Wilmette",
    state: "IL",
    description: "Wilmette is an affluent North Shore suburb with beautiful beaches, historic Plaza del Lago, and excellent schools.",
    population: 27527,
    businessCount: 1800,
    distance: 16,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc54eac75ca01%3A0x3e76bb13f1abdc6c!2sWilmette%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps wilmette", "car wraps wilmette", "fleet wraps wilmette"],
    governmentUrl: "https://www.wilmette.com/",
    businessStats: "Features charming downtown shopping district.",
    latitude: 42.0781,
    longitude: -87.7226,
  },
  {
    id: "winnetka",
    name: "Winnetka",
    state: "IL",
    description: "Winnetka is an exclusive North Shore suburb with historic homes, beautiful beaches, and top-rated schools.",
    population: 12428,
    businessCount: 800,
    distance: 19,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.1088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5cc3f4e6669%3A0x31eb9dd7f3c3096!2sWinnetka%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps winnetka", "car wraps winnetka", "fleet wraps winnetka"],
    governmentUrl: "https://www.villageofwinnetka.org/",
    businessStats: "Features upscale boutique shopping district.",
    latitude: 42.1088,
    longitude: -87.7355,
  },
  {
    id: "glencoe",
    name: "Glencoe",
    state: "IL",
    description: "Glencoe is an exclusive North Shore community home to the Chicago Botanic Garden and beautiful lakefront properties.",
    population: 8723,
    businessCount: 600,
    distance: 23,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.1358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5ce19e9a453%3A0xdb9a4c0136cb5bc1!2sGlencoe%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps glencoe", "car wraps glencoe", "fleet wraps glencoe"],
    governmentUrl: "https://www.villageofglencoe.org/",
    businessStats: "Features charming downtown area with upscale shops.",
    latitude: 42.1358,
    longitude: -87.7584,
  },
  {
    id: "highland-park",
    name: "Highland Park",
    state: "IL",
    description: "Highland Park is an affluent North Shore community with vibrant downtown, Ravinia Festival, and beautiful beaches.",
    population: 29763,
    businessCount: 2000,
    distance: 25,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.1856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc0dca0e6e8e3%3A0x7a76ecabe9bf590f!2sHighland%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps highland park", "car wraps highland park", "fleet wraps highland park"],
    governmentUrl: "https://www.cityhpil.com/",
    businessStats: "Features vibrant downtown shopping district.",
    latitude: 42.1856,
    longitude: -87.8007,
  },
  {
    id: "northfield",
    name: "Northfield",
    state: "IL",
    description: "Northfield is a small, upscale community with excellent schools and convenient access to Chicago.",
    population: 5483,
    businessCount: 400,
    distance: 20,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5d0f8d7d461%3A0xed3ecc37ff5b0286!2sNorthfield%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps northfield", "car wraps northfield", "fleet wraps northfield"],
    governmentUrl: "https://www.northfieldil.org/",
    businessStats: "Home to several corporate headquarters.",
    latitude: 42.0997,
    longitude: -87.7759,
  },
  {
    id: "lake-forest",
    name: "Lake Forest",
    state: "IL",
    description: "Lake Forest is an exclusive community with historic estates, beautiful Lake Michigan beaches, and prestigious Lake Forest College.",
    population: 19375,
    businessCount: 1300,
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.2586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc069ad56f279%3A0x5a2db6c5f4fa827!2sLake%20Forest%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps lake forest", "car wraps lake forest", "fleet wraps lake forest"],
    governmentUrl: "https://www.cityoflakeforest.com/",
    businessStats: "Features upscale shopping and dining district.",
    latitude: 42.2586,
    longitude: -87.8407,
  },
  {
    id: "lake-bluff",
    name: "Lake Bluff",
    state: "IL",
    description: "Lake Bluff is a charming village with historic downtown, beautiful bluffs overlooking Lake Michigan, and strong community spirit.",
    population: 5617,
    businessCount: 350,
    distance: 32,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.2793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc089cd370f03%3A0xea44b47a7e2b1e8e!2sLake%20Bluff%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps lake bluff", "car wraps lake bluff", "fleet wraps lake bluff"],
    governmentUrl: "https://www.lakebluff.org/",
    businessStats: "Features charming downtown area with local businesses.",
    latitude: 42.2793,
    longitude: -87.8451,
  },
  {
    id: "libertyville",
    name: "Libertyville",
    state: "IL",
    description: "Libertyville is a vibrant community with historic downtown, beautiful homes, and excellent parks.",
    population: 20490,
    businessCount: 1600,
    distance: 34,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.2831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f92f25792fefb%3A0xcf56b21b830df94!2sLibertyville%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps libertyville", "car wraps libertyville", "fleet wraps libertyville"],
    governmentUrl: "https://www.libertyville.com/",
    businessStats: "Features vibrant downtown with restaurants and shops.",
    latitude: 42.2831,
    longitude: -87.9531,
  },
  {
    id: "mundelein",
    name: "Mundelein",
    state: "IL",
    description: "Mundelein is a diverse community with growing business sector, beautiful parks, and strong transportation links.",
    population: 31710,
    businessCount: 1950,
    distance: 35,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.2632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9394c19a22cd%3A0x28e7d586df77450!2sMundelein%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps mundelein", "car wraps mundelein", "fleet wraps mundelein"],
    governmentUrl: "https://www.mundelein.org/",
    businessStats: "Features diverse manufacturing and commercial sectors.",
    latitude: 42.2632,
    longitude: -88.0046,
  },
  {
    id: "vernon-hills",
    name: "Vernon Hills",
    state: "IL",
    description: "Vernon Hills is a premier shopping destination with Hawthorn Mall and numerous corporate headquarters.",
    population: 26850,
    businessCount: 2200,
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9220c84c71a9%3A0x7991be479bee7ec7!2sVernon%20Hills%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps vernon hills", "car wraps vernon hills", "fleet wraps vernon hills"],
    governmentUrl: "https://www.vernonhills.org/",
    businessStats: "Major retail center with corporate presence.",
    latitude: 42.2195,
    longitude: -87.9792,
  },
  {
    id: "gurnee",
    name: "Gurnee",
    state: "IL",
    description: "Gurnee is home to Six Flags Great America, Gurnee Mills shopping mall, and numerous businesses.",
    population: 30706,
    businessCount: 2400,
    distance: 38,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.3703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f918c17b98e9b%3A0xa862cb2f86ed9adc!2sGurnee%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps gurnee", "car wraps gurnee", "fleet wraps gurnee"],
    governmentUrl: "https://www.gurnee.il.us/",
    businessStats: "Major entertainment and retail destination.",
    latitude: 42.3703,
    longitude: -87.9018,
  },
  {
    id: "waukegan",
    name: "Waukegan",
    state: "IL",
    description: "Waukegan is a diverse city with historic downtown, lakefront harbor, and industrial sector.",
    population: 88796,
    businessCount: 5000,
    distance: 40,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.3636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccbeeb5a895%3A0x2465e1405c5231ac!2sWaukegan%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps waukegan", "car wraps waukegan", "fleet wraps waukegan"],
    governmentUrl: "https://www.waukeganil.gov/",
    businessStats: "Features diverse manufacturing and industrial sectors.",
    latitude: 42.3636,
    longitude: -87.8448,
  },
  {
    id: "elgin",
    name: "Elgin",
    state: "IL",
    description: "Elgin is a historic city with beautiful riverfront, diverse population, and strong manufacturing presence.",
    population: 114797,
    businessCount: 6300,
    distance: 37,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f13b5c6063c65%3A0x9ee4c9bada571ae7!2sElgin%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps elgin", "car wraps elgin", "fleet wraps elgin"],
    governmentUrl: "https://www.cityofelgin.org/",
    businessStats: "Features diverse manufacturing and service industries.",
    latitude: 42.0372,
    longitude: -88.2811,
  },
  {
    id: "hoffman-estates",
    name: "Hoffman Estates",
    state: "IL",
    description: "Hoffman Estates is home to corporate headquarters, Sears Centre Arena, and excellent parks.",
    population: 51638,
    businessCount: 3800,
    distance: 33,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb47ea8b57963%3A0xf59443a6b6f66ed4!2sHoffman%20Estates%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps hoffman estates", "car wraps hoffman estates", "fleet wraps hoffman estates"],
    governmentUrl: "https://www.hoffmanestates.org/",
    businessStats: "Major corporate center with diverse business base.",
    latitude: 42.0423,
    longitude: -88.1538,
  },
  {
    id: "rolling-meadows",
    name: "Rolling Meadows",
    state: "IL",
    description: "Rolling Meadows is a business-friendly community with numerous corporate offices and excellent services.",
    population: 24279,
    businessCount: 1800,
    distance: 27,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d42.0746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb1214a76e253%3A0x43dbc7ca7ffb8a9d!2sRolling%20Meadows%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps rolling meadows", "car wraps rolling meadows", "fleet wraps rolling meadows"],
    governmentUrl: "https://www.cityrm.org/",
    businessStats: "Home to several corporate headquarters.",
    latitude: 42.0746,
    longitude: -88.0131,
  },
  {
    id: "berwyn",
    name: "Berwyn",
    state: "IL",
    description: "Berwyn is a historic community with beautiful bungalow homes, vibrant arts scene, and diverse population.",
    population: 56579,
    businessCount: 3400,
    distance: 10,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3534e76a8aeb%3A0x2cf8fe5ab033ecef!2sBerwyn%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps berwyn", "car wraps berwyn", "fleet wraps berwyn"],
    governmentUrl: "https://www.berwyn-il.gov/",
    businessStats: "Features vibrant business district on Roosevelt Road.",
    latitude: 41.8509,
    longitude: -87.7904,
  },
  {
    id: "cicero",
    name: "Cicero",
    state: "IL",
    description: "Cicero is a historic, diverse community with strong industrial roots and convenient access to Chicago.",
    population: 81597,
    businessCount: 4100,
    distance: 8,
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47680.36985271!2d-88.11438047170074!2d-88.07319488385066!3d41.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e332c888dc5c3%3A0x57941b3644146d66!2sCicero%2C%20IL!5e0!3m2!1sen!2sus!4v1652287434042!5m2!1sen!2sus",
    keywords: ["vehicle wraps cicero", "car wraps cicero", "fleet wraps cicero"],
    governmentUrl: "https://www.thetownofcicero.com/",
    businessStats: "Features diverse industrial and commercial businesses.",
    latitude: 41.8456,
    longitude: -87.7639,
  }
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

// Helper to get towns by state
export const getTownsByState = (state: string): Town[] => {
  return towns.filter((town) => town.state === state);
};

// Helper to get nearby towns (within X miles)
export const getNearbyTowns = (townId: string, maxDistance: number = 20): Town[] => {
  const sourceTown = getTownData(townId);
  if (!sourceTown) return [];
  
  return towns
    .filter((town) => town.id !== townId && town.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
};
