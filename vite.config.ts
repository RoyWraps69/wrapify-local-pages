
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
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
  },
}));
