import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // You might need to install 'path' via npm if it's missing

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This maps the "@" symbol to your "src" folder
      "@": path.resolve(__dirname, "./src"),
    },
  },
})