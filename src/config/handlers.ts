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
    const selectGroup = groupMockDebugs.find((group) => group.title === key)
    if (selectGroup) {
      const findList = selectGroup.list.filter((mock) => {
        return !!value[mock.title]
      })
      if (findList.length) {
        findList.forEach((mockDebug) => {
          const findOption = mockDebug.options.find((v) => {
            return v.id === value[mockDebug.title].optionSelected
          })
          if (findOption) {
            allHandlers.push(
              createRestHandler(
                findOption,
                mockDebug.method,
                mockDebug.path,
                mockDebug.delay
              )
            )
          }
        })
      }
    }
  })

  return allHandlers
}
