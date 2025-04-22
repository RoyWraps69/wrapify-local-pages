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
    sourcemap: mode === 'development',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['src/components/ui/index.ts'],
          'vendor-hooks': ['react-hook-form', '@tanstack/react-query'],
          'vendor-animation': ['framer-motion'],
          'feature-towns': ['src/components/town/layout/TownPageContent.tsx'],
          'feature-shopping': ['src/components/print-ship/shopping-cart/ShoppingCart.tsx'],
          'feature-print': ['src/components/print-ship/PrintShipSection.tsx'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
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
    cssCodeSplit: true,
    cssMinify: true,
    emptyOutDir: true,
    target: 'es2015',
    modulePreload: {
      polyfill: true,
    },
    reportCompressedSize: false,
  },
  base: '/',
  esbuild: {
    jsx: 'automatic',
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['lovable-tagger'],
  },
  preview: {
    port: 8080,
    cors: true,
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  define: {
    'process.env.VITE_APP_BASE_URL': JSON.stringify('https://wrappingtheworld.com'),
  },
}));
