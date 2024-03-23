<script setup lang="ts">
import { ref } from 'vue'
import { GroupMockDebug } from '@types'
import SelectMockContainer from './SelectMockContainer.vue'

defineProps<{ mockDebugList: GroupMockDebug[] }>()

const showComponent = ref(false)

function toggleComponent() {
  showComponent.value = !showComponent.value
}
</script>

<template>
  <div class="select-mock__root" :class="showComponent ? 'active' : ''">
    <button
      class="select-mock__button"
      :class="showComponent ? 'active' : ''"
      @click="toggleComponent"
    >
      <
    </button>

    <SelectMockContainer :mock-debug-list="mockDebugList" />
  </div>
</template>

<style scoped>
.select-mock__root {
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

.select-mock__button {
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
  transition: 0.5s ease all;

  &.active {
    rotate: 90deg;
  }
}
</style>
