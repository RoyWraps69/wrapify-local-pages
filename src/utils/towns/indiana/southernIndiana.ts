
import { TownData } from '../../townTypes';

export const bloomington: TownData = {
  id: "bloomington",
  name: "Bloomington",
  state: "IN",
  description: "Bloomington is home to Indiana University and is known for its vibrant arts scene, cultural diversity, and scenic natural surroundings.",
  population: 79168,
  businessCount: 6000,
  distance: 232,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49351.21387520353!2d-86.57851771640918!3d39.16763919772203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c5df6b483d8e7%3A0xe91a912d8bad33d9!2sBloomington%2C%20IN!5e0!3m2!1sen!2sus!4v1684503624008!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps bloomington",
    "car wraps bloomington",
    "fleet wraps bloomington"
  ],
  governmentUrl: "https://bloomington.in.gov/",
  businessStats: "Education center with strong arts and technology sectors.",
  latitude: 39.1653,
  longitude: -86.5264
};

export const evansville: TownData = {
  id: "evansville",
  name: "Evansville",
  state: "IN",
  description: "Evansville is the largest city in Southern Indiana, situated on the Ohio River. It's a commercial, medical, and cultural hub for the tri-state area.",
  population: 117979,
  businessCount: 9500,
  distance: 327,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98917.04693939483!2d-87.65672932936403!3d37.97480632378698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886e16285b57db07%3A0x3b7f75d808bd180!2sEvansville%2C%20IN!5e0!3m2!1sen!2sus!4v1684503440872!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps evansville",
    "car wraps evansville",
    "fleet wraps evansville"
  ],
  governmentUrl: "https://www.evansville.in.gov/",
  businessStats: "Regional commercial hub with healthcare and manufacturing focus.",
  latitude: 37.9748,
  longitude: -87.5558
};

export const southernIndianaTowns = [
  bloomington,
  evansville
];
