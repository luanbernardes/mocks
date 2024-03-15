import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // enable jest-like global test APIs
      globals: true,
      // simulate DOM with happy-dom
      // (requires installing happy-dom as a peer dependency)
      environment: 'happy-dom'
    }
  })
)
