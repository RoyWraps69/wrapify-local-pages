
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
    
    // Check if vite/package.json exists within node_modules
    const vitePackageJson = path.resolve(vitePath, 'package.json');
    const vitePackageJsonExists = fs.existsSync(vitePackageJson);
    console.log(`Vite package.json exists: ${vitePackageJsonExists ? 'Yes' : 'No'}`);
    
    if (vitePackageJsonExists) {
      try {
        const vitePackage = JSON.parse(fs.readFileSync(vitePackageJson, 'utf8'));
        console.log(`Installed Vite version: ${vitePackage.version}`);
      } catch (e) {
        console.error('Error reading Vite package.json:', e);
      }
    }
    
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
    
    // Create a directory tree to see what's available
    console.log('Directory structure of node_modules:');
    if (fs.existsSync(path.resolve(rootDir, 'node_modules'))) {
      const nodeModulesDirs = fs.readdirSync(path.resolve(rootDir, 'node_modules')).slice(0, 20); // First 20 directories
      console.log('First 20 packages:', nodeModulesDirs.join(', '));
    } else {
      console.log('node_modules directory not found');
    }
    
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
