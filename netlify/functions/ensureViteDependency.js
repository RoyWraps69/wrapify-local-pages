
// Netlify function to ensure Vite is installed properly
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Running ensureViteDependency function...');
    
    // Path to package.json (relative to the build directory)
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    
    // Check if vite is installed
    try {
      require.resolve('vite');
      console.log('Vite is already installed and available');
    } catch (e) {
      console.log('Vite is not installed or not found in node_modules');
      
      // Check if package.json exists
      if (fs.existsSync(packageJsonPath)) {
        console.log('Verifying package.json contains vite dependency');
        
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Check if vite is in dependencies or devDependencies
        const hasViteInDeps = packageJson.dependencies && packageJson.dependencies.vite;
        const hasViteInDevDeps = packageJson.devDependencies && packageJson.devDependencies.vite;
        
        if (!hasViteInDeps && !hasViteInDevDeps) {
          console.log('Adding vite@6.2.1 to devDependencies');
          if (!packageJson.devDependencies) packageJson.devDependencies = {};
          packageJson.devDependencies.vite = "^6.2.1";
          
          // Write updated package.json
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        } else {
          console.log('Vite is already in package.json');
        }
      }
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Successfully checked Vite dependency',
        success: true
      }),
    };
  } catch (error) {
    console.error('Error checking Vite dependency:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error checking Vite dependency', error: error.toString() }),
    };
  }
};
