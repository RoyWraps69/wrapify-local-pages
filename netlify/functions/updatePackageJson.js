
// Netlify function to update package.json during build
const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
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
    packageJson.devDependencies.vite = "^6.2.1";
    
    console.log('Updated package.json with vite 6.2.1');
    
    // Write the updated package.json back to disk
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Successfully updated package.json',
        viteVersion: '6.2.1' 
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
