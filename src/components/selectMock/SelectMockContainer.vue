<script setup lang="ts">
import { defineProps, onMounted, reactive, ref } from 'vue'
import { GroupMockDebug, localStorageMock } from '@types'
import { addListMock, clear, getListMock, setActiveMock } from '@services'

const { mockDebugList } = defineProps<{ mockDebugList: GroupMockDebug[] }>()

let listMock = ref()

// onMounted(() => {
//   listMock.value = getListMock()
//   // console.log(listMock.value)
// })

// FUNCTIONS
const onChange = (e: Event, listTitle, mock) => {
  const target = e.target as HTMLSelectElement
  const targetValue = target.value
  const mockTitle = mock.title
  const data = mock.options.find((item) => item.id === targetValue)
  const newValue: localStorageMock = {
    ...listMock.value,
    [listTitle]: {
      mockTitle,
      optionSelected: targetValue,
      data: data.data
    }
  }
  listMock.value = newValue
  console.log(newValue)

  // when select '' remove mock
  if (targetValue === '') {
    delete newValue[listTitle]
  }

  setActiveMock()
  addListMock(newValue as any)
}

const optionSelected = () => {
  // return listMock.value?.[mockTitle]
  return ''
}

const reloadPage = () => {
  location.reload()
}

const onDeactivateAllMocks = () => {
  clear()
  location.reload()
}
</script>

<template>
  <div v-for="mockDebugItem in mockDebugList">
    <h2>{{ mockDebugItem.title }}</h2>

    <form>
      <div v-for="mock in mockDebugItem.list">
        <label>{{ mock.title }}</label>
        <br />

        <select
          :value="optionSelected(mock.title)"
          @change="onChange($event, mockDebugItem.title, mock)"
        >
          <option value="">-</option>
          <option v-for="option in mock.options" :value="option.id">
            {{ option.title }}
          </option>
        </select>
      </div>
    </form>
  </div>
  {{ listMock }}

  <hr />

  <div class="buttons">
    <button @click="reloadPage">page reload</button>
    <button @click="onDeactivateAllMocks">deactivate Mocks</button>
  </div>
</template>

<style scoped>
.buttons {
  padding: 10px;
}
</style>
