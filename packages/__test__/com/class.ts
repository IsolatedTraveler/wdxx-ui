import { expect } from 'vitest'
import { comMount, ComParam } from './fun'

export function comClass(com: any, classes: string, param?: ComParam) {
  const wrapper = comMount(com, param)
  expect(wrapper.vm.ref?.classList).toContain(classes)
}
export async function comSonClass(com: any, elem: string, classes: string, param?: ComParam) {
  const wrapper = comMount(com, param)
  expect(wrapper.find(elem).element.classList).toContain(classes);
}