
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Build environment check running...');
    
    // Check Node.js version
    const nodeVersion = process.version;
    console.log(`Node.js version: ${nodeVersion}`);
    
    // Check for existence of key files
    const rootDir = process.cwd();
    const vitePath = path.resolve(rootDir, 'node_modules/vite');
    const viteExists = fs.existsSync(vitePath);
    
    const viteConfigPath = path.resolve(rootDir, 'vite.config.ts');
    const viteConfigExists = fs.existsSync(viteConfigPath);
    
    // List contents of node_modules to check for vite
    let nodeModulesContents = [];
    const nodeModulesPath = path.resolve(rootDir, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
      try {
        nodeModulesContents = fs.readdirSync(nodeModulesPath);
      } catch (e) {
        console.error('Error reading node_modules:', e);
      }
    }
    
    // Check if package.json has vite
    const packageJsonPath = path.resolve(rootDir, 'package.json');
    let viteInPackageJson = false;
    let viteVersion = null;
    
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        viteInPackageJson = 
          (packageJson.dependencies && packageJson.dependencies.vite) || 
          (packageJson.devDependencies && packageJson.devDependencies.vite);
        
        if (packageJson.dependencies && packageJson.dependencies.vite) {
          viteVersion = packageJson.dependencies.vite;
        } else if (packageJson.devDependencies && packageJson.devDependencies.vite) {
          viteVersion = packageJson.devDependencies.vite;
        }
      } catch (e) {
        console.error('Error parsing package.json:', e);
      }
    }
    
    console.log('Environment details:');
    console.log(`- Vite installed: ${viteExists}`);
    console.log(`- Vite config exists: ${viteConfigExists}`);
    console.log(`- Vite in package.json: ${viteInPackageJson}`);
    console.log(`- Vite version: ${viteVersion}`);
    console.log(`- Current working directory: ${rootDir}`);
    console.log(`- NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`- VITE_VERSION: ${process.env.VITE_VERSION}`);
    console.log(`- Node modules found: ${nodeModulesContents.includes('vite') ? 'Yes' : 'No'}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        nodeVersion,
        viteExists,
        viteConfigExists,
        viteInPackageJson,
        viteVersion,
        cwd: rootDir,
        env: process.env.NODE_ENV || 'undefined',
        viteEnvVersion: process.env.VITE_VERSION || 'undefined',
        nodeModulesContainsVite: nodeModulesContents.includes('vite')
      }),
    };
  } catch (error) {
    console.error('Error checking build environment:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
