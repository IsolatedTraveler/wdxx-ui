import {ComponentFlex, ComponentSize, ComponentState, ComponentAlign, ComponentRadius} from '@ui/vars'
import {buildProp, isCssLength, isPositiveInteger} from '@ui/utils'
export const useSizeProp = buildProp({
  key: 'size',
  type: String,
  values: ComponentSize
})
export const useStateProp = buildProp({
  key: 'state',
  type: String,
  values: ComponentState
})
export const useFlexProp = buildProp({
  key: 'flex',
  type: [String, Boolean],
  values: ComponentFlex
})
export const useAlginProp = buildProp({
  key: 'align',
  type: [String],
  values: ComponentAlign
})
export const useRadiusProp = buildProp({
  key: 'radius',
  type: [String, Number],
  validator(v: string | number) {
    if (ComponentRadius.includes(v as string) || isCssLength(v)) {
      return false
    } else {
      return `one of [${ComponentRadius.map((value) => JSON.stringify(value)).join(', ')}] or number or css length`
    }
  }
})
export const useSelfProp = buildProp({
  key: 'self',
  type: [String, Number],
  validator: (v: string | number) => isPositiveInteger(v) ? '' : 'positive integer'
})