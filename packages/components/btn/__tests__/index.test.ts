import { it, describe } from 'vitest'
import { comBaseClass, comBaseAttr, comBaseStyle } from './base';
import { state } from './state';
import { shape } from './shape';
import { radius } from './radius';
import { size } from './size';
describe('z-btn', () => {
  describe('z-btn 基础测试', () => {
    it('z-btn 测试默认类样式', () => comBaseClass())
    it('z-btn 测试默认行内样式', () => comBaseStyle())
  })
  state()
  shape()
  radius()
  size()
  it('z-btn full', () => comBaseClass({ full: true }, 'z-full'))
  it('z-btn disabled', () => comBaseAttr({ name: 'disabled', val: true }, { disabled: true }))
})