import { warn } from "vue";
import { Prop } from "../type/prop";

export const propsGetValidator = function (validator: Function | undefined, values: Array<any> | undefined, key: string = '') {
  return (val: any): boolean => {
    let err: string = ''
    if (validator) {
      err = validator(val)
    }
    if (values) {
      if (!values.includes(val)) {
        console.log(values)
        const text = [...new Set(values)].map((value) => JSON.stringify(value)).join(', ')
        err = `one of [${text}]${err ? '' : ` or ${err}`}`
      }
    }
    if (err) {
      warn(`Invalid prop: validation failed for prop "${key}". Expected ${err},got value ${JSON.stringify(val)}`)
    }
    return !err
  }
}
export const propsBuild = (prop: Prop, key?: string) => {
  const { type, values, required, validator, default: defaultValue } = prop
  return {
    type,
    validator: (values || validator) ? propsGetValidator(validator, values, key || prop.key) : undefined,
    required: !!required,
    default: defaultValue
  }
}