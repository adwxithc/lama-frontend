import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
dotenv.config();

// // Access the environment variable
// const backendUrl = process.env.VITE_BACKEND_URL;



export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // target: backendUrl,
        changeOrigin: true,
        secure: true
      }
    }
  }
})
