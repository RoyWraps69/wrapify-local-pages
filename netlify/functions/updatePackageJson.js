
// Netlify function to update package.json during build
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    console.log('Running updatePackageJson function...');
    
    // Path to package.json (relative to the build directory)
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    
    // Read the existing package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add or update vite dependency
    if (!packageJson.devDependencies) {
      packageJson.devDependencies = {};
    }
    
    // Update or add Vite and related dependencies
    packageJson.devDependencies.vite = "^6.2.1";
    packageJson.devDependencies["@vitejs/plugin-react-swc"] = "^3.5.0";
    packageJson.devDependencies["lovable-tagger"] = "^0.1.0";
    
    // Make sure we have all necessary runtime dependencies
    if (!packageJson.dependencies["@tanstack/react-query"]) {
      console.log('Adding missing @tanstack/react-query dependency');
      packageJson.dependencies["@tanstack/react-query"] = "^5.56.2";
    }
    
    // Make sure TypeScript is available
    if (!packageJson.devDependencies.typescript) {
      console.log('Adding TypeScript dependency');
      packageJson.devDependencies.typescript = "^5.2.2";
    }
    
    console.log('Updated package.json with necessary dependencies');
    
    // Write the updated package.json back to disk
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Successfully updated package.json',
        viteVersion: '6.2.1',
        updatedDependencies: true
      }),
    };
  } catch (error) {
    console.error('Error updating package.json:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error updating package.json', error: error.toString() }),
    };
  }
};
