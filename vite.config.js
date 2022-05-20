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
				blogs: resolve(__dirname, 'blogs/index.html'),
				comics: resolve(__dirname, 'comics/index.html'),
				leaderboard: resolve(__dirname, 'leaderboard/index.html')
			}
		}
	}
})
