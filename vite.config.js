import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 

export default defineConfig({
  base: '/KronoSalud/', // Nombre exacto de tu repositorio
  plugins: [
    react(),
    tailwindcss(),
  ],
})