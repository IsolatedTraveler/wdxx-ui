import { it, describe } from 'vitest'
import { propsBaseState } from '@ui/vars';
import { btnClass } from './class';
export const defSlot = '按钮'
const title = 'z-btn state'

export const state = function () {
  describe(title, () => {
    propsBaseState.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ state: key }, 'z-' + key))
    })
  })
}