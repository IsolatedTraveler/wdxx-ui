import { ZBtn } from '../';
import { mount } from '@vue/test-utils';
import { expect } from 'vitest'
export const defSlot = '按钮'
export function btnStyle(prop?: any, classes: string = 'z-btn') {
  const wrapper = mount(ZBtn, {
    propsData: prop,
    slots: {
      default: defSlot
    }
  })
  expect(wrapper.vm.ref?.getAttribute('style')).toContain(classes)
}