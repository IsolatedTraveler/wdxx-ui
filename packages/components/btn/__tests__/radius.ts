import { it, describe } from 'vitest'
import { propsBaseRadius } from '@ui/vars';
import { comBaseClass, comBaseStyle } from './base';
export const defSlot = '按钮'
const title = 'z-btn radius'

export const radius = function () {
  describe(title, () => {
    propsBaseRadius.forEach((key) => {
      key && it(title + ' ' + key, () => comBaseClass({ radius: key }, 'z-' + key))
    })
    it(title + ' 5px', () => comBaseStyle({ radius: '5px' }, 'border-radius: 5px'))
    it(title + ' 5px', () => comBaseStyle({ radius: '5px' }, 'border-radius: 5px'))
    it(title + ' 8', () => comBaseStyle({ radius: '8' }, 'border-radius: 8px'))
    it(title + ' 1em', () => comBaseStyle({ radius: '1em' }, 'border-radius: 1em'))
    it(title + ' 0.08rem', () => comBaseStyle({ radius: '0.08rem' }, 'border-radius: 0.08rem'))
    it(title + ' round', () => comBaseClass({ radius: 'round' }, 'z-round'))
    it(title + ' circle', () => comBaseClass({ radius: 'circle' }, 'z-circle'))
    it(title + ' ellipse', () => comBaseClass({ radius: 'ellipse' }, 'z-ellipse'))
    it(title + ' none', () => comBaseClass({ radius: 'none' }, 'z-none'))
  })
}