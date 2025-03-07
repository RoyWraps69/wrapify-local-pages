
import { ServiceInfo } from './services/types';
import { vehicleWrapsData } from './services/vehicleWraps';
import { commercialFleetWrapsData } from './services/commercialFleetWraps';
import { ceramicCoatingsData } from './services/ceramicCoatings';
import { paintProtectionFilmData } from './services/paintProtectionFilm';
import { colorChangeWrapsData } from './services/colorChangeWraps';
import { fleetGraphicsData } from './services/fleetGraphics';
import { vehicleGraphicsData } from './services/vehicleGraphics';
import { partialWrapsData } from './services/partialWraps';
import { notFoundServiceData } from './services/notFoundService';

const serviceData: Record<string, ServiceInfo> = {
  'vehicle-wraps': vehicleWrapsData,
  'commercial-fleet-wraps': commercialFleetWrapsData,
  'ceramic-coatings': ceramicCoatingsData,
  'paint-protection-film': paintProtectionFilmData,
  'color-change-wraps': colorChangeWrapsData,
  'fleet-graphics': fleetGraphicsData,
  'vehicle-graphics': vehicleGraphicsData,
  'partial-wraps': partialWrapsData
};

export const getServiceData = (serviceType: string | undefined): ServiceInfo => {
  // Default to "Not Found" service if serviceType doesn't match any keys
  if (!serviceType || !serviceData[serviceType]) {
    return notFoundServiceData;
  }
  
  return serviceData[serviceType];
};

export type { ServiceInfo, ServiceBenefit } from './services/types';
export default serviceData;
