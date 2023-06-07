import { propsBuild } from '../fun/build'
import { propsTypeBtnType } from '../type/btn'
export const PropsBtnType = propsBuild({
  key: 'type',
  type: String,
  default: 'button',
  values: propsTypeBtnType
})