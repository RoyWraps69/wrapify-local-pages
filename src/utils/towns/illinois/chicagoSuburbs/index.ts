
import { TownData } from '../../../townTypes';
import { regularSuburbsList } from './regularSuburbs';
import { affluentSuburbsList } from './affluentSuburbs';
import { northSuburbsList } from './northSuburbs';

// Re-export all individual suburbs
export * from './regularSuburbs';
export * from './affluentSuburbs';
export * from './northSuburbs';

// Combine all Chicago suburbs into a single array
export const chicagoSuburbsTowns: TownData[] = [
  ...regularSuburbsList,
  ...affluentSuburbsList,
  ...northSuburbsList
];
