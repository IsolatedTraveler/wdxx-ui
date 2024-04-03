import { it, describe } from 'vitest'
import { propsBtnGroupShape } from '@ui/vars';
import { btnClass } from './class';
export const defSlot = '按钮'
const title = 'z-btn-group shape'

export const groupShape = function () {
  describe(title, () => {
    propsBtnGroupShape.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ shape: key }, 'z-' + key))
    })
  })
}