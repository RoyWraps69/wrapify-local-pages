
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
        
        // Try to import componentTagger dynamically with specific Vite version requirement
        const tagger = require("lovable-tagger");
        // Check if Vite version is compatible before loading
        const currentViteVersion = require('vite/package.json').version;
        const isCompatible = currentViteVersion && 
          (currentViteVersion.startsWith('5.') || currentViteVersion.startsWith('6.'));
        
        return isCompatible ? tagger.componentTagger() : null;
      } catch (e: unknown) {
        // If it fails, return null
        console.warn("Could not load lovable-tagger, continuing without it:", (e as Error).message);
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
    sourcemap: false, // Changed this to false for production builds
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
        'node:url'
      ],
    },
    cssCodeSplit: true,
    emptyOutDir: true,
    target: 'es2020',
    // Improve caching by enabling more aggressive optimizations
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000,
  },
  base: '/',
  esbuild: {
    jsx: 'automatic',
    logOverride: {
      // Suppress specific warnings that might cause build failures
      'this-is-undefined-in-esm': 'silent'
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@vitejs/plugin-react-swc'],
    exclude: ['lovable-tagger', '@swc/wasm', '@swc/core-linux-x64-musl', '@swc/core-linux-x64-gnu'],
    esbuildOptions: {
      target: 'es2020',
    },
    // Force dependency pre-bundling to improve caching
    force: process.env.NETLIFY === 'true',
  },
  // Configure loader for .node files
  experimental: {
    renderBuiltUrl(filename) {
      if (filename.endsWith('.node')) {
        return { relative: true };
      }
      return filename;
    }
  },
  // Add Node loader for native addons
  assetsInclude: ['**/*.node'],
  // Improve caching in CI/CD environments
  cacheDir: process.env.NETLIFY === 'true' ? '.netlify/cache/.vite' : 'node_modules/.vite',
  // Improve error reporting
  logLevel: process.env.NETLIFY === 'true' ? 'info' : 'warn',
}));
