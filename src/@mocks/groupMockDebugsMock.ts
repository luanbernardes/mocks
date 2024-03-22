import { GroupMockDebug } from '@types'

export const groupMockDebugsMock: GroupMockDebug[] = [
  {
    title: 'test MSW',
    type: 'request',
    list: [
      {
        title: 'mock-test-MSW-a',
        path: '/mock-test-MSW-a',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-test-success',
            title: 'mock - success',
            status: 200,
            data: {
              test: 'value success mocked',
              test2: 'another values'
            }
          },
          {
            id: 'mock-test-error',
            title: 'mock - error 400',
            status: 400,
            data: 'value error mocked'
          }
        ]
      },
      {
        title: 'mock-test-MSW-b',
        path: '/mock-test-MSW-b',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-test-error',
            title: 'mock - error 400',
            status: 400,
            data: 'value error mocked'
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
