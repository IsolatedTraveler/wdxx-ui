import { expect } from 'vitest'
import { comMount, ComParam } from './fun'
export interface ComAttrParam {
  name: string
  val: any
}
export function comAttr(com: any, { name, val }: ComAttrParam, param?: ComParam) {
  const wrapper = comMount(com, param)
  expect(wrapper.vm.ref?.[name]).toEqual(val)
}