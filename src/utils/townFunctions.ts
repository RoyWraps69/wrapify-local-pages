
import { TownData } from './townTypes';
import { illinoisTowns } from './towns/illinois';
import { michiganTowns } from './towns/michigan';
import { indianaTowns } from './towns/indiana';
import { wisconsinTowns } from './towns/wisconsin';

// Combine all towns data for easy access
export const getAllTowns = (): TownData[] => {
  return [
    ...illinoisTowns,
    ...michiganTowns,
    ...indianaTowns,
    ...wisconsinTowns
  ].sort((a, b) => a.name.localeCompare(b.name));
};

// Get town data by slug
export const getTownData = (townSlug: string): TownData | null => {
  const allTowns = getAllTowns();
  const town = allTowns.find(t => t.id === townSlug);
  return town || null;
};

// Get town data by name
export const getTownByName = (townName: string): TownData | null => {
  const towns = getAllTowns();
  const town = towns.find(t => t.name === townName);
  return town || null;
};

// Get towns by state
export const getTownsByState = (state: string): TownData[] => {
  const allTowns = getAllTowns();
  return allTowns.filter(town => town.state === state);
};

// Get nearby towns (within a certain distance)
export const getNearbyTowns = (townId: string, maxDistance: number = 50): TownData[] => {
  const town = getTownData(townId);
  if (!town) return [];
  
  const allTowns = getAllTowns();
  return allTowns
    .filter(t => t.id !== townId && t.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance);
};
