import { defineConfig } from 'vite'
const { resolve } = require('path')
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'gallery/index.html'),
        faculty: resolve(__dirname, 'faculty/index.html'),
        students: resolve(__dirname, 'students/index.html'),
        comics: resolve(__dirname, 'comics/index.html'),
      }
    }
  }
})
