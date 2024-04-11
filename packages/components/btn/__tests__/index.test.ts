import { it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import { ZBtn } from '../';
import { comBaseClass, defSlot } from './base';
import { state } from './state';
import { shape } from './shape';
import { radius } from './radius';
import { size } from './size';
describe('z-btn', () => {
  it('默认props', () => comBaseClass())
  state()
  shape()
  radius()
  size()
  it('z-btn full', () => comBaseClass({ full: true }, 'z-full'))
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