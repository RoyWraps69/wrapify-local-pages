
exports.handler = async function(event, context) {
  const fs = require('fs');
  const path = require('path');
  const { execSync } = require('child_process');
  
  try {
    console.log('Checking Vite version...');
    
    // Get the required Vite version from environment variable
    const requiredViteVersion = process.env.VITE_VERSION || '5.0.0';
    
    // Check if vite is installed
    let currentVersion;
    try {
      currentVersion = JSON.parse(fs.readFileSync(path.resolve('./node_modules/vite/package.json'), 'utf8')).version;
      console.log(`Current Vite version: ${currentVersion}`);
    } catch (e) {
      console.log('Vite not found or version cannot be determined. Installing...');
      execSync(`npm install vite@${requiredViteVersion} --no-save`);
      console.log(`Installed Vite ${requiredViteVersion}`);
    }
    
    // If version is wrong, reinstall
    if (currentVersion && !currentVersion.startsWith('5.')) {
      console.log(`Vite version mismatch. Installing version ${requiredViteVersion}...`);
      execSync(`npm install vite@${requiredViteVersion} --no-save`);
      console.log(`Installed Vite ${requiredViteVersion}`);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Vite version check complete' })
    };
  } catch (error) {
    console.error('Error checking Vite version:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to check Vite version' })
    };
  }
};
