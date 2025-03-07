
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
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
    minify: true, // Use true instead of 'terser' to let Vite choose the best minifier
    assetsDir: 'assets',
    // Improved asset handling
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    // Configure asset handling
    rollupOptions: {
      external: ['vite'],
      output: {
        manualChunks: {
          // Vendor chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['src/components/ui/index.ts'],
          'vendor-hooks': ['react-hook-form', '@tanstack/react-query'],
          'vendor-animation': ['framer-motion'],
        },
        // Ensure that dynamic imports have meaningful chunk names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
    // Add automatic CSS purging in production
    cssCodeSplit: true,
    emptyOutDir: true,
    // Ensure compatibility with Netlify
    target: 'es2020',
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
  // Add any external modules that should be excluded from bundling
  ssr: {
    // List of dependencies that should not be bundled
    external: ['vite']
  }
}));
