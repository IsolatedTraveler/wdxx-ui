import { describe, it } from 'vitest'
import { comBaseClass } from './base'
import { radius } from './radius'
describe('z-btn-group', () => {
  it('默认props', () => comBaseClass())
  radius()
})