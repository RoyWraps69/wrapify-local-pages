
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
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
  },
  preview: {
    port: 8080,
    cors: true,
  },
  define: {
    'process.env.VITE_APP_BASE_URL': JSON.stringify('https://wrappingtheworld.com'),
  },
}));
