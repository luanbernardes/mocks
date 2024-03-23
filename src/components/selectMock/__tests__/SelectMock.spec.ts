import { describe, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import SelectMock from '../SelectMock.vue'
import { groupMockDebugsMock } from '@mocks'

describe('SelectMock', () => {
  it('Toggle class when click in button', async () => {
    const wrapper = shallowMount(SelectMock, {
      props: {
        mockDebugList: groupMockDebugsMock
      }
    })

    expect(wrapper.find('.active').exists()).toBe(false)

    await wrapper.find('.select-mock__button').trigger('click')

    expect(wrapper.find('.active').exists()).toBe(true)

    await wrapper.find('.select-mock__button').trigger('click')

    expect(wrapper.find('.active').exists()).toBe(false)
  })
})
