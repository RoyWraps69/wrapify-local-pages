
// Define the structure for town data
export interface TownData {
  id: string;
  name: string;
  state: string;
  description: string;
  population: number;
  businessCount: number;
  distance: number;
  mapUrl: string;
  keywords: string[];
  governmentUrl: string;
  businessStats: string;
  latitude: number;
  longitude: number;
}

// Export the Town interface that's being imported elsewhere
export type Town = TownData;
