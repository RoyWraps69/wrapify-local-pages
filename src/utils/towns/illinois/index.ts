
// Export all Illinois regions
import { chicagoAreaTowns } from './chicagoArea';
import { chicagoSuburbsTowns } from './chicagoSuburbs';
import { centralIllinoisTowns } from './centralIllinois';
import { northernIllinoisTowns } from './northernIllinois';
import { southernIllinoisTowns } from './southernIllinois';
import { westernIllinoisTowns } from './westernIllinois';
import { easternIllinoisTowns } from './easternIllinois';

// Combine all Illinois towns
export const illinoisTowns = [
  ...chicagoAreaTowns,
  ...chicagoSuburbsTowns,
  ...centralIllinoisTowns,
  ...northernIllinoisTowns,
  ...southernIllinoisTowns,
  ...westernIllinoisTowns,
  ...easternIllinoisTowns
];

// Export individual towns for direct imports
export * from './chicagoArea';
export * from './chicagoSuburbs';
export * from './centralIllinois';
export * from './northernIllinois';
export * from './southernIllinois';
export * from './westernIllinois';
export * from './easternIllinois';
