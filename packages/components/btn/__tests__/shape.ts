import { it, describe } from 'vitest'
import { propsShape } from '@ui/vars';
import { btnClass } from './class';
export const defSlot = '按钮'
const title = 'z-btn shape'

export const shape = function () {
  describe(title, () => {
    propsShape.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ shape: key }, 'z-' + key))
    })
  })
}