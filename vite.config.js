import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sunnyside-agency-landing-page-main/',
  plugins: [
    tailwindcss(),
  ],
})