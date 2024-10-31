import { GroupMockDebug } from '@types'

export const groupMockDebugsMock: GroupMockDebug[] = [
  {
    title: 'test MSW - 1',
    type: 'request',
    list: [
      {
        title: 'mock-test-MSW-1',
        path: '/mock-test-MSW-1',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-test-success-1',
            title: 'mock - success - 1',
            status: 200,
            data: {
              test: 'mocked 123qwe',
              test2: '456rty'
            }
          },
          {
            id: 'mock-test-error-1',
            title: 'mock - error 400 - 1',
            status: 400,
            data: 'mocked error'
          }
        ]
      }
    ]
  },
  {
    title: 'test MSW - 2',
    type: 'request',
    list: [
      {
        title: 'mock-test-MSW-2',
        path: '/mock-test-MSW-2',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-test-success-2',
            title: 'mock - success - 2',
            status: 200,
            data: {
              test: 'mocked 123qwe',
              test2: '456rty'
            }
          },
          {
            id: 'mock-test-error-2',
            title: 'mock - error 400 - 2',
            status: 400,
            data: 'mocked error'
          }
        ]
      }
    ]
  }
]
