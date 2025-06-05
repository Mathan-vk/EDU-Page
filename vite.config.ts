import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import path from "path"; // Import the 'path' module
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      // This makes Vite understand that "@/" refers to "src/"
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
