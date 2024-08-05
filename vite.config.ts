import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: false,
    https: false,
    proxy: {
      '/admin/api': 'http://localhost:5123',
      '/Uploads': 'http://localhost:5123',
    },
    // proxy: {
    //   '/api': 'http://192.168.128.37:5001/',
    // },
    watch: {
      usePolling: true
    }
  },
  plugins: [vue()],
})
