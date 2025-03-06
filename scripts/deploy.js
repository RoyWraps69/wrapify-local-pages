
// Simple deploy helper script
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Ensure the build is fresh
console.log('Building the application...');
execSync('npm run build', { stdio: 'inherit' });

// Check if build was successful
const distPath = path.join(__dirname, '../dist');
if (!fs.existsSync(distPath)) {
  console.error('Build failed: dist directory not found');
  process.exit(1);
}

console.log('Build completed successfully!');
console.log('\nTo deploy this application:');
console.log('1. Using Netlify: netlify deploy');
console.log('2. Using Vercel: vercel');
console.log('3. Using GitHub Pages: Copy the dist folder to your gh-pages branch');
console.log('\nOr use the web interfaces of these platforms to deploy your code repository.');
