<script setup lang="ts">
import { ref, onMounted, watch, toRaw } from 'vue'
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
  const listMockCopy = structuredClone(toRaw(listMock.value))

  if (targetValue === '') {
    delete listMockCopy[listTitle][mockTitle]
  } else {
    listMockCopy[listTitle] = {
      ...listMockCopy[listTitle],
      [mockTitle]: {
        optionSelected: targetValue,
        data: data?.data
      }
    }
  }

  listMock.value = listMockCopy
}

watch(listMock, (newValue) => {
  setActiveMock()
  addListMock(newValue)
})

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
  <div class="select-mock-container__root">
    <div>
      <div
        v-for="mockDebugItem in mockDebugList"
        class="select-mock-container__group"
      >
        <h2 class="select-mock-container__title">{{ mockDebugItem.title }}</h2>

        <form class="select-mock-container__form">
          <div
            v-for="mock in mockDebugItem.list"
            class="select-mock-container__item"
          >
            <label class="select-mock-container__label">{{ mock.title }}</label>

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
    </div>

    <div class="select-mock-container__buttons">
      <button @click="reloadPage">page reload</button>
      <button @click="onDeactivateAllMocks">deactivate Mocks</button>
    </div>
  </div>
</template>

<style scoped>
.select-mock-container__root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.select-mock-container__group {
  margin-bottom: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #919191;
}
.select-mock-container__title {
  margin: 0;
}
.select-mock-container__form {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
}
.select-mock-container__item {
  min-width: 170px;
  padding: 0 5px;
  select {
    width: 100%;
  }
}
.select-mock-container__label {
  display: block;
}
.select-mock-container__buttons {
  > * {
    margin: 5px;
  }
}
</style>
