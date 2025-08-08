import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Teste-Web-Design-GRI-Institute/', // 👈 importante para GitHub Pages
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
