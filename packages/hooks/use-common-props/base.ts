import {ComponentFlex, ComponentSize, ComponentState, ComponentRowAlign, ComponentRadius, Rule, ComponentColAlign, ComponentSelfAlign, ComponentAlign, ComponentFixed} from '@ui/vars'
import {buildProp, isArray, isCssLength, isNumber, isPositiveInteger, isRule} from '@ui/utils'
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
  type: String,
  values: ComponentFlex
})
export const useRowAlginProp = buildProp({
  key: 'row-align',
  type: [String],
  values: ComponentRowAlign
})
export const useColAlginProp = buildProp({
  key: 'col-align',
  type: [String],
  values: ComponentColAlign
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
  type: String,
  values: ComponentSelfAlign
})
export const useOrderProp = buildProp({
  key: 'order',
  type: [String, Number],
  validator: (v: string | number) => isPositiveInteger(v) ? '' : 'positive integer'
})
export const useRuleProp = buildProp({
  key: 'rule',
  type: [String, Object, Array],
  validator(v: string | Rule | Array<string | Rule>) {
    if (isArray(v)) {
      return v.filter(isRule)[0]
    } else {
      isRule(v)
    }
  }
})
export const useFixedProp = buildProp({
  key: 'fixed',
  type: String,
  values: ComponentFixed
})
export const useNumberBuildProp = (key: string, def?: number) => buildProp({key, type: [String, Number], default: def, validator(v: string | number) {
  if (!isNumber(v)) {
    return 'number'
  }
}})
export const useStyleBuildProp = (key: string, def?: number) => buildProp({key, type: [String, Number], default: def, validator(v: string | number) {
  if (!isCssLength(v)) {
    return 'css length'
  }
}})
export const useAlginBuildProp = (key: string = 'align', def?: string) => buildProp({
  key,
  type: [String],
  values: ComponentAlign
})