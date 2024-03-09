<script setup lang="ts">
import { ref } from 'vue'

const showComponent = ref(false)

function toggleComponent() {
  showComponent.value = !showComponent.value
}
</script>

<template>
  <div class="root" :class="showComponent ? 'active' : ''">
    <button class="button" :class="showComponent ? 'active' : ''" @click="toggleComponent"><</button>
  </div>
</template>

<style scoped>
  .root {
    position: fixed;
    box-sizing: border-box;
    z-index: 99999;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 415px;
    background-color: #393939;
    padding: 10px;
    color: #fff;

    &.active {
      bottom: -415px;
    }
  }

  .button {
    border: 0;
    padding: 0;
    height: 30px;
    width: 30px;
    background-color: #393939;
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 5px;
    top: -28px;
    rotate: 270deg;
    transition: .5s ease all;

    &.active { rotate: 90deg; }
  }
</style>
