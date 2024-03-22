import { describe, expect, it, vi } from 'vitest'
import { ActiveMockService } from '@types'

import {
  addListMock,
  clear,
  getIsActive,
  getListMock,
  getListMockParsed,
  setActiveMock
} from '@services'

describe('service', () => {
  describe('getListMock', () => {
    it('should return local storage not parsed', () => {
      localStorage.setItem(ActiveMockService.list, JSON.stringify(true))
      const result = getListMock()

      expect(result).toEqual('true')
      expect(typeof result).toEqual('string')
    })

    it('should return null object when not can get value', () => {
      localStorage.removeItem(ActiveMockService.list)

      const result = getListMock()

      expect(result).toEqual(null)
    })
  })

  describe('getListMockParsed', () => {
    it('should return local storage parsed', () => {
      localStorage.setItem(
        ActiveMockService.list,
        JSON.stringify({ test: 'foo' })
      )
      const result = getListMockParsed()

      expect(result).toEqual({ test: 'foo' })
      expect(typeof result).toEqual('object')
    })

    it('should return empty object when not can get value', () => {
      localStorage.removeItem(ActiveMockService.list)

      const result = getListMockParsed()

      expect(result).toEqual({})
    })
  })

  describe('getIsActive', () => {
    it('should return parsed', () => {
      localStorage.setItem(ActiveMockService.isActive, JSON.stringify(true))

      const result = getIsActive()

      expect(result).toEqual(true)
    })

    it('should return empty object when not can get', () => {
      Storage.prototype.getItem = vi.fn(() => null)

      const result = getIsActive()

      expect(result).toEqual(false)
    })
  })

  describe('setActiveMock', () => {
    it('should set "active true" in localStorage', () => {
      vi.spyOn(Storage.prototype, 'setItem')

      setActiveMock()

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'is-active-mock-service-worker',
        'true'
      )
    })
  })

  describe('addListMock', () => {
    it('should set listMock stringify in localStorage', () => {
      const listMock: any = { a: 1 }
      vi.spyOn(Storage.prototype, 'setItem')

      addListMock(listMock)

      expect(localStorage.setItem).toHaveBeenCalledWith(
        ActiveMockService.list,
        '{"a":1}'
      )
    })
  })

  describe('clear', () => {
    it('should remove "is-active-mock-service-worker" and "list-mocks-active" in localStorage', () => {
      clear()

      expect(localStorage.getItem(ActiveMockService.list)).toBeNull()
      expect(localStorage.getItem(ActiveMockService.isActive)).toBeNull()
    })
  })
})
