
// Helper function to ensure Vite is properly installed before builds
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Ensuring Vite dependency is available...');
    
    const rootDir = process.cwd();
    const packageJsonPath = path.resolve(rootDir, 'package.json');
    
    // Read package.json
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Check if Vite is in dependencies or devDependencies
      const hasViteInDeps = packageJson.dependencies && packageJson.dependencies.vite;
      const hasViteInDevDeps = packageJson.devDependencies && packageJson.devDependencies.vite;
      
      if (!hasViteInDeps && !hasViteInDevDeps) {
        console.log('Vite not found in package.json, installing...');
        try {
          // Install Vite as a dev dependency
          execSync('npm install vite@6.2.1 --save-dev', { stdio: 'inherit' });
          console.log('Vite installed successfully');
        } catch (err) {
          console.error('Error installing Vite:', err);
        }
      } else {
        console.log('Vite already in package.json');
      }
    } else {
      console.error('package.json not found');
    }
    
    // Check if Vite is actually installed in node_modules
    const vitePath = path.resolve(rootDir, 'node_modules/vite');
    const viteExists = fs.existsSync(vitePath);
    
    if (!viteExists) {
      console.log('Vite not found in node_modules, reinstalling...');
      try {
        execSync('npm install', { stdio: 'inherit' });
        console.log('Dependencies reinstalled');
      } catch (err) {
        console.error('Error reinstalling dependencies:', err);
      }
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Vite dependency check completed',
        viteInPackageJson: hasViteInDeps || hasViteInDevDeps,
        viteInNodeModules: viteExists,
        timestamp: new Date().toISOString()
      }),
    };
  } catch (error) {
    console.error('Error in ensureViteDependency:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() }),
    };
  }
};
