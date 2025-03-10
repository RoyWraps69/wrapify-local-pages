
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
    sourcemap: mode === 'development', // Only in development
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      }
    },
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
        assetFileNames: ({ name }) => {
          // Special handling based on file extensions for better caching
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
           
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }
            
          return 'assets/[ext]/[name]-[hash].[ext]';
        },
      }
    },
    // Add automatic CSS purging in production
    cssCodeSplit: true,
    cssMinify: true,
    emptyOutDir: true,
    // Ensure compatibility with Cloudflare and Netlify
    target: 'es2015',
    // Optimize modules for better loading performance
    modulePreload: {
      polyfill: true,
    },
    // Compress files for better delivery
    reportCompressedSize: false, // Reduces build time
  },
  // Base path for production
  base: '/',
  esbuild: {
    // Enable JSX in .js files
    jsx: 'automatic',
    // Remove console logs in production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  // Optimize dependencies that may slow down dev server
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lovable-tagger'] // Exclude lovable-tagger from optimization
  },
  preview: {
    // Configure preview server to mimic production
    port: 8080,
    cors: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // Fix sitemap generation issue
  define: {
    'process.env.VITE_APP_BASE_URL': JSON.stringify('https://wrappingtheworld.com'),
  },
}));
