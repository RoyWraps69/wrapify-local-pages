
// Function to check cache status on Netlify
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Checking cache status...');
    
    const rootDir = process.cwd();
    const cacheLocations = [
      path.resolve(rootDir, 'node_modules/.cache'),
      path.resolve(rootDir, 'node_modules/.vite'),
      path.resolve(rootDir, '.netlify/cache'),
      path.resolve(rootDir, '.netlify/cache/.vite')
    ];
    
    const cacheStatus = {};
    
    for (const location of cacheLocations) {
      const exists = fs.existsSync(location);
      cacheStatus[location] = {
        exists,
        size: exists ? await getDirSize(location) : 0
      };
    }
    
    console.log('Cache status:', JSON.stringify(cacheStatus, null, 2));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        cacheStatus,
        env: {
          NODE_VERSION: process.env.NODE_VERSION,
          NPM_VERSION: process.env.NPM_VERSION,
          NETLIFY: process.env.NETLIFY,
          CONTEXT: process.env.CONTEXT,
          CACHE_DEPS: process.env.CACHE_DEPS
        }
      }),
    };
  } catch (error) {
    console.error('Error checking cache status:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};

// Helper to get directory size
async function getDirSize(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    
    if (!stats.isDirectory()) {
      return stats.size;
    }
    
    const files = await fs.readdir(dirPath);
    const sizes = await Promise.all(
      files.map(file => getDirSize(path.join(dirPath, file)))
    );
    
    return sizes.reduce((acc, size) => acc + size, 0);
  } catch (e) {
    return 0;
  }
}
