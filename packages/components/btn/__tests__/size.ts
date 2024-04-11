import { it, describe } from 'vitest'
import { propsBaseSize } from '@ui/vars';
import { comBaseClass } from './base';
export const defSlot = '按钮'
const title = 'z-btn size'

export const size = function () {
  describe(title, () => {
    propsBaseSize.forEach((key) => {
      key && it(title + ' ' + key, () => comBaseClass({ size: key }, 'z-' + key))
    })
  })
}