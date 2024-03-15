import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/@types'),
      '@services': path.resolve(__dirname, './src/@services'),
      '@mocks': path.resolve(__dirname, './src/@mocks')
    }
  }
})
