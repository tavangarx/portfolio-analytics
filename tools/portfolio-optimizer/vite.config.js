import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-analytics/tools/portfolio-optimizer/',  // Updated base path
  build: {
    outDir: 'dist'
  }
})
