import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initMockServiceWorker } from './config'
import { groupMockDebugsMock } from '@mocks'

if (process.env.NODE_ENV === 'development') {
  initMockServiceWorker(groupMockDebugsMock)
}

createApp(App).mount('#app')
