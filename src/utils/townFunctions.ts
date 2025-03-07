
import { TownData } from './townTypes';
import { illinoisTowns } from './towns/illinois';
import { michiganTowns } from './towns/michigan';
import { indianaTowns } from './towns/indiana';
import { wisconsinTowns } from './towns/wisconsin';
import { normalizeSlug } from './towns/slugUtils';

// Combine all towns data for easy access
export const getAllTowns = (): TownData[] => {
  try {
    const allTowns = [
      ...illinoisTowns,
      ...michiganTowns,
      ...indianaTowns,
      ...wisconsinTowns
    ];
    
    console.log(`getAllTowns: Found ${allTowns.length} towns total`);
    
    // Return sorted list
    return allTowns.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error("Error in getAllTowns:", error);
    // Return empty array as fallback to prevent crashes
    return [];
  }
};

// Get town data by slug
export const getTownData = (townSlug: string): TownData | null => {
  if (!townSlug) {
    console.error("getTownData called with empty townSlug");
    return null;
  }
  
  try {
    const allTowns = getAllTowns();
    console.log(`getTownData: Looking for town with slug "${townSlug}" among ${allTowns.length} towns`);
    
    if (allTowns.length === 0) {
      console.error("No towns data available");
      return null;
    }
    
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
      allTowns.length > 0 ? allTowns.slice(0, 5).map(t => t.id) : "No towns available");
    
    return null;
  } catch (error) {
    console.error(`Error finding town with slug "${townSlug}":`, error);
    return null;
  }
};

// Get town data by name
export const getTownByName = (townName: string): TownData | null => {
  if (!townName) return null;
  
  try {
    const towns = getAllTowns();
    
    // First try exact match
    let town = towns.find(t => t.name === townName);
    
    // If not found, try case-insensitive match
    if (!town) {
      const normalizedName = townName.toLowerCase().trim();
      town = towns.find(t => t.name.toLowerCase() === normalizedName);
    }
    
    return town || null;
  } catch (error) {
    console.error(`Error finding town with name "${townName}":`, error);
    return null;
  }
};

// Get towns by state
export const getTownsByState = (state: string): TownData[] => {
  if (!state) return [];
  
  try {
    const allTowns = getAllTowns();
    const normalizedState = state.toUpperCase().trim();
    return allTowns.filter(town => town.state.toUpperCase() === normalizedState);
  } catch (error) {
    console.error(`Error getting towns for state "${state}":`, error);
    return [];
  }
};

// Get nearby towns (within a certain distance)
export const getNearbyTowns = (townId: string, maxDistance: number = 50): TownData[] => {
  try {
    const town = getTownData(townId);
    if (!town) {
      console.error(`Cannot find nearby towns - town with id "${townId}" not found`);
      return [];
    }
    
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
  } catch (error) {
    console.error(`Error finding nearby towns for "${townId}":`, error);
    return [];
  }
};
