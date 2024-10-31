<template>
  <button
    type="button"
    class="storybook-button"
    @click="onClick('/mock-test-MSW-1')"
  >
    /mock-test-MSW-1
  </button>

  <br />

  <button
    type="button"
    class="storybook-button"
    @click="onClick('/mock-test-MSW-2')"
  >
    /mock-test-MSW-2
  </button>
  <br />
  <br />

  <section>
    Response:
    <pre>
      {{ response }}
    </pre>
  </section>

  <slot></slot>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { initMockServiceWorker } from '../../config'
import { groupMockDebugsMock } from '@mocks'

initMockServiceWorker(groupMockDebugsMock)

const response = ref<InstanceType<any>>(undefined)

const onClick = (path: string) => {
  fetch(path, {
    method: 'GET'
  }).then(async (r) => {
    const responseJson = await r.json()
    response.value = JSON.stringify(responseJson, undefined, 2)
  })
}
</script>

<style scoped>
.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;

  font-size: 14px;
  padding: 11px 20px;
}
</style>
