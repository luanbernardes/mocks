<template>
  <button type="button" class="storybook-button" @click="onClick">
    make real request
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

const response = ref<InstanceType<any>>(undefined)

const onClick = () => {
  fetch('/mock-test-MSW', {
    method: 'GET'
  }).then(async (r) => {
    const responseJson = await r.json()
    response.value = JSON.stringify(responseJson, undefined, 2)

    console.log(responseJson)
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;

  font-size: 14px;
  padding: 11px 20px;
}
</style>
