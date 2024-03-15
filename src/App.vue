<script setup lang="ts">
import SelectMockWrapper from './stories/selectComponent/SelectMockWrapper.vue'
import SelectMockContainer from './components/selectMock/SelectMock.vue'
import { groupMockDebugsMock } from './config'
</script>

<template>
  <SelectMockWrapper>
    <SelectMockContainer :mock-debug-list="groupMockDebugsMock" />
  </SelectMockWrapper>
</template>

<style scoped></style>
