import { Prop } from "@ui/vars";
import { warn } from "vue";
export const buildProp = (prop: Prop, key?: string) => {
  const { values, required, default: defaultValue, type, validator } = prop,
    _validator = values || validator ? (val: any): boolean => {
      let err: string = ''
      if (validator) {
        err = validator(val)
        if (!err) {
          return true
        }
      }
      if (values) {
        if (values.includes(val)) {
          return true
        } else {
          const text = [...new Set(values)].map((value) => JSON.stringify(value)).join(', ')
          err = `one of [${text}]${err ? '' : ` or ${err}`}`
        }
        warn(`Invalid prop: validation failed for prop "${key || prop.key}". Expected ${err},got value ${JSON.stringify(val)}`)
      }
      return false
    } : undefined
  return {
    type,
    validator: _validator,
    required: !!required,
    default: defaultValue
  }
}