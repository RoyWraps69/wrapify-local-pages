
// Function to check cache status and Vite version compatibility on Netlify
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Checking cache status and Vite dependency compatibility...');
    
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
    
    // Check Vite compatibility
    let viteCompatibility = { compatible: false, installed: false, version: null };
    try {
      const packageJsonPath = path.resolve(rootDir, 'node_modules/vite/package.json');
      if (fs.existsSync(packageJsonPath)) {
        const vitePackage = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        viteCompatibility.installed = true;
        viteCompatibility.version = vitePackage.version;
        
        // Check if version is 5.x or 6.x
        viteCompatibility.compatible = 
          vitePackage.version && 
          (vitePackage.version.startsWith('5.') || vitePackage.version.startsWith('6.'));
        
        console.log(`Vite version: ${vitePackage.version}, compatible: ${viteCompatibility.compatible}`);
      } else {
        console.log('Vite package.json not found');
      }
    } catch (e) {
      console.error('Error checking Vite compatibility:', e);
    }
    
    // Check for lovable-tagger and its peerDependencies
    let taggerInfo = { installed: false, peerDependencies: null };
    try {
      const taggerPath = path.resolve(rootDir, 'node_modules/lovable-tagger/package.json');
      if (fs.existsSync(taggerPath)) {
        const taggerPackage = JSON.parse(fs.readFileSync(taggerPath, 'utf8'));
        taggerInfo.installed = true;
        taggerInfo.peerDependencies = taggerPackage.peerDependencies || {};
        console.log('Lovable-tagger peer dependencies:', JSON.stringify(taggerInfo.peerDependencies, null, 2));
      } else {
        console.log('Lovable-tagger package.json not found');
      }
    } catch (e) {
      console.error('Error checking lovable-tagger:', e);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        cacheStatus,
        viteCompatibility,
        taggerInfo,
        env: {
          NODE_VERSION: process.env.NODE_VERSION,
          NPM_VERSION: process.env.NPM_VERSION,
          NETLIFY: process.env.NETLIFY,
          CONTEXT: process.env.CONTEXT,
          CACHE_DEPS: process.env.CACHE_DEPS,
          VITE_VERSION: process.env.VITE_VERSION
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
