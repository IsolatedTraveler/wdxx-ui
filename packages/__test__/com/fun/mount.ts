import { mount } from '@vue/test-utils';
export interface ComParam {
  prop?: any
  defSlot?: any
}
export function comMount(com: any, { prop, defSlot }: ComParam = {}) {
  return mount(com, {
    propsData: prop,
    slots: {
      default: defSlot
    }
  })
}