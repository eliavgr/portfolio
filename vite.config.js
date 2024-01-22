import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the production build
    assetsDir: "assets", // Specify the assets directory for generated assets
    sourcemap: false, // Disable source maps for production build (optional)
  },
});

