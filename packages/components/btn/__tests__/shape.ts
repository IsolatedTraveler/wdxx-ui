import { it, describe } from 'vitest'
import { propsShape } from '@ui/vars';
import { comBaseClass } from './base';
export const defSlot = '按钮'
const title = 'z-btn shape'

export const shape = function () {
  describe(title, () => {
    propsShape.forEach((key) => {
      key && it(title + ' ' + key, () => comBaseClass({ shape: key }, 'z-' + key))
    })
  })
}