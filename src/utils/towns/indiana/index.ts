
// Export all Indiana regions
import { northernIndianaTowns } from './northernIndiana';
import { centralIndianaTowns } from './centralIndiana';
import { southernIndianaTowns } from './southernIndiana';

// Combine all Indiana towns
export const indianaTowns = [
  ...northernIndianaTowns,
  ...centralIndianaTowns,
  ...southernIndianaTowns
];

// Export individual town regions for direct imports
export * from './northernIndiana';
export * from './centralIndiana';
export * from './southernIndiana';
