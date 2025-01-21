import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/visual-product-manager-frontend/",
  server: {
    port: 5173
  }
})
