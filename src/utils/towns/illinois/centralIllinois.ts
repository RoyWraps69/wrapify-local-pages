
import { TownData } from '../../townTypes';

// Peoria data
export const peoria: TownData = {
  id: "peoria",
  name: "Peoria",
  state: "IL",
  description: "Peoria is a major commercial and industrial hub in central Illinois, situated along the Illinois River. Known for its rich history, cultural institutions, and as the headquarters for Caterpillar Inc.",
  population: 113150,
  businessCount: 8200,
  distance: 167,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97171.61289153826!2d-89.71010107906882!3d40.72133837325193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880a31af0ba23987%3A0x118b318d34c68e22!2sPeoria%2C%20IL!5e0!3m2!1sen!2sus!4v1684501175496!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps peoria",
    "car wraps peoria",
    "fleet wraps peoria"
  ],
  governmentUrl: "https://www.peoriagov.org/",
  businessStats: "Major industrial center and healthcare hub for central Illinois.",
  latitude: 40.6936,
  longitude: -89.5890
};

// Springfield data
export const springfield: TownData = {
  id: "springfield",
  name: "Springfield",
  state: "IL",
  description: "Springfield is the capital city of Illinois and home to numerous historic sites related to Abraham Lincoln. The city combines government functions with a diverse economy and rich cultural heritage.",
  population: 114394,
  businessCount: 8000,
  distance: 200,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97267.61687075863!2d-89.73675712915647!3d39.76598527919635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887753c4c055e979%3A0xb13767e4f8f9cfda!2sSpringfield%2C%20IL!5e0!3m2!1sen!2sus!4v1684501219384!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps springfield",
    "car wraps springfield",
    "fleet wraps springfield"
  ],
  governmentUrl: "https://www.springfield.il.us/",
  businessStats: "State capital with government, healthcare, and insurance sectors.",
  latitude: 39.7817,
  longitude: -89.6501
};

// Champaign data
export const champaign: TownData = {
  id: "champaign",
  name: "Champaign",
  state: "IL",
  description: "Champaign is a vibrant university city home to the University of Illinois. The city features a strong tech sector, diverse cultural offerings, and a dynamic downtown area.",
  population: 88909,
  businessCount: 6500,
  distance: 135,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48588.687302073184!2d-88.31559602369748!3d40.11641307939768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd083f66dae85%3A0x34a573f3d6a5654!2sChampaign%2C%20IL!5e0!3m2!1sen!2sus!4v1684501262552!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps champaign",
    "car wraps champaign",
    "fleet wraps champaign"
  ],
  governmentUrl: "https://champaignil.gov/",
  businessStats: "University town with growing tech sector and research facilities.",
  latitude: 40.1164,
  longitude: -88.2434
};

// Group central Illinois towns
export const centralIllinoisTowns = [
  peoria,
  springfield,
  champaign
];
