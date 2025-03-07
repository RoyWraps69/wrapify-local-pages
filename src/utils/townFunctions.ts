
import { TownData } from './townTypes';
import { illinoisTowns } from './towns/illinois';
import { michiganTowns } from './towns/michigan';
import { indianaTowns } from './towns/indiana';
import { wisconsinTowns } from './towns/wisconsin';

// Normalize a string to create a consistent slug
export const normalizeSlug = (str: string): string => {
  return str.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
};

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
  const normalizedSlug = normalizeSlug(townSlug);
  
  // Try multiple matching methods in order of specificity
  let town = null;
  
  // 1. Try exact match on id
  town = allTowns.find(t => t.id === normalizedSlug);
  if (town) {
    console.log(`Found town by exact id match: ${town.name} (${town.id})`);
    return town;
  }
  
  // 2. Try case-insensitive match on id with normalization
  town = allTowns.find(t => normalizeSlug(t.id) === normalizedSlug);
  if (town) {
    console.log(`Found town by normalized id: ${town.name} (${town.id})`);
    return town;
  }
  
  // 3. Try matching by name (converted to slug format)
  town = allTowns.find(t => normalizeSlug(t.name) === normalizedSlug);
  if (town) {
    console.log(`Found town by name match: ${town.name} (${town.id})`);
    return town;
  }
  
  // 4. Try partial matching (for potential typos or variations)
  town = allTowns.find(t => normalizeSlug(t.id).includes(normalizedSlug) || normalizedSlug.includes(normalizeSlug(t.id)));
  if (town) {
    console.log(`Found town by partial match: ${town.name} (${town.id})`);
    return town;
  }
  
  // If we get here, all matching methods have failed
  console.error(`Town not found with slug "${townSlug}". Available town IDs (sample):`, 
    allTowns.map(t => t.id).slice(0, 5), "...");
  
  return null;
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
