import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // enable jest-like global test APIs
      globals: true,
      // simulate DOM with happy-dom
      environment: 'happy-dom'
    }
  })
)
