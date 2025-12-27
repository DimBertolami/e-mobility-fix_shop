import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set `base` to your repo name so the app loads correctly on GitHub Pages
export default defineConfig({
  base: '/e-mobility-fix_shop/',
  plugins: [react()],
})
