import { it, describe } from 'vitest'
import { btnClass, defSlot } from './class';
import { state } from './state';
import { shape } from './shape';
import { radius } from './radius';
import { size } from './size';
import { ZBtn } from '@ui/components';
import { mount } from '@vue/test-utils';
describe('z-btn', () => {
  it('默认props', async () => await btnClass())
  state()
  shape()
  radius()
  size()
  it('z-btn full', async () => await btnClass({ full: true }, 'z-full'))
  it('z-btn disabled', async () => {
    const wrapper = mount(ZBtn, {
      propsData: { disabled: true },
      slots: {
        default: defSlot
      }
    })
    expect(wrapper.vm.ref?.disabled).toBe(true)
  })
})