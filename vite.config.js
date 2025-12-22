import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://boltweb.onrender.com',
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact',
        '/blog',
        // Add all your routes
      ]
    })
  ],
  //  resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src')
  //   }
  // },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested'
  }
})
