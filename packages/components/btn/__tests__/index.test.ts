import { it, describe } from 'vitest'
import { comBaseClass, comBaseAttr } from './base';
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
  it('z-btn disabled', () => comBaseAttr({ name: 'disabled', val: true }, { disabled: true }))
})