
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
   - Build command: `npm run build`
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

### 3. GitHub Pages

1. Create a gh-pages branch:
   ```bash
   git checkout --orphan gh-pages
   ```

2. Remove everything except the dist folder:
   ```bash
   git rm -rf .
   cp -r dist/* .
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Environment Variables

If your application uses environment variables, make sure to set them up in your deployment platform:

- In Netlify: Site settings > Build & deploy > Environment
- In Vercel: Project settings > Environment Variables
- For GitHub Pages: You'll need to include them during the build process

## Custom Domain Setup

For detailed instructions on setting up a custom domain with your deployment, see the [Custom Domain Setup Guide](/custom-domain-setup) in the application.

## Troubleshooting

If you encounter routing issues on Netlify, the `netlify.toml` file includes the necessary redirects to handle client-side routing.

For other deployment issues, check the build logs in your deployment platform for specific error messages.
