
// Function to check if Vite is available during build
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Checking Vite dependency...');
    
    const rootDir = process.cwd();
    
    // Check for vite in node_modules
    const vitePath = path.resolve(rootDir, 'node_modules/vite');
    const viteExists = fs.existsSync(vitePath);
    console.log(`Vite in node_modules: ${viteExists ? 'Yes' : 'No'}`);
    
    // Check if package.json has vite
    const packageJsonPath = path.resolve(rootDir, 'package.json');
    let viteInPackageJson = false;
    let viteVersion = null;
    
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const hasViteInDeps = packageJson.dependencies && packageJson.dependencies.vite;
        const hasViteInDevDeps = packageJson.devDependencies && packageJson.devDependencies.vite;
        viteInPackageJson = hasViteInDeps || hasViteInDevDeps;
        
        if (hasViteInDeps) {
          viteVersion = packageJson.dependencies.vite;
        } else if (hasViteInDevDeps) {
          viteVersion = packageJson.devDependencies.vite;
        }
        
        console.log(`Vite in package.json: ${viteInPackageJson ? 'Yes' : 'No'}`);
        console.log(`Vite version: ${viteVersion}`);
      } catch (e) {
        console.error('Error parsing package.json:', e);
      }
    }
    
    // Check environment variables
    console.log(`Environment VITE_VERSION: ${process.env.VITE_VERSION || 'not set'}`);
    console.log(`Environment NODE_VERSION: ${process.env.NODE_VERSION || 'not set'}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        viteExists,
        viteInPackageJson,
        viteVersion,
        nodeVersion: process.version,
        env: process.env.NODE_ENV || 'undefined',
        viteEnvVersion: process.env.VITE_VERSION || 'undefined'
      }),
    };
  } catch (error) {
    console.error('Error checking Vite dependency:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
