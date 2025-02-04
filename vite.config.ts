import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/React-Project-Assignment/',
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  }
})