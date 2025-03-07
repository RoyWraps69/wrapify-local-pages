
// Export all Illinois regions
import { chicagoAreaTowns } from './chicagoArea';
import { centralIllinoisTowns } from './centralIllinois';
import { northernIllinoisTowns } from './northernIllinois';

// Combine all Illinois towns
export const illinoisTowns = [
  ...chicagoAreaTowns,
  ...centralIllinoisTowns,
  ...northernIllinoisTowns
];

// Export individual towns for direct imports
export * from './chicagoArea';
export * from './centralIllinois';
export * from './northernIllinois';
