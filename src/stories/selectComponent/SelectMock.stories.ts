import type { Meta, StoryObj } from '@storybook/vue3'
import { GroupMockDebug } from '@types'
import SelectMock from '../../components/SelectMock.vue'
import SelectMockWrapper from './SelectMockWrapper.vue'

const groupMockDebugsMock: GroupMockDebug[] = [
  {
    title: 'TESTE',
    type: 'request',
    list: [
      {
        title: 'mock-test-MSW',
        path: '/mock-test-MSW',
        method: 'get',
        delay: 1000,
        type: 'request',
        options: [
          {
            id: 'mock-bill-success',
            title: 'mock - success',
            status: 200,
            data: {
              test: '123qwe',
              test2: '456rty'
            }
          },
          {
            id: 'mock-bill-error',
            title: 'mock - error 400',
            status: 400,
            data: 'error'
          }
        ]
      }
    ]
  }
]

const meta = {
  title: 'SelectMock',
  component: SelectMock
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
} satisfies Meta<typeof SelectMock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SelectMockWrapper, SelectMock },
    template: `
      <SelectMockWrapper>
        <SelectMock :mock-debug-list="groupMockDebugsMock"/>
      </SelectMockWrapper>
    `,
    computed: {
      groupMockDebugsMock() {
        return groupMockDebugsMock
      }
    }
  })
}
