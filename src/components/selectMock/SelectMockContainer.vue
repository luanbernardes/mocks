<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'
import { GroupMockDebug, localStorageMock } from '@types'
import { addListMock, clear, getListMockParsed, setActiveMock } from '@services'

const { mockDebugList } = defineProps<{ mockDebugList: GroupMockDebug[] }>()
let listMock = ref<InstanceType<localStorageMock>>({})

onMounted(() => {
  listMock.value = getListMockParsed()
})

// FUNCTIONS
const onChange = (e: Event, listTitle, mock) => {
  const target = e.target as HTMLSelectElement
  const targetValue = target.value
  const mockTitle = mock.title
  const data = mock.options.find((item) => item.id === targetValue)

  // TODO update localStorage creat a function?
  const localStorageValue = {
    ...listMock.value,
    [listTitle]: {
      ...listMock.value[listTitle],
      [mockTitle]: {
        optionSelected: targetValue,
        data: data?.data
      }
    }
  }

  // TODO create function delete
  // when select '' remove mock
  if (targetValue === '') {
    delete localStorageValue[listTitle][mockTitle]
  }

  // console.log({ localStorageValue })

  listMock.value = localStorageValue
  setActiveMock()
  addListMock(localStorageValue as any)
}

const optionSelected = (listTitle, mockTitle) => {
  return listMock.value[listTitle]?.[mockTitle]?.optionSelected
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
          :value="optionSelected(mockDebugItem.title, mock.title)"
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
