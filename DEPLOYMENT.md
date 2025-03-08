# Deployment Guide

This document outlines how to deploy the Wrapping The World application to various hosting platforms.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher) or yarn
- Git

## Build Process

To build the application for production:

```bash
# Install dependencies and build
npm install vite@6.2.1 @vitejs/plugin-react-swc@latest --no-save
npm ci --legacy-peer-deps
npm run build
```

This will create a `dist` directory with all the necessary files for deployment.

## Deployment Options

### 1. Netlify (Recommended)

#### Using Netlify CLI:

1. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to your Netlify account:
   ```bash
   netlify login
   ```

3. Deploy the site:
   ```bash
   netlify deploy --prod
   ```

4. Follow the prompts. When asked for the publish directory, enter `dist`.

#### Using the Netlify Web Interface:

1. Go to [Netlify](https://app.netlify.com/)
2. Click "New site from Git"
3. Select your Git provider and repository
4. Configure build settings:
   - Build command: `npm install vite@6.2.1 @vitejs/plugin-react-swc@latest --no-save && npm ci --legacy-peer-deps && npx vite build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Netlify Configuration:

The `netlify.toml` file in the root of the project contains the necessary configuration for Netlify, including:
- Build command and publish directory
- SPA routing redirects
- Cache control headers
- Environment variables
- Optimized build settings

#### Common Netlify Deployment Issues:

##### Vite Dependency Issue

If you encounter an error like `Cannot find package 'vite'`:

1. The build command in netlify.toml has been updated to install Vite before any other operations:
   ```
   npm install vite@6.2.1 @vitejs/plugin-react-swc@latest --no-save && npm ci --legacy-peer-deps && npx vite build
   ```

2. This ensures Vite is available during the build process even if it's not in your package.json.

3. The following environment variables have been set in netlify.toml:
   - `VITE_VERSION=6.2.1` 
   - `NODE_VERSION=18`
   - `NPM_VERSION=9`

##### Peer Dependency Issues

If you encounter peer dependency warnings or errors:

1. The peer dependency issue between vite@"^5.0.0" and lovable-tagger@1.1.7 has been addressed in several ways:
   - Using `--legacy-peer-deps` flag in npm commands
   - Modifying the vite.config.ts to check version compatibility before loading plugins
   - Setting external dependencies in the rollup configuration

2. The current configuration uses Vite 6.2.1, which should be compatible with most plugins.

3. If you still encounter peer dependency issues:
   - Check what version of Vite is being used: `npm list vite`
   - Ensure that plugins with Vite peer dependencies are compatible
   - Use `npm install --legacy-peer-deps` to ignore peer dependency conflicts

##### Go Installation Error

If you encounter an error related to Go installation:

The current configuration already includes these environment variables to prevent this issue:
- `SKIP_GO_INSTALL=true`
- `SKIP_PYTHON_INSTALL=true`
- `SKIP_RUBY_INSTALL=true`
- `SKIP_RUST_INSTALL=true`

These variables prevent unnecessary language installations during the build process.

##### Plugin Installation Errors

If you encounter errors related to Netlify plugins:

You have two options:
1. Install the plugin through the Netlify UI dashboard (recommended)
2. Remove the plugin reference from netlify.toml if you don't need it

The current configuration has been updated to remove unnecessary plugin references.

### 2. Vercel

#### Using the Vercel CLI:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the site:
   ```bash
   vercel --prod
   ```

#### Using the Vercel Web Interface:

1. Go to [Vercel](https://vercel.com/)
2. Import your Git repository and follow the setup instructions.
3. Configure build settings:
   - Build command: `npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D && npm ci --legacy-peer-deps && npx vite build`
   - Output directory: `dist`

### 3. GitHub Pages

To deploy to GitHub Pages:

1. Install the gh-pages package:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add these scripts to your package.json:
   ```json
   "scripts": {
     "predeploy": "npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D && npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy the site:
   ```bash
   npm run deploy
   ```

### 4. AWS Amplify

To deploy with AWS Amplify:

1. Install the AWS Amplify CLI:
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. Configure Amplify:
   ```bash
   amplify configure
   ```

3. Initialize Amplify in your project:
   ```bash
   amplify init
   ```

4. Add hosting:
   ```bash
   amplify add hosting
   ```

5. Deploy:
   ```bash
   amplify publish
   ```

6. For the build settings in the Amplify Console:
   - Build command: `npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D && npm ci --legacy-peer-deps && npx vite build`
   - Output directory: `dist`

### 5. Firebase Hosting

To deploy with Firebase:

1. Install Firebase tools:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init
   ```
   - Select "Hosting"
   - Set "dist" as your public directory
   - Configure as a single-page app

4. Modify the build command in firebase.json:
   ```json
   "hosting": {
     "public": "dist",
     "predeploy": "npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D && npm run build",
     "ignore": [
       "firebase.json",
       "**/.*",
       "**/node_modules/**"
     ],
     "rewrites": [
       {
         "source": "**",
         "destination": "/index.html"
       }
     ]
   }
   ```

5. Deploy:
   ```bash
   firebase deploy
   ```

## Environment Variables

If your application uses environment variables, make sure to set them up in your deployment platform:

- In Netlify: Site settings > Build & deploy > Environment
- In Vercel: Project settings > Environment Variables
- For GitHub Pages: You'll need to include them during the build process
- In AWS Amplify: Environment variables can be configured in the Amplify console
- In Firebase: Use Firebase functions or Firebase Hosting environment configuration

## Troubleshooting Common Deployment Issues

### Vite Not Found Error

If you encounter a "Cannot find package 'vite'" error:

1. The build command has been updated in netlify.toml to explicitly install Vite before running anything else:
   ```
   npm install vite@6.2.1 @vitejs/plugin-react-swc@latest --no-save && npm ci --legacy-peer-deps && npx vite build
   ```

2. This ensures that Vite is available during the build process, regardless of whether it's in package.json.

3. You can also try clearing the Netlify cache:
   - In the Netlify dashboard, go to your site's "Deploys" tab
   - Click on "Trigger deploy" dropdown
   - Select "Clear cache and deploy site"

### Go, Python or Ruby Installation Errors

If you see errors related to Go, Python, or Ruby installation:

1. Add the following environment variables to your deployment platform:
   ```
   SKIP_GO_INSTALL=true
   SKIP_PYTHON_INSTALL=true
   SKIP_RUBY_INSTALL=true
   SKIP_RUST_INSTALL=true
   ```

2. These variables will prevent unnecessary language installations that might be causing build failures.

### Netlify Plugin Errors

If you encounter plugin-related errors on Netlify:

1. Make sure any plugin referenced in netlify.toml is either:
   - Installed via the Netlify UI in the plugins section
   - Added as a dev dependency in package.json

2. If you can't install the plugin, remove the reference from netlify.toml

### Vite Import Error

If you encounter an error like `Cannot find package 'vite' imported from...`:

1. Ensure you're explicitly installing Vite before the build:
   ```bash
   npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D
   ```

2. Check that your `vite.config.ts` properly marks 'vite' as external:
   ```js
   // In rollupOptions
   external: ['vite', 'node:path', 'node:fs', 'node:url']
   ```

3. Make sure your Netlify (or other platform) build command includes the Vite installation step.

### Peer Dependency Conflicts

If you encounter peer dependency conflicts:

1. Use the `--legacy-peer-deps` flag:
   ```bash
   npm install --legacy-peer-deps
   ```

2. This flag tells npm to ignore peer dependency conflicts, which is useful when plugins require different versions of the same package.

3. In vite.config.ts, make sure the lovable-tagger plugin is loaded conditionally and only when compatible:
   ```js
   mode === 'development' && (() => {
     try {
       const tagger = require("lovable-tagger");
       const currentViteVersion = require('vite/package.json').version;
       const isCompatible = currentViteVersion && 
         (currentViteVersion.startsWith('5.') || currentViteVersion.startsWith('6.'));
       
       return isCompatible ? tagger.componentTagger() : null;
     } catch (e) {
       console.warn("Could not load lovable-tagger, continuing without it:", e.message);
       return null;
     }
   })(),
   ```

4. If specific plugins are causing issues, you can try temporarily disabling them during the build process.

### Routing Issues

If you encounter routing issues:
- For Netlify: The `netlify.toml` file includes the necessary redirects
- For Vercel: Create a `vercel.json` file with the appropriate redirects
- For GitHub Pages: Use a 404.html trick or hash-based routing
- For AWS Amplify: Configure redirects in the Amplify console
- For Firebase: Add redirects to the `firebase.json` file

For other deployment issues, check the build logs in your deployment platform for specific error messages.

## Cache Management

### Netlify Cache Configuration

Netlify automatically caches dependencies between builds to speed up deployment. To ensure optimal caching:

1. The project now uses Netlify's official cache plugins:
   - `@netlify/plugin-gatsby-cache` (recommended)
   - Or alternatively, `netlify-plugin-cache`

2. To install the recommended cache plugin:
   - Go to the Netlify UI dashboard
   - Navigate to your site settings
   - Go to the Plugins section
   - Click "Add plugin"
   - Search for "@netlify/plugin-gatsby-cache" and install it

3. The plugin configuration in netlify.toml specifies these cache paths:
   - node_modules/.cache
   - node_modules/.vite
   - .netlify/cache/.vite
   - dist

4. Troubleshooting cache issues:
   - Verify the plugin is installed in your Netlify UI
   - Check build logs for cache hit/miss messages
   - If you suspect cache corruption, clear it (see below)

### Manual Cache Purging

If you need to purge the cache:

1. In the Netlify dashboard, go to your site's "Deploys" tab
2. Click on "Trigger deploy" dropdown
3. Select "Clear cache and deploy site"

4. Via Netlify CLI:
   ```bash
   netlify deploy --clear-cache
   ```

5. For persistent cache issues, try these troubleshooting steps:
   - Check the build logs for any cache-related errors
   - Verify that the cache paths specified in netlify.toml are correct
   - Temporarily disable caching by removing the plugin to see if it resolves the issue
   - Ensure you're not exceeding Netlify's cache size limits

### Cache Headers

The application is configured with optimal cache headers:
- Static assets: 1 year cache (immutable)
- HTML/API responses: Appropriate cache control based on content type
- Service worker: No-cache for service worker files to ensure updates

### Preventing "Failed to fetch cache" Errors

If you're experiencing "Failed to fetch cache" errors:

1. Ensure your Netlify account has sufficient permissions
2. Check that the cache plugin is correctly installed
3. Verify that the cache paths specified in netlify.toml are valid
4. Try deploying with a cleared cache to reset
5. Check for any network or firewall issues that might be blocking cache access
6. Review Netlify logs for specific error details
7. Temporarily disable the cache plugin to isolate the issue

This ensures your deployments are fast and your application performs optimally for users.
