import { describe, expect, it, vi } from 'vitest'
import { ActiveMockService } from '@types'

import {
  addListMock,
  clear,
  getIsActive,
  getListMock,
  setActiveMock
} from '../services.ts'

describe('service', () => {
  describe('getListMock', () => {
    it('should return parsed', () => {
      localStorage.setItem(ActiveMockService.list, JSON.stringify(true))
      const result = getListMock()

      expect(result).toBeTruthy()
    })

    it('should return empty object when not can get', () => {
      localStorage.removeItem(ActiveMockService.list)

      const result = getListMock()

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
