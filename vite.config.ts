
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Safely handle the lovable-tagger import
let componentTagger = null;
if (process.env.NODE_ENV !== 'production') {
  try {
    const lovableTagger = require("lovable-tagger");
    if (lovableTagger && typeof lovableTagger.componentTagger === 'function') {
      componentTagger = lovableTagger.componentTagger;
    }
  } catch (e) {
    console.warn("Lovable tagger not available, continuing without it");
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Only use componentTagger in development mode if available
    mode === 'development' && componentTagger ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    assetsDir: 'assets',
    // Improved asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Configure asset handling
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['src/components/ui/index.ts'],
          'vendor-hooks': ['react-hook-form', '@tanstack/react-query'],
          'vendor-animation': ['framer-motion'],
          // Feature based chunks
          'feature-towns': ['src/components/town/layout/TownPageContent.tsx'],
          'feature-shopping': ['src/components/print-ship/shopping-cart/ShoppingCart.tsx'],
          'feature-print': ['src/components/print-ship/PrintShipSection.tsx'],
        },
        // Ensure that dynamic imports have meaningful chunk names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
    // Add automatic CSS purging in production
    cssCodeSplit: true,
    cssMinify: true,
    emptyOutDir: true,
    // Ensure compatibility with Netlify
    target: 'es2015',
  },
  // Base path for production (important for Netlify)
  base: '/',
  esbuild: {
    // Enable JSX in .js files
    jsx: 'automatic',
  },
  // Optimize dependencies that may slow down dev server
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lovable-tagger'] // Exclude lovable-tagger from optimization
  },
}));
