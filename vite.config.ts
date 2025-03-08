
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Get repository name for GitHub Pages base path
  const repo = 'wrapify-local-pages';
  
  return {
    // For GitHub Pages, we need to set the base path to /<repo-name>/
    base: mode === 'production' ? `/${repo}/` : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [
      react({
        jsxImportSource: 'react',
        plugins: []
      }),
      mode === 'development' && (() => {
        try {
          // Only attempt to load the tagger in development mode
          if (process.env.NODE_ENV === 'production') {
            return null;
          }
          
          // Conditional import for lovable-tagger
          const isVite5 = require('vite/package.json').version.startsWith('5.');
          if (isVite5) {
            const tagger = require("lovable-tagger");
            return tagger.componentTagger();
          }
          return null;
        } catch (e) {
          // If it fails, return null
          console.warn("Could not load lovable-tagger, continuing without it:", (e instanceof Error) ? e.message : String(e));
          return null;
        }
      })(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      // Add native .node files to the list of extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node']
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: true,
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-ui': ['@/components/ui/index.ts'],
            'vendor-hooks': ['react-hook-form', '@tanstack/react-query'],
            'vendor-animation': ['framer-motion'],
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
        external: [
          'lovable-tagger', 
          '@swc/wasm',
          '@swc/core-linux-x64-musl',
          '@swc/core-linux-x64-gnu',
          'node:path', 
          'node:fs', 
          'node:url',
          'vite'
        ],
      },
      cssCodeSplit: true,
      emptyOutDir: true,
      target: 'es2020',
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
    },
    esbuild: {
      jsx: 'automatic',
      logOverride: {
        'this-is-undefined-in-esm': 'silent'
      }
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['lovable-tagger', '@swc/wasm', '@swc/core-linux-x64-musl', '@swc/core-linux-x64-gnu', 'vite'],
      esbuildOptions: {
        target: 'es2020',
      },
      force: false,
    },
    experimental: {
      renderBuiltUrl(filename, { hostId, hostType, type }) {
        // Add debugging for assets
        console.log(`Rendering URL for: ${filename}, hostType: ${hostType}, type: ${type}`);
        
        if (filename.endsWith('.node')) {
          return { relative: true };
        }
        
        // For GitHub Pages deployment
        if (mode === 'production') {
          return { runtime: `window.__assetsBaseUrl + ${JSON.stringify(filename)}` };
        }
        
        return filename;
      }
    },
    assetsInclude: ['**/*.node'],
    cacheDir: 'node_modules/.vite',
    logLevel: 'warn',
  }
});
