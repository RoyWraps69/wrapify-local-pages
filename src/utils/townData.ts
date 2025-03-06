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
  governmentUrl?: string; // Adding government URL
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.33858851965!2d-87.73196395!3d41.83373645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1652278414042!5m2!1sen!2sus",
    governmentUrl: "https://www.chicago.gov"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47506.56208528876!2d-87.7336559726306!3d42.04582370427972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fccd0c5b80413%3A0xe1b5f964f4ea6ac!2sEvanston%2C%20IL!5e0!3m2!1sen!2sus!4v1683566832512!5m2!1sen!2sus",
    governmentUrl: "https://www.cityofevanston.org"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11887.899129883314!2d-87.79483562076373!3d41.88529111614896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e348f5b56a5af%3A0x8e3d679d64b74954!2sOak%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683566886317!5m2!1sen!2sus",
    governmentUrl: "https://www.oak-park.us"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95099.17627734168!2d-88.20956245000001!3d41.750957949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5761843c37d9%3A0x324dd6b2f79d0fd5!2sNaperville%2C%20IL!5e0!3m2!1sen!2sus!4v1683566941107!5m2!1sen!2sus",
    governmentUrl: "https://www.naperville.il.us"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47486.31507014407!2d-87.77583077243169!3d42.0799591021281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5d4c8eb0b27%3A0xbdf81a149d228bc2!2sSkokie%2C%20IL!5e0!3m2!1sen!2sus!4v1683566994937!5m2!1sen!2sus",
    governmentUrl: "https://www.skokie.org"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47438.54364699935!2d-88.10966087233155!3d42.15916315132686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0cd594ff33d%3A0x43a3d4551e59096d!2sSchaumburg%2C%20IL!5e0!3m2!1sen!2sus!4v1683567066167!5m2!1sen!2sus",
    governmentUrl: "https://www.villageofschaumburg.com"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47603.17707097068!2d-87.78199577269283!3d41.855014614789695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e33696ff8b607%3A0x2cc179df3b97ed6a!2sCicero%2C%20IL!5e0!3m2!1sen!2sus!4v1683567127467!5m2!1sen!2sus",
    governmentUrl: "https://www.thetownofcicero.com"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23767.39052022499!2d-87.85892888602603!3d42.01115459659342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc9b495652a33%3A0x30c9686e81844c06!2sPark%20Ridge%2C%20IL!5e0!3m2!1sen!2sus!4v1683567185007!5m2!1sen!2sus",
    governmentUrl: "https://www.parkridge.us"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47629.51839426538!2d-87.78006877274095!3d41.805012218950805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e39ad02c99191%3A0xd165eee6e097c67e!2sOak%20Lawn%2C%20IL!5e0!3m2!1sen!2sus!4v1683567239887!5m2!1sen!2sus",
    governmentUrl: "https://www.oak-lawn.org"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47607.79066228767!2d-87.80974707270176!3d41.84599061530089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e346c2b7d08c5%3A0x5063fe3d59c841e8!2sBerwyn%2C%20IL!5e0!3m2!1sen!2sus!4v1683567302527!5m2!1sen!2sus",
    governmentUrl: "https://www.berwyn.org"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47457.76037557574!2d-87.93421437238267!3d42.12778465348577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb622696c8499%3A0x8494532d641de17!2sDes%20Plaines%2C%20IL!5e0!3m2!1sen!2sus!4v1683567357397!5m2!1sen!2sus",
    governmentUrl: "https://www.des-plaines.org"
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47438.37673349172!2d-88.02045917233143!3d42.159436651328804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa1e600d2e70b%3A0xd3528b0ba2ba3cb5!2sArlington%20Heights%2C%20IL!5e0!3m2!1sen!2sus!4v1683567418857!5m2!1sen!2sus",
    governmentUrl: "https://www.arlington-heights.org"
  },
  {
    id: "joliet",
    name: "Joliet",
    state: "IL",
    distance: 40,
    population: 148172,
    description: "Joliet is one of the largest cities in Illinois and a major transportation hub. With its industrial background and growing commercial sector, businesses in Joliet can benefit significantly from fleet wraps and vehicle graphics that increase visibility throughout this expansive area.",
    businessCount: 4200,
    keywords: ["Joliet vehicle wraps", "car wrapping Joliet IL", "Joliet business fleet wraps", "commercial vehicle graphics Joliet"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95241.6090148498!2d-88.12900757775143!3d41.52410877775202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e7d5b5e5a1159%3A0x713020608e79be9!2sJoliet%2C%20IL!5e0!3m2!1sen!2sus!4v1683567567467!5m2!1sen!2sus",
    governmentUrl: "https://www.joliet.org"
  },
  {
    id: "waukegan",
    name: "Waukegan",
    state: "IL",
    distance: 36,
    population: 86075,
    description: "Waukegan is a diverse city on Lake Michigan's shore with a mix of industrial, commercial, and residential areas. As the county seat of Lake County, Waukegan businesses can reach a wide audience with professionally designed vehicle wraps.",
    businessCount: 2700,
    keywords: ["Waukegan vehicle wraps", "car wrapping Waukegan IL", "Lake County vehicle graphics", "Waukegan fleet branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47357.07170864696!2d-87.87316257217442!3d42.3649926264184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fecadc2d1a1cf%3A0xcf6168f9c8788591!2sWaukegan%2C%20IL!5e0!3m2!1sen!2sus!4v1683567627467!5m2!1sen!2sus",
    governmentUrl: "https://www.waukegan.org"
  },
  {
    id: "elgin",
    name: "Elgin",
    state: "IL",
    distance: 40,
    population: 111683,
    description: "Elgin is a vibrant city with a strong manufacturing history and growing service sector. Its strategic location along the Fox River and major highways makes it an ideal place for businesses to utilize vehicle wraps for maximum visibility throughout the region.",
    businessCount: 3500,
    keywords: ["Elgin vehicle wraps", "car wrapping Elgin IL", "Fox Valley vehicle graphics", "Elgin fleet branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47497.70423154066!2d-88.3112027725288!3d42.0591691132493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f132cb8621669%3A0x7c49300f3be064b2!2sElgin%2C%20IL!5e0!3m2!1sen!2sus!4v1683567687467!5m2!1sen!2sus",
    governmentUrl: "https://www.elgin.org"
  },
  {
    id: "bolingbrook",
    name: "Bolingbrook",
    state: "IL",
    distance: 30,
    population: 75201,
    description: "Bolingbrook is a rapidly growing suburb with extensive retail development and business parks. Companies in Bolingbrook can take advantage of vehicle wraps to increase brand recognition in this affluent and expanding market.",
    businessCount: 2000,
    keywords: ["Bolingbrook vehicle wraps", "car wrapping Bolingbrook IL", "Bolingbrook fleet graphics", "business vehicle wraps Bolingbrook"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47629.28401140732!2d-88.13562397273981!3d41.80541981890175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e5a179988e233%3A0x8de6fb015c9c4fc7!2sBolingbrook%2C%20IL!5e0!3m2!1sen!2sus!4v1683567747467!5m2!1sen!2sus",
    governmentUrl: "https://www.bolingbrook.org"
  },
  {
    id: "hoffman-estates",
    name: "Hoffman Estates",
    state: "IL",
    distance: 32,
    population: 51252,
    description: "Hoffman Estates is home to major corporate headquarters and a significant retail presence. The business-friendly environment makes it an ideal location for companies to invest in professional vehicle wraps to enhance their brand presence.",
    businessCount: 1800,
    keywords: ["Hoffman Estates vehicle wraps", "car wrapping Hoffman Estates", "Northwest suburbs fleet graphics", "corporate vehicle branding Hoffman Estates"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47438.372343582326!2d-88.15269767233143!3d42.15943915132694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa0f73faa4c43%3A0x17da3c1e7b49f143!2sHoffman%20Estates%2C%20IL!5e0!3m2!1sen!2sus!4v1683567807467!5m2!1sen!2sus",
    governmentUrl: "https://www.hoffman-estates.org"
  },
  {
    id: "downers-grove",
    name: "Downers Grove",
    state: "IL",
    distance: 22,
    population: 49504,
    description: "Downers Grove is an upscale western suburb with excellent transportation access and a thriving downtown. Its mix of residential charm and commercial activity creates an ideal environment for vehicle wrap advertising.",
    businessCount: 1700,
    keywords: ["Downers Grove vehicle wraps", "car wrapping Downers Grove", "western suburbs fleet graphics", "Downers Grove business vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47592.14563624025!2d-88.04532177267087!3d41.8747701079204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4f5029c8c45d%3A0x39b4fdaadc80f6d0!2sDowners%20Grove%2C%20IL!5e0!3m2!1sen!2sus!4v1683567867467!5m2!1sen!2sus",
    governmentUrl: "https://www.downers-grove.org"
  },
  {
    id: "glenview",
    name: "Glenview",
    state: "IL",
    distance: 18,
    population: 47680,
    description: "Glenview is an affluent north suburban community with a strong retail and corporate presence. The high-income demographic makes it an excellent market for premium vehicle wraps and specialized automotive aesthetics.",
    businessCount: 1900,
    keywords: ["Glenview vehicle wraps", "car wrapping Glenview IL", "North Shore vehicle graphics", "luxury car wraps Glenview"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47470.33761842983!2d-87.83338277240157!3d42.1084806999051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5592327a405%3A0x97bde0b9666d3ad8!2sGlenview%2C%20IL!5e0!3m2!1sen!2sus!4v1683567927467!5m2!1sen!2sus",
    governmentUrl: "https://www.glenview.org"
  },
  {
    id: "palatine",
    name: "Palatine",
    state: "IL",
    distance: 30,
    population: 68557,
    description: "Palatine is a northwest suburban community with a diverse economic base. Its strategic location near major highways provides excellent opportunities for business vehicle wraps to gain visibility across the Chicago metropolitan area.",
    businessCount: 2100,
    keywords: ["Palatine vehicle wraps", "car wrapping Palatine IL", "Northwest suburban fleet graphics", "Palatine business vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47447.96246889156!2d-88.05868717236641!3d42.1454991525124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa1e600d2e70b%3A0xd3528b0ba2ba3cb5!2sPalatine%2C%20IL!5e0!3m2!1sen!2sus!4v1683567987467!5m2!1sen!2sus",
    governmentUrl: "https://www.palatine.org"
  },
  {
    id: "wheaton",
    name: "Wheaton",
    state: "IL",
    distance: 25,
    population: 53480,
    description: "Wheaton is a picturesque suburban city known for its historic downtown, Wheaton College, and numerous parks. As a community with a strong mix of residential and business areas, Wheaton offers excellent opportunities for custom vehicle wraps that appeal to its upscale demographic.",
    businessCount: 1850,
    keywords: ["Wheaton vehicle wraps", "car wrapping Wheaton IL", "Wheaton College area vehicle graphics", "luxury car wraps Wheaton"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47529.10204283615!2d-88.14965747248862!3d41.86640711413758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e56fbbbb3e9ef%3A0x5c4713eaba8f332b!2sWheaton%2C%20IL!5e0!3m2!1sen!2sus!4v1683567987467!5m2!1sen!2sus",
    governmentUrl: "https://www.wheaton.il.us"
  },
  {
    id: "mount-prospect",
    name: "Mount Prospect",
    state: "IL",
    distance: 23,
    population: 56748,
    description: "Mount Prospect is a thriving northwest suburban village with a diverse economic base and strong community spirit. Its prime location near major highways and O'Hare Airport makes it an ideal place for businesses to utilize vehicle wraps for maximum visibility throughout the Chicago area.",
    businessCount: 1950,
    keywords: ["Mount Prospect vehicle wraps", "car wrapping Mount Prospect IL", "Northwest suburban fleet graphics", "Mount Prospect commercial vehicle wraps"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47467.69682097651!2d-87.96369497239762!3d42.11349619968188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb105a5aec045%3A0x100d6973fa1b5403!2sMount%20Prospect%2C%20IL!5e0!3m2!1sen!2sus!4v1683568047467!5m2!1sen!2sus",
    governmentUrl: "https://www.mountprospect.org"
  },
  {
    id: "tinley-park",
    name: "Tinley Park",
    state: "IL",
    distance: 28,
    population: 57144,
    description: "Tinley Park is a vibrant southwest suburban village known for its music venue and strong commercial corridors. As a growing community with diverse businesses, Tinley Park offers excellent opportunities for effective vehicle wrap advertising and fleet branding.",
    businessCount: 2100,
    keywords: ["Tinley Park vehicle wraps", "car wrapping Tinley Park IL", "south suburban fleet graphics", "Tinley Park business vehicle wraps"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47713.24124177713!2d-87.80584127291158!3d41.64917512488868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e170eff2aa46f%3A0x35e4874741ea3f5c!2sTinley%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683568107467!5m2!1sen!2sus",
    governmentUrl: "https://www.tinleypark.org"
  },
  {
    id: "elmhurst",
    name: "Elmhurst",
    state: "IL",
    distance: 16,
    population: 47260,
    description: "Elmhurst is an upscale western suburb with a charming downtown, Elmhurst College, and excellent transportation access. Its affluent residential areas and diverse business districts make it an ideal location for premium vehicle wraps and automotive enhancement services.",
    businessCount: 1800,
    keywords: ["Elmhurst vehicle wraps", "car wrapping Elmhurst IL", "Elmhurst College area vehicle graphics", "luxury vehicle wraps Elmhurst"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47556.89903983123!2d-87.9683887726171!3d41.9194441034613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4cd01f4ded8f%3A0x4b1e8bc0ce1b6f06!2sElmhurst%2C%20IL!5e0!3m2!1sen!2sus!4v1683568167467!5m2!1sen!2sus",
    governmentUrl: "https://www.elmhurst.org"
  },
  {
    id: "orland-park",
    name: "Orland Park",
    state: "IL",
    distance: 25,
    population: 58765,
    description: "Orland Park is a premier shopping and dining destination in Chicago's southwest suburbs with strong retail corridors and business districts. Its affluent demographic and commercial presence make it an excellent market for high-quality vehicle wraps and fleet branding solutions.",
    businessCount: 2400,
    keywords: ["Orland Park vehicle wraps", "car wrapping Orland Park IL", "southwest suburban fleet wraps", "retail vehicle branding Orland Park"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47699.926093325724!2d-87.86959257288738!3d41.67401012297654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e151582e1634d%3A0xdc3c7652d36def20!2sOrland%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683568227467!5m2!1sen!2sus",
    governmentUrl: "https://www.orland-park.il.us"
  },
  {
    id: "lombard",
    name: "Lombard",
    state: "IL",
    distance: 20,
    population: 44476,
    description: "Lombard, known as the Lilac Village, is a charming western suburb with strong retail corridors and business districts. Its central location in DuPage County makes it an ideal place for businesses to utilize vehicle wraps that will gain visibility throughout Chicago's western suburbs.",
    businessCount: 1700,
    keywords: ["Lombard vehicle wraps", "car wrapping Lombard IL", "Lilac Village fleet graphics", "DuPage County vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47556.89985376123!2d-88.0335287726171!3d41.91944358765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e4ddf22f42785%3A0x7fc28298759f511e!2sLombard%2C%20IL!5e0!3m2!1sen!2sus!4v1683568287467!5m2!1sen!2sus",
    governmentUrl: "https://www.villageoflombard.org"
  },
  {
    id: "mchenry",
    name: "McHenry",
    state: "IL",
    distance: 50,
    population: 26807,
    description: "McHenry is a scenic city located along the Fox River in McHenry County, known for its waterfront activities and strong community spirit. Businesses in this growing area can significantly benefit from professional vehicle wraps that increase their visibility throughout this expansive county.",
    businessCount: 1100,
    keywords: ["McHenry vehicle wraps", "car wrapping McHenry IL", "Fox River vehicle graphics", "McHenry County fleet branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47323.1399733833!2d-88.3043175719896!3d42.424741808929455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f7096e885ece7%3A0xdddf63589ec8ae6f!2sMcHenry%2C%20IL!5e0!3m2!1sen!2sus!4v1683568347467!5m2!1sen!2sus",
    governmentUrl: "https://www.cityofmchenry.org"
  },
  {
    id: "oswego",
    name: "Oswego",
    state: "IL",
    distance: 45,
    population: 34585,
    description: "Oswego is a rapidly growing village in Kendall County with expanding residential developments and business corridors. As a community experiencing significant growth, Oswego businesses can leverage vehicle wraps to establish strong brand recognition in this developing market.",
    businessCount: 950,
    keywords: ["Oswego vehicle wraps", "car wrapping Oswego IL", "Kendall County fleet graphics", "Oswego business vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47651.72353764172!2d-88.35634257377788!3d41.76657522184294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef8ee1dcee6a7%3A0xea0a5f3e5b63973c!2sOswego%2C%20IL!5e0!3m2!1sen!2sus!4v1683568407467!5m2!1sen!2sus",
    governmentUrl: "https://www.oswegoil.org"
  },
  {
    id: "woodridge",
    name: "Woodridge",
    state: "IL",
    distance: 26,
    population: 34051,
    description: "Woodridge is a diverse village in the western suburbs with strong business parks and commercial development. Its strategic location near major highways makes it an excellent place for businesses to employ vehicle wraps that will gain visibility throughout the Chicago metropolitan area.",
    businessCount: 1200,
    keywords: ["Woodridge vehicle wraps", "car wrapping Woodridge IL", "DuPage County fleet graphics", "Woodridge commercial vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47570.125686574!2d-88.06019457264092!3d41.89742311134713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e50ab3d9ee555%3A0x34d28780e83681dd!2sWoodridge%2C%20IL!5e0!3m2!1sen!2sus!4v1683568467467!5m2!1sen!2sus",
    governmentUrl: "https://www.woodridge.il.us"
  },
  {
    id: "buffalo-grove",
    name: "Buffalo Grove",
    state: "IL",
    distance: 33,
    population: 41778,
    description: "Buffalo Grove is an affluent village straddling Lake and Cook counties, known for its strong corporate presence and family-friendly atmosphere. The business-friendly environment makes it an ideal location for companies to invest in professional vehicle wraps to enhance their brand visibility.",
    businessCount: 1600,
    keywords: ["Buffalo Grove vehicle wraps", "car wrapping Buffalo Grove IL", "Northwest suburban fleet graphics", "corporate vehicle branding Buffalo Grove"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47433.75364064171!2d-87.98317957232418!3d42.16711905064292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa10445a27a93%3A0x32f429ceef75d378!2sBuffalo%20Grove%2C%20IL!5e0!3m2!1sen!2sus!4v1683568527467!5m2!1sen!2sus",
    governmentUrl: "https://www.vbg.org"
  },
  {
    id: "crystal-lake",
    name: "Crystal Lake",
    state: "IL",
    distance: 50,
    population: 40269,
    description: "Crystal Lake is the largest city in McHenry County, named for its beautiful namesake lake and known for its mix of retail, industry, and recreation. Businesses in this regional hub can effectively leverage vehicle wraps to increase their visibility throughout this expansive region.",
    businessCount: 1800,
    keywords: ["Crystal Lake vehicle wraps", "car wrapping Crystal Lake IL", "McHenry County fleet graphics", "Crystal Lake business vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47349.05407564047!2d-88.34647867203936!3d42.3775416249821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f70128eb635c3%3A0x89424ec9f13af2bb!2sCrystal%20Lake%2C%20IL!5e0!3m2!1sen!2sus!4v1683568587467!5m2!1sen!2sus",
    governmentUrl: "https://www.crystallake.org"
  },
  {
    id: "northbrook",
    name: "Northbrook",
    state: "IL",
    distance: 24,
    population: 34277,
    description: "Northbrook is an affluent northern suburb with a strong retail presence anchored by Northbrook Court mall and numerous corporate headquarters. The high-income demographic makes it an excellent market for premium vehicle wraps and specialized automotive aesthetics.",
    businessCount: 1700,
    keywords: ["Northbrook vehicle wraps", "car wrapping Northbrook IL", "North Shore vehicle graphics", "luxury vehicle wraps Northbrook"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47449.27193168498!2d-87.84911747236853!3d42.14330415297474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc0feceaa872d%3A0x6c1157ab5c4a1cfe!2sNorthbrook%2C%20IL!5e0!3m2!1sen!2sus!4v1683568647467!5m2!1sen!2sus",
    governmentUrl: "https://www.northbrook.il.us"
  },
  {
    id: "addison",
    name: "Addison",
    state: "IL",
    distance: 20,
    population: 36942,
    description: "Addison is a diverse village with a strong industrial and manufacturing base in Chicago's western suburbs. Its strategic location near major transportation corridors makes it an ideal place for businesses to utilize vehicle wraps for maximum visibility throughout the region.",
    businessCount: 1400,
    keywords: ["Addison vehicle wraps", "car wrapping Addison IL", "DuPage County fleet graphics", "industrial vehicle branding Addison"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47537.88889259635!2d-88.04088397250236!3d41.85057611561097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e32cf9211d151%3A0x3f62a4a24e65ce70!2sAddison%2C%20IL!5e0!3m2!1sen!2sus!4v1683568707467!5m2!1sen!2sus",
    governmentUrl: "https://www.addisonadvantage.org"
  },
  {
    id: "vernon-hills",
    name: "Vernon Hills",
    state: "IL",
    distance: 32,
    population: 26850,
    description: "Vernon Hills is a retail-rich village in Lake County with major shopping centers and corporate offices. Its affluent demographic and strong commercial presence make it an excellent market for high-quality vehicle wraps and fleet branding solutions.",
    businessCount: 1300,
    keywords: ["Vernon Hills vehicle wraps", "car wrapping Vernon Hills IL", "Lake County fleet graphics", "commercial vehicle branding Vernon Hills"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47401.84438219906!2d-87.99026957226968!3d42.22100854521823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f9433d73bae0f%3A0x38fb97f9a73a8b40!2sVernon%20Hills%2C%20IL!5e0!3m2!1sen!2sus!4v1683568767467!5m2!1sen!2sus",
    governmentUrl: "https://www.vernonhills.org"
  },
  {
    id: "niles",
    name: "Niles",
    state: "IL",
    distance: 15,
    population: 30001,
    description: "Niles is a diverse village with a strong retail presence and multicultural business community. Its convenient location near major highways and proximity to Chicago makes it an excellent place for businesses to utilize vehicle wraps for maximum visibility in the metropolitan area.",
    businessCount: 1200,
    keywords: ["Niles vehicle wraps", "car wrapping Niles IL", "North suburban fleet graphics", "multicultural business vehicle branding Niles"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47494.03428608428!2d-87.84329477252304!3d42.065779612132844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcf1628c42b1d%3A0xfe4ee0f7ac462309!2sNiles%2C%20IL!5e0!3m2!1sen!2sus!4v1683568827467!5m2!1sen!2sus",
    governmentUrl: "https://www.vniles.com"
  },
  {
    id: "streamwood",
    name: "Streamwood",
    state: "IL",
    distance: 35,
    population: 40351,
    description: "Streamwood is a diverse northwest suburban village with a mix of residential and commercial areas. Its strategic location in the growing northwest corridor makes it an ideal place for businesses to utilize vehicle wraps that will gain visibility throughout this expanding region.",
    businessCount: 1100,
    keywords: ["Streamwood vehicle wraps", "car wrapping Streamwood IL", "Northwest suburban fleet graphics", "Streamwood business vehicle branding"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47479.94877075881!2d-88.19095747242013!3d42.09124470057453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f072564e0c9b9%3A0xa33c0fbafe29be19!2sStreamwood%2C%20IL!5e0!3m2!1sen!2sus!4v1683568887467!5m2!1sen!2sus",
    governmentUrl: "https://www.streamwood.org"
  },
  {
    id: "hanover-park",
    name: "Hanover Park",
    state: "IL",
    distance: 33,
    population: 38510,
    description: "Hanover Park is a diverse northwest suburban village with strong transportation access and a growing business community. Its multicultural population and strategic location make it an excellent place for businesses to utilize vehicle wraps that connect with a variety of demographics.",
    businessCount: 950,
    keywords: ["Hanover Park vehicle wraps", "car wrapping Hanover Park IL", "Northwest suburban fleet graphics", "multicultural vehicle branding Hanover Park"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47498.27252954252!2d-88.16557677252976!3d42.0583091133284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f035db1bcdedd%3A0x392de5e6bd8c0391!2sHanover%20Park%2C%20IL!5e0!3m2!1sen!2sus!4v1683568947467!5m2!1sen!2sus",
    governmentUrl: "https://www.hpil.org"
  },
  {
    id: "carol-stream",
    name: "Carol Stream",
    state: "IL",
    distance: 30,
    population: 40438,
    description: "Carol Stream is a thriving western suburban village with a strong industrial base and growing business parks. Its strategic location and diverse economic mix make it an ideal place for businesses to utilize vehicle wraps for increased brand recognition throughout DuPage County.",
    businessCount: 1600,
    keywords: ["Carol Stream vehicle wraps", "car wrapping Carol Stream IL", "DuPage County fleet graphics", "industrial vehicle branding Carol Stream"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47517.29152929366!2d-88.15522647246863!3d41.8864891105684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fa8d2ea49bc9f%3A0x64cb1cc1b4f1112d!2sCarol%20Stream%2C%20IL!5e0!3m2!1sen!2sus!4v1683569007467!5m2!1sen!2sus",
    governmentUrl: "https://www.carolstream.org"
  },
  {
    id: "elk-grove-village",
    name: "Elk Grove Village",
    state: "IL",
    distance: 20,
    population: 34727,
    description: "Elk Grove Village is home to the largest consolidated business park in North America, with a strong industrial and manufacturing focus. Its massive business presence and proximity to O'Hare Airport make it an ideal location for companies to invest in professional vehicle wraps for maximum brand exposure.",
    businessCount: 3800,
    keywords: ["Elk Grove Village vehicle wraps", "car wrapping Elk Grove Village IL", "industrial park fleet graphics", "business park vehicle branding Elk Grove"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47476.80175805775!2d-88.02613467241183!3d42.09831470127242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb0155cd6a09d%3A0x70d213f857a4cc30!2sElk%20Grove%20Village%2C%20IL!5e0!3m2!1sen!2sus!4v1683569067467!5m2!1sen!2sus",
    governmentUrl: "https://www.elkgrove.org"
  },
  {
    id: "wheeling",
    name: "Wheeling",
    state: "IL",
    distance: 27,
    population: 39585,
    description: "Wheeling is a diverse northwest suburban village known for its Restaurant Row and strong industrial corridors. Its mix of culinary attractions and manufacturing businesses creates diverse opportunities for effective vehicle wrap advertising and fleet branding solutions.",
    businessCount: 1400,
    keywords: ["Wheeling vehicle wraps", "car wrapping Wheeling IL", "Northwest suburban fleet graphics", "restaurant vehicle branding Wheeling"],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47444.731453075825!2d-87.9545137723547!3d42.15064615216074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb020a4b31d19%3A0xd9e13b21aa0a0a36!2sWheeling%2C%20IL!5e0!3m2!1sen!2sus!4v1683569127467!5m2!1sen!2sus",
    governmentUrl: "https://www.wheelingil.gov"
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

export const getAllTowns = (): Town[] => {
  return towns;
};

export const getTownData = (townSlug: string): Town | undefined => {
  return towns.find(town => town.id === townSlug);
};
