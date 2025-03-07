
import { TownData } from '../../../townTypes';

// Northbrook - 23 miles from Chicago
export const northbrook: TownData = {
  id: "northbrook",
  name: "Northbrook",
  state: "IL",
  description: "Northbrook is a thriving suburb located 23 miles north of downtown Chicago. Known for its excellent schools, expansive parks, diverse shopping options at Northbrook Court mall, and strong business community, Northbrook offers residents a high quality of life with abundant amenities and recreational opportunities.",
  population: 33170,
  businessCount: 2200,
  distance: 23,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47440.20718382855!2d-87.83367431579892!3d42.13333037921184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc0f9c7b351a7%3A0x511192d30a889388!2sNorthbrook%2C%20IL!5e0!3m2!1sen!2sus!4v1684501351768!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps northbrook",
    "car wraps northbrook",
    "fleet wraps northbrook",
    "commercial vehicle graphics northbrook"
  ],
  governmentUrl: "https://www.northbrook.il.us/",
  businessStats: "Major corporate headquarters and retail center with diverse business community.",
  latitude: 42.1275,
  longitude: -87.8327
};

// Glenview - 16 miles from Chicago
export const glenview: TownData = {
  id: "glenview",
  name: "Glenview",
  state: "IL",
  description: "Glenview is an upscale village located 16 miles northwest of downtown Chicago. With its excellent schools, abundant parks, The Glen Town Center shopping district, and two prestigious golf courses, Glenview offers residents a suburban paradise with convenient access to Chicago via multiple transportation options.",
  population: 47759,
  businessCount: 3100,
  distance: 16,
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47522.77818382855!2d-87.82367431579892!3d42.08333037921184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fc5b23043f38f%3A0x3c6fb8e9c32e332e!2sGlenview%2C%20IL!5e0!3m2!1sen!2sus!4v1684501351768!5m2!1sen!2sus",
  keywords: [
    "vehicle wraps glenview",
    "car wraps glenview",
    "fleet wraps glenview",
    "premium vehicle graphics glenview"
  ],
  governmentUrl: "https://www.glenview.il.us/",
  businessStats: "Strong corporate presence with major offices and upscale retail centers.",
  latitude: 42.0800,
  longitude: -87.8178
};

// Export north suburbs as an array
export const northSuburbsList = [
  northbrook,
  glenview
];
