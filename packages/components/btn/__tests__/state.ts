import { it, describe } from 'vitest'
import { propsBaseState } from '@ui/vars';
import { comBaseClass } from './base';
export const defSlot = '按钮'
const title = 'z-btn state'

export const state = function () {
  describe(title, () => {
    propsBaseState.forEach((key) => {
      key && it(title + ' ' + key, () => comBaseClass({ state: key }, 'z-' + key))
    })
  })
}