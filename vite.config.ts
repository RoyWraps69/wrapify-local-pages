
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('Running Vite in mode:', mode);
  console.log('Node version:', process.version);
  console.log('Base URL:', '/wrappingtheworld/');
  
  // Skip node-gyp operations in certain environments
  if (process.env.SKIP_PYTHON_CHECK) {
    console.log('Skipping Python check as SKIP_PYTHON_CHECK is set');
  }

  return {
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
      sourcemap: mode === 'development',
      minify: mode === 'production',
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
      cssCodeSplit: true,
      cssMinify: true,
      emptyOutDir: true,
    },
    // Base path for GitHub Pages deployment
    base: '/wrappingtheworld/',
    esbuild: {
      jsx: 'automatic',
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      exclude: ['node-expat'], // Exclude packages that require Python during build
    },
  }
});
