import path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [vue()],
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom'
  },
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/@types')
    }
  }
}
