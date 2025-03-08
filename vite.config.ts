
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
    react(),
    mode === 'development' && (() => {
      try {
        // Try to import componentTagger dynamically
        return require("lovable-tagger").componentTagger()
      } catch (e) {
        // If it fails, return null
        console.warn("Could not load lovable-tagger, continuing without it");
        return null;
      }
    })(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development',
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
      external: ['lovable-tagger'],
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
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@vitejs/plugin-react-swc'],
    exclude: ['lovable-tagger'],
    esbuildOptions: {
      target: 'es2020',
    },
    // Force dependency pre-bundling to improve caching
    force: process.env.NETLIFY === 'true',
  },
  // Improve caching in CI/CD environments
  cacheDir: process.env.NETLIFY === 'true' ? '.netlify/cache/.vite' : 'node_modules/.vite',
}));
