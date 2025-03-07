
/// <reference types="vite/client" />

// Additional typings for build process
interface ImportMeta {
  readonly env: {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly VITE_APP_ENV?: string;
    readonly VITE_BASE_URL?: string;
    // Add any other environment variables used in the application
  };
}
