import { it, describe } from 'vitest'
import { propsBaseRadius } from '@ui/vars';
import { btnClass } from './class';
import { btnStyle } from './style';
export const defSlot = '按钮'
const title = 'z-btn radius'

export const radius = function () {
  describe(title, () => {
    propsBaseRadius.forEach((key) => {
      key && it(title + ' ' + key, () => btnClass({ radius: key }, 'z-' + key))
    })
    it(title + ' 5px', () => btnStyle({ radius: '5px' }, 'border-radius: 5px'))
    it(title + ' 8', () => btnStyle({ radius: '8' }, 'border-radius: 8px'))
    it(title + ' 1em', () => btnStyle({ radius: '1em' }, 'border-radius: 1em'))
    it(title + ' 0.08rem', () => btnStyle({ radius: '0.08rem' }, 'border-radius: 0.08rem'))
  })
}