import { expect } from 'vitest'
import { comMount, ComParam } from './fun'

export function comStyle(com: any, style: string, param?: ComParam) {
  const wrapper = comMount(com, param)
  expect(wrapper.vm.ref?.getAttribute('style')).toContain(style)
}