import { ActiveMockService, MockDebug } from '@types'

/**
 * @description get list with all active mocks. Parsed.
 */
export function getListMock() {
  try {
    return localStorage.getItem(ActiveMockService.list)
  } catch (error) {
    console.log('getListMock error', error)
    return null
  }
}

export function getListMockParsed() {
  try {
    const list = getListMock()

    if (list === null) return {}

    return JSON.parse(list || '{}')
  } catch (error) {
    console.log('getListMockParsed error', error)
    return {}
  }
}

export function getIsActive() {
  try {
    const list = localStorage.getItem(ActiveMockService.isActive)

    return !!list
  } catch (error) {
    return false
  }
}

export function setActiveMock() {
  localStorage.setItem(ActiveMockService.isActive, 'true')
}

export function addListMock(listMock: MockDebug | Record<string, never>) {
  localStorage.setItem(ActiveMockService.list, JSON.stringify(listMock))
}

export function clear() {
  localStorage.removeItem(ActiveMockService.isActive)
  localStorage.removeItem(ActiveMockService.list)
}
