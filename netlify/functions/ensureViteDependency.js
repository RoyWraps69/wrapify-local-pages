
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

exports.handler = async function(event, context) {
  try {
    console.log('Checking Vite dependency...');
    
    // Get required Vite version
    const requiredViteVersion = process.env.VITE_VERSION || '5.0.0';
    
    // Read current package.json to check Vite
    const packageJsonPath = path.resolve('./package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Check if Vite is installed at the correct version
    let needsInstall = true;
    
    try {
      const vitePackagePath = path.resolve('./node_modules/vite/package.json');
      if (fs.existsSync(vitePackagePath)) {
        const vitePackage = JSON.parse(fs.readFileSync(vitePackagePath, 'utf8'));
        console.log(`Current Vite version: ${vitePackage.version}, Required: ${requiredViteVersion}`);
        
        // If it's the correct version, no need to reinstall
        if (vitePackage.version === requiredViteVersion) {
          needsInstall = false;
        }
      }
    } catch (err) {
      console.log('Error checking Vite version:', err);
    }
    
    // Install correct Vite version if needed
    if (needsInstall) {
      console.log(`Installing Vite version ${requiredViteVersion}...`);
      try {
        execSync(`npm install vite@${requiredViteVersion} @vitejs/plugin-react-swc@latest --no-save`, {
          stdio: 'inherit'
        });
        console.log('Vite installation successful');
      } catch (installError) {
        console.error('Failed to install Vite:', installError);
        return {
          statusCode: 500,
          body: JSON.stringify({ error: 'Failed to install Vite', details: installError.message })
        };
      }
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Vite dependency check complete',
        viteVersion: requiredViteVersion,
        installedFresh: needsInstall
      })
    };
  } catch (error) {
    console.error('Error in ensureViteDependency function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error', details: error.message })
    };
  }
};
