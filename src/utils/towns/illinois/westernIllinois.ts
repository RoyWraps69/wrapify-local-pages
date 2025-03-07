
import { TownData } from '../../townTypes';

// Quincy data
export const quincy: TownData = {
  id: "quincy",
  name: "Quincy",
  state: "IL",
  description: "Quincy is a historic river city located on the banks of the Mississippi River. Known for its beautiful architectural heritage, thriving arts scene, and strong manufacturing base, Quincy offers a blend of small-town charm with larger city amenities.",
  population: 40155,
  businessCount: 2800,
  distance: 265,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97040.37687075863!2d-91.46675712915647!3d39.92598527919635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dfc2da5fe8b20d%3A0x764957973a4a9a22!2sQuincy%2C%20IL!5e0!3m2!1sen!2sus!4v1684501219384!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps quincy",
    "car wraps quincy",
    "fleet wraps quincy",
    "vehicle graphics quincy"
  ],
  governmentUrl: "https://www.quincyil.gov/",
  businessStats: "River city with strong manufacturing and healthcare sectors.",
  latitude: 39.9356,
  longitude: -91.4098
};

// Macomb data
export const macomb: TownData = {
  id: "macomb",
  name: "Macomb",
  state: "IL",
  description: "Macomb is a vibrant college town, home to Western Illinois University. The city combines academic resources with historic charm, featuring a beautiful downtown square, diverse dining options, and a strong sense of community in the heart of western Illinois.",
  population: 17413,
  businessCount: 1300,
  distance: 220,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97040.37687075863!2d-90.66675712915647!3d40.42598527919635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e0c0c4be3cfa15%3A0xfc7faa8e9ad98da1!2sMacomb%2C%20IL!5e0!3m2!1sen!2sus!4v1684501219384!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps macomb",
    "car wraps macomb",
    "fleet wraps macomb",
    "business vehicle graphics macomb"
  ],
  governmentUrl: "https://cityofmacomb.com/",
  businessStats: "University town with education as primary economic driver.",
  latitude: 40.4592,
  longitude: -90.6718
};

// Galesburg data
export const galesburg: TownData = {
  id: "galesburg",
  name: "Galesburg",
  state: "IL",
  description: "Galesburg is a historic railroad city with a rich cultural heritage, home to Knox College and the birthplace of Carl Sandburg. The city continues its strong transportation legacy while diversifying its economy through education, healthcare, and manufacturing.",
  population: 30197,
  businessCount: 2100,
  distance: 195,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97040.37687075863!2d-90.36675712915647!3d40.92598527919635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e21c35205cc747%3A0x4b12248e1b91b234!2sGalesburg%2C%20IL!5e0!3m2!1sen!2sus!4v1684501219384!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps galesburg",
    "car wraps galesburg",
    "fleet wraps galesburg",
    "commercial vehicle graphics galesburg"
  ],
  governmentUrl: "https://www.ci.galesburg.il.us/",
  businessStats: "Railroad city with growing healthcare and education sectors.",
  latitude: 40.9478,
  longitude: -90.3712
};

// Group western Illinois towns
export const westernIllinoisTowns = [
  quincy,
  macomb,
  galesburg
];
