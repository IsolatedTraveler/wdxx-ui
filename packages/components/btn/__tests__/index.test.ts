import { it, describe } from 'vitest'
import { comBaseClass, comBaseAttr, comBaseStyle } from './base';
import { state } from './state';
import { shape } from './shape';
import { radius } from './radius';
import { size } from './size';
describe('z-btn', () => {
  describe('z-btn test', () => {
    it('z-btn test class', () => comBaseClass())
    it('z-btn test overflow', () => comBaseStyle({}, 'overflow: hidden;'))
    it('z-btn test flex-basis', () => comBaseStyle({}, 'flex-basis: auto;'))
    it('z-btn test flex-grow', () => comBaseStyle({}, 'flex-grow: 0;'))
  })
  state()
  shape()
  radius()
  size()
  it('z-btn full', () => comBaseClass({ full: true }, 'z-full'))
  it('z-btn disabled', () => comBaseAttr({ name: 'disabled', val: true }, { disabled: true }))
})