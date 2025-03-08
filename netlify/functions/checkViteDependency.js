
// Netlify function to check for Vite dependency
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  console.log('Checking for dependencies...');
  
  try {
    // Path to package.json
    const packageJsonPath = path.resolve(process.cwd(), 'package.json');
    
    // Check if package.json exists
    if (!fs.existsSync(packageJsonPath)) {
      console.error('package.json not found');
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'package.json not found' }),
      };
    }
    
    // Read package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check for vite in devDependencies
    const viteVersion = packageJson.devDependencies?.vite;
    const reactQueryVersion = packageJson.dependencies?.["@tanstack/react-query"];
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Dependency check completed',
        viteVersion: viteVersion || 'not found', 
        reactQueryVersion: reactQueryVersion || 'not found',
        allDependencies: {
          devDependencies: packageJson.devDependencies || {},
          dependencies: packageJson.dependencies || {}
        }
      }),
    };
  } catch (error) {
    console.error('Error checking dependencies:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error checking dependencies', error: error.toString() }),
    };
  }
};
