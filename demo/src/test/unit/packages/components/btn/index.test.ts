import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils';
import { ZBtn } from '@ui/components';
const defSlot = '按钮'
describe('z-btn', () => {
  it('默认props', async () => {
    const wrapper = mount(ZBtn, {
      slots: {
        default: defSlot
      }
    })
    expect(wrapper.vm.ref?.textContent).toBe('按钮')
    expect(wrapper.vm.ref?.tagName?.toLowerCase()).toBe('button')
  })
})