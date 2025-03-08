
# Deployment Guide

This document outlines how to deploy the Wrapping The World application to various hosting platforms.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## Build Process

To build the application for production:

```bash
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
   - Build command: `npm install vite@6.2.1 @vitejs/plugin-react-swc@latest -D && npm ci --legacy-peer-deps && npx vite build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Netlify Configuration:

The `netlify.toml` file in the root of the project contains the necessary configuration for Netlify, including:
- Build command and publish directory
- SPA routing redirects
- Cache control headers
- Environment variables

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

4. Deploy:
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

## Troubleshooting

If you encounter routing issues:
- For Netlify: The `netlify.toml` file includes the necessary redirects
- For Vercel: Create a `vercel.json` file with the appropriate redirects
- For GitHub Pages: Use a 404.html trick or hash-based routing
- For AWS Amplify: Configure redirects in the Amplify console
- For Firebase: Add redirects to the `firebase.json` file

For other deployment issues, check the build logs in your deployment platform for specific error messages.
