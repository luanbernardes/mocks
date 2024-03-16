import { http, HttpResponse, delay as delayMsw } from 'msw'
import { getListMockParsed } from '@services'
import {
  GroupMockDebug,
  httpMethodsSupport,
  MockDebug,
  MockDebugRequest
} from '@types'

function createRestHandler(
  option: MockDebugRequest,
  method: httpMethodsSupport,
  requestPath: string,
  delay: number
) {
  return http[method](requestPath, async () => {
    await delayMsw(delay)

    return HttpResponse.json(option.data, {
      status: option.status
    })
  })
} // <-- é array disso aqui

export function createHandler(groupMockDebugs: GroupMockDebug[]) {
  const activeMocks: MockDebug | object = getListMockParsed()

  const activeMocksArr = Object.entries(activeMocks)
  const allHandlers: any = []

  activeMocksArr.forEach(([key, value]) => {
    const findGroup = groupMockDebugs.find((group) => group.title === key)
    if (findGroup) {
      const findList = findGroup.list.find(
        (mock) => mock.title === value.mockTitle
      )
      if (findList) {
        const findOption = findList.options.find((v) => {
          return v.id === value.optionSelected
        })
        if (findOption) {
          allHandlers.push(
            createRestHandler(
              findOption,
              findList.method,
              findList.path,
              findList.delay
            )
          )
        }
      }
    }
  })

  return allHandlers
}
