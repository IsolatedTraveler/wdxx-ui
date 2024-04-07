import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import { ZBtn } from '../';
import { btnClass, defSlot } from './class';
import { state } from './state';
import { shape } from './shape';
import { radius } from './radius';
import { size } from './size';
import { groupRadius } from './groupRadius';
describe('z-btn', () => {
  it('默认props', () => btnClass())
  state()
  shape()
  radius()
  size()
  it('z-btn full', () => btnClass({ full: true }, 'z-full'))
  it('z-btn disabled', () => {
    const wrapper = mount(ZBtn, {
      propsData: { disabled: true },
      slots: {
        default: defSlot
      }
    })
    expect(wrapper.vm.ref?.disabled).toBeTruthy()
  })
})
describe('z-btn-group', () => {
  groupRadius()
})