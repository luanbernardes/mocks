export type httpMethodsSupport = 'get' | 'post'
export type MockDebugType = 'callback' | 'request'

export interface MockDebugRequest {
  id: string
  title: string
  status: number
  data: any
}

export interface MockDebug {
  title: string
  path: string
  method: httpMethodsSupport
  delay: number
  options: MockDebugRequest[]
  type?: MockDebugType
}

export interface GroupMockDebug {
  title: string
  list: MockDebug[]
  type?: MockDebugType
}

export enum ActiveMockService {
  isActive = 'is-active-mock-service-worker',
  list = 'list-mocks-active'
}

export interface localStorageMock {
  [key: string]: {
    // list title
    [key: string]: {
      // mock title
      data: {}
      optionSelected: string
    }
  }
}
