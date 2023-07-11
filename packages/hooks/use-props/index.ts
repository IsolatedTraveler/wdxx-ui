import { warn } from "vue";
import { fromPairs } from 'lodash-unified'
import { EpProp, IfPropFinally, PropFinalized, PropFinally, PropMergeType, PropSingle, epPropKey } from "./type";
import { NativePropType } from "./base";
import { isObject } from "@vue/shared";
export const isEpProp = (val: unknown): val is EpProp<any, any, any> => isObject(val) && !!(val as any)[epPropKey]
export const propsBuild = <
  Type = never,
  Value = never,
  Validator = never,
  Default extends PropMergeType<Type, Value, Validator> = never,
  Required extends boolean = false
>(prop: PropSingle<Type, Value, Validator, Default, Required>, key: string, defaultValue?: any): PropFinalized<Type, Value, Validator, Default, Required> => {
  if (!isObject(prop) || isEpProp(prop)) return prop as any
  const { type, values, required, validator } = prop
  return {
    [epPropKey]: true,
    type,
    validator: (values || validator) ? (val: any): boolean => {
      let err: string | undefined = ''
      if (validator) {
        err = validator(val)
        if (!err)
          return true
      }
      if (values) {
        if (values.includes(val)) {
          err = ''
        } else {
          const text = [...new Set(values)].map((value) => JSON.stringify(value)).join(', ')
          err = `one of [${text}]${err ? '' : ` or ${err}`}`
        }
      }
      if (err) {
        warn(`Invalid prop: validation failed for prop "${key}". Expected ${err},got value ${JSON.stringify(val)}`)
      }
      return true
    } : undefined,
    required: !!required,
    default: defaultValue === undefined ? prop.default : defaultValue
  } as any
}
export const propsBuildS = <
  Props extends Record<string, PropSingle<any, any, any, any, any> | { [epPropKey]: true } | NativePropType>
>(
  props: Props, vals?: any
): {
    [K in keyof Props]: IfPropFinally<Props[K], Props[K], PropFinally<Props[K]>>
  } =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [
      key,
      propsBuild(option as any, key, vals?.[key])
    ])
  ) as any