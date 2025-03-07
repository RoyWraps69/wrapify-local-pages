
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
    minify: true,
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    rollupOptions: {
      external: ['vite'],
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['src/components/ui/index.ts'],
          'vendor-hooks': ['react-hook-form', '@tanstack/react-query'],
          'vendor-animation': ['framer-motion'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
    cssCodeSplit: true,
    emptyOutDir: true,
    target: 'es2020',
  },
  base: '/',
  esbuild: {
    jsx: 'automatic',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  ssr: {
    external: ['vite']
  }
}));
