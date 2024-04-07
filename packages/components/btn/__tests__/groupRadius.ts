import { it, describe } from 'vitest'
import { propsBaseRadius } from '@ui/vars';
import { btnClass } from './class';
export const defSlot = '按钮'
const title = 'z-btn-group shape'

export const groupRadius = function () {
  describe(title, () => {
    propsBaseRadius.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ shape: key }, 'z-' + key))
    })
  })
}