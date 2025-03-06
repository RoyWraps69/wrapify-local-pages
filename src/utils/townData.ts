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
}

// Town data array
const towns: Town[] = [
  {
    id: "chicago",
    name: "Chicago",
    description: "Vehicle wraps and ceramic coatings in Chicago",
    distance: 0,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps chicago", "car wraps chicago", "fleet wraps chicago"],
    governmentUrl: "https://www.chicago.gov/",
    businessStats: "Large metropolitan area with diverse industries.",
    latitude: 41.8781,
    longitude: -87.6298,
  },
  {
    id: "evanston",
    name: "Evanston",
    description: "Vehicle wraps and ceramic coatings in Evanston",
    distance: 14,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps evanston", "car wraps evanston", "fleet wraps evanston"],
    governmentUrl: "https://www.cityofevanston.org/",
    businessStats: "Home to Northwestern University.",
    latitude: 42.0451,
    longitude: -87.6878,
  },
  {
    id: "oak-park",
    name: "Oak Park",
    description: "Vehicle wraps and ceramic coatings in Oak Park",
    distance: 9,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps oak park", "car wraps oak park", "fleet wraps oak park"],
    governmentUrl: "https://www.oak-park.us/",
    businessStats: "Known for its architecture.",
    latitude: 41.8489,
    longitude: -87.7817,
  },
  {
    id: "naperville",
    name: "Naperville",
    description: "Vehicle wraps and ceramic coatings in Naperville",
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps naperville", "car wraps naperville", "fleet wraps naperville"],
    governmentUrl: "https://www.naperville.il.us/",
    businessStats: "Large suburb with a strong economy.",
    latitude: 41.7534,
    longitude: -88.1481,
  },
  {
    id: "skokie",
    name: "Skokie",
    description: "Vehicle wraps and ceramic coatings in Skokie",
    distance: 16,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps skokie", "car wraps skokie", "fleet wraps skokie"],
    governmentUrl: "https://www.skokie.org/",
    businessStats: "Diverse community with a variety of businesses.",
    latitude: 42.0342,
    longitude: -87.7422,
  },
  {
    id: "des-plaines",
    name: "Des Plaines",
    description: "Vehicle wraps and ceramic coatings in Des Plaines",
    distance: 20,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps des plaines", "car wraps des plaines", "fleet wraps des plaines"],
    governmentUrl: "https://www.desplaines.org/",
    businessStats: "Located near O'Hare International Airport.",
    latitude: 42.0334,
    longitude: -87.8834,
  },
  {
    id: "schaumburg",
    name: "Schaumburg",
    description: "Vehicle wraps and ceramic coatings in Schaumburg",
    distance: 30,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps schaumburg", "car wraps schaumburg", "fleet wraps schaumburg"],
    governmentUrl: "https://www.schaumburg.com/",
    businessStats: "Major commercial and economic center.",
    latitude: 42.0275,
    longitude: -88.0831,
  },
  {
    id: "arlington-heights",
    name: "Arlington Heights",
    description: "Vehicle wraps and ceramic coatings in Arlington Heights",
    distance: 25,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps arlington heights", "car wraps arlington heights", "fleet wraps arlington heights"],
    governmentUrl: "https://www.vah.com/",
    businessStats: "Known for its high quality of life.",
    latitude: 42.0889,
    longitude: -87.9806,
  },
  {
    id: "palatine",
    name: "Palatine",
    description: "Vehicle wraps and ceramic coatings in Palatine",
    distance: 28,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
    keywords: ["vehicle wraps palatine", "car wraps palatine", "fleet wraps palatine"],
    governmentUrl: "https://www.palatine.il.us/",
    businessStats: "Features a mix of residential and commercial areas.",
    latitude: 42.1139,
    longitude: -88.0356,
  },
  {
    id: "mount-prospect",
    name: "Mount Prospect",
    description: "Vehicle wraps and ceramic coatings in Mount Prospect",
    distance: 22,
    mapUrl: "https://www.google.com/maps/embed?pb=!4v1714744724999!6m8!1m7!1sCAoSLEFGMVFpcE5VNjJ5TjE0bDFyV1l6a1RQTzJpYkFkS3JEQWJvY19BSlJZV0E4!2m2!1d41.8781136!2d-87.6297982!3f270!4f0!5f0.7820865974627469",
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
