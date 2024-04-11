import { it, describe } from 'vitest'
import { propsBaseGroupRadius } from '@ui/vars';
import { comBaseSonClass, comBaseSonStyle } from './base';
const title = 'z-btn-group radius'

export const radius = function () {
  describe(title, () => {
    propsBaseGroupRadius.forEach((key) => {
      key && it(title + ' ' + key, () => comBaseSonClass({ radius: key }, 'z-' + key))
    })
    it(title + ' 5px', () => comBaseSonStyle({ radius: '5px' }, 'border-radius: 5px'))
    it(title + ' 5px', () => comBaseSonStyle({ radius: '5px' }, 'border-radius: 5px'))
    it(title + ' 8', () => comBaseSonStyle({ radius: '8' }, 'border-radius: 8px'))
    it(title + ' 1em', () => comBaseSonStyle({ radius: '1em' }, 'border-radius: 1em'))
    it(title + ' 0.08rem', () => comBaseSonStyle({ radius: '0.08rem' }, 'border-radius: 0.08rem'))
  })
}