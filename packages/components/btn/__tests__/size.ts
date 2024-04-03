import { it, describe } from 'vitest'
import { propsBaseSize } from '@ui/vars';
import { btnClass } from './class';
export const defSlot = '按钮'
const title = 'z-btn size'

export const size = function () {
  describe(title, () => {
    propsBaseSize.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ size: key }, 'z-' + key))
    })
  })
}