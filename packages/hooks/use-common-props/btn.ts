import {ComponentBtnShape, ComponentBtnType} from '@ui/vars'
import {buildProp} from '@ui/utils'
export const useBtnTypeProp = buildProp({
  key: 'type',
  type: String,
  values: ComponentBtnType
})
export const useBtnShapeProp = buildProp({
  key: 'shape',
  type: String,
  values: ComponentBtnShape
})