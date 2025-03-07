
import { TownData } from '../../townTypes';
import { detroitAreaTowns } from './detroitArea';
import { westernMichiganTowns } from './westernMichigan';
import { centralMichiganTowns } from './centralMichigan';

// Combine all Michigan towns
export const michiganTowns = [
  ...detroitAreaTowns,
  ...westernMichiganTowns,
  ...centralMichiganTowns
];

// Export individual town regions for direct imports
export * from './detroitArea';
export * from './westernMichigan';
export * from './centralMichigan';
