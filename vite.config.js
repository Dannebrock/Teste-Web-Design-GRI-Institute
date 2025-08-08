import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Troque pelo nome do seu repositório no GitHub
const repoName = 'Teste-Web-Design-GRI-Institute'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repoName}/` : '/',
  plugins: [
    vue(),
    tailwindcss(),
  ],
})
