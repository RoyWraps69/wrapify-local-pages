
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

### 1. Netlify

#### Using the Netlify CLI:

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
   netlify deploy
   ```

4. Follow the prompts. When asked for the publish directory, enter `dist`.

#### Using the Netlify Web Interface:

1. Go to [Netlify](https://app.netlify.com/)
2. Drag and drop the `dist` folder to the designated area, or connect your Git repository.

### 2. Vercel

#### Using the Vercel CLI:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy the site:
   ```bash
   vercel
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

## Troubleshooting

If you encounter routing issues, check the `netlify.toml` file which includes redirects to handle client-side routing.
