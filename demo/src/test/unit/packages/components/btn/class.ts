import { ZBtn } from '@ui/components';
import { mount } from '@vue/test-utils';
export const defSlot = '按钮'
export async function btnClass(prop?: any, classes: string = 'z-btn') {
  const wrapper = mount(ZBtn, {
    propsData: prop,
    slots: {
      default: defSlot
    }
  })
  expect(wrapper.vm.ref?.classList).toContain(classes)
}