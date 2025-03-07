
/**
 * Utility functions for handling town slugs
 */

/**
 * Converts a town name to a URL-friendly slug
 */
export const createTownSlug = (townName: string, state?: string): string => {
  return townName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

/**
 * Normalizes a slug for consistent matching
 */
export const normalizeSlug = (slug: string): string => {
  return slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};
