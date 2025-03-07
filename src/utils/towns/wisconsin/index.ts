
// Export all Wisconsin regions
import { southeasternWisconsinTowns } from './southeasternWisconsin';
import { northeasternWisconsinTowns } from './northeasternWisconsin';
import { westernWisconsinTowns } from './westernWisconsin';

// Combine all Wisconsin towns
export const wisconsinTowns = [
  ...southeasternWisconsinTowns,
  ...northeasternWisconsinTowns,
  ...westernWisconsinTowns
];

// Export individual town regions for direct imports
export * from './southeasternWisconsin';
export * from './northeasternWisconsin';
export * from './westernWisconsin';
