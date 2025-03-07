
// Export all Illinois regions
import { chicagoAreaTowns } from './chicagoArea';
import { chicagoSuburbsTowns } from './chicagoSuburbs';
import { centralIllinoisTowns } from './centralIllinois';
import { northernIllinoisTowns } from './northernIllinois';

// Combine all Illinois towns
export const illinoisTowns = [
  ...chicagoAreaTowns,
  ...chicagoSuburbsTowns,
  ...centralIllinoisTowns,
  ...northernIllinoisTowns
];

// Export individual towns for direct imports
export * from './chicagoArea';
export * from './chicagoSuburbs';
export * from './centralIllinois';
export * from './northernIllinois';
