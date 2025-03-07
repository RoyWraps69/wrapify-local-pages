
import { TownData } from './townTypes';
import { illinoisTowns } from './towns/illinois';
import { michiganTowns } from './towns/michigan';
import { indianaTowns } from './towns/indiana';
import { wisconsinTowns } from './towns/wisconsin';

// Combine all towns data for easy access
export const getAllTowns = (): TownData[] => {
  const allTowns = [
    ...illinoisTowns,
    ...michiganTowns,
    ...indianaTowns,
    ...wisconsinTowns
  ];
  
  console.log(`getAllTowns: Found ${allTowns.length} towns total`);
  
  // Return sorted list
  return allTowns.sort((a, b) => a.name.localeCompare(b.name));
};

// Get town data by slug
export const getTownData = (townSlug: string): TownData | null => {
  if (!townSlug) {
    console.error("getTownData called with empty townSlug");
    return null;
  }
  
  const allTowns = getAllTowns();
  console.log(`getTownData: Looking for town with slug "${townSlug}" among ${allTowns.length} towns`);
  
  // Normalize the slug for comparison
  const normalizedSlug = townSlug.toLowerCase().trim();
  
  // First try exact match
  let town = allTowns.find(t => t.id === normalizedSlug);
  
  // Log available town IDs if town not found
  if (!town) {
    console.error(`Town not found with slug "${townSlug}". Available town IDs:`, 
      allTowns.map(t => t.id).slice(0, 20)); // Show first 20 for debugging
    
    // Try case-insensitive match as fallback
    town = allTowns.find(t => t.id.toLowerCase() === normalizedSlug);
    
    if (town) {
      console.log(`Found town with case-insensitive matching: ${town.name} (${town.id})`);
    }
  } else {
    console.log(`Found town: ${town.name} (${town.id})`);
  }
  
  return town || null;
};

// Get town data by name
export const getTownByName = (townName: string): TownData | null => {
  if (!townName) return null;
  
  const towns = getAllTowns();
  
  // First try exact match
  let town = towns.find(t => t.name === townName);
  
  // If not found, try case-insensitive match
  if (!town) {
    const normalizedName = townName.toLowerCase().trim();
    town = towns.find(t => t.name.toLowerCase() === normalizedName);
  }
  
  return town || null;
};

// Get towns by state
export const getTownsByState = (state: string): TownData[] => {
  if (!state) return [];
  
  const allTowns = getAllTowns();
  const normalizedState = state.toUpperCase().trim();
  return allTowns.filter(town => town.state.toUpperCase() === normalizedState);
};

// Get nearby towns (within a certain distance)
export const getNearbyTowns = (townId: string, maxDistance: number = 50): TownData[] => {
  const town = getTownData(townId);
  if (!town) return [];
  
  const allTowns = getAllTowns();
  return allTowns
    .filter(t => t.id !== townId) // Exclude the current town
    .sort((a, b) => {
      // Calculate distance from current town
      const distanceA = Math.abs(a.distance - town.distance);
      const distanceB = Math.abs(b.distance - town.distance);
      
      // Sort by distance
      return distanceA - distanceB;
    })
    .filter(t => Math.abs(t.distance - town.distance) <= maxDistance)
    .slice(0, 12); // Limit to 12 nearby towns
};
