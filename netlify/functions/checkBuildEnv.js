
import fs from 'fs';
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
    
    console.log('Environment details:');
    console.log(`- Vite installed: ${viteExists}`);
    console.log(`- Vite config exists: ${viteConfigExists}`);
    console.log(`- Current working directory: ${rootDir}`);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        nodeVersion,
        viteExists,
        viteConfigExists,
        cwd: rootDir,
        env: process.env.NODE_ENV || 'undefined'
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
