
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
        
        // Check for peer dependencies
        if (vitePackage.peerDependencies) {
          console.log('Vite peer dependencies:', JSON.stringify(vitePackage.peerDependencies, null, 2));
        }
      } catch (e) {
        console.error('Error reading Vite package.json:', e);
      }
    }
    
    // Check for @vitejs/plugin-react-swc
    const swcPluginPath = path.resolve(rootDir, 'node_modules/@vitejs/plugin-react-swc');
    const swcPluginExists = fs.existsSync(swcPluginPath);
    console.log(`@vitejs/plugin-react-swc in node_modules: ${swcPluginExists ? 'Yes' : 'No'}`);
    
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
        console.log(`Vite version in package.json: ${viteVersion}`);
        
        // Check for peer dependency issues
        const allDependencies = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        
        console.log("All dependencies:", JSON.stringify(allDependencies, null, 2));
      } catch (e) {
        console.error('Error parsing package.json:', e);
      }
    }
    
    // Check environment variables
    console.log(`Environment VITE_VERSION: ${process.env.VITE_VERSION || 'not set'}`);
    console.log(`Environment NODE_VERSION: ${process.env.NODE_VERSION || 'not set'}`);
    console.log(`Environment NPM_FLAGS: ${process.env.NPM_FLAGS || 'not set'}`);
    
    // Try to require vite
    try {
      const vitePath = require.resolve('vite');
      console.log(`Successfully resolved vite at: ${vitePath}`);
    } catch (e) {
      console.error(`Error resolving vite: ${e.message}`);
    }
    
    // Try to resolve plugin-react-swc
    try {
      const swcPath = require.resolve('@vitejs/plugin-react-swc');
      console.log(`Successfully resolved @vitejs/plugin-react-swc at: ${swcPath}`);
    } catch (e) {
      console.error(`Error resolving @vitejs/plugin-react-swc: ${e.message}`);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        viteExists,
        viteInPackageJson,
        viteVersion,
        swcPluginExists,
        nodeVersion: process.version,
        env: process.env.NODE_ENV || 'undefined',
        viteEnvVersion: process.env.VITE_VERSION || 'undefined',
        npmFlags: process.env.NPM_FLAGS || 'undefined'
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
