import { ComponentObjectPropsOptions, warn } from "vue";
import { Prop, PropV } from "../type/prop";
import { fromPairs } from 'lodash-unified'

const propsGetValidator = function (validator: Function | undefined, values: Array<any> | undefined, key: string = '') {
  return (val: any): boolean => {
    let err: string = ''
    if (validator) {
      err = validator(val)
    }
    if (values) {
      if (!values.includes(val)) {
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
const propsBuild = (prop: PropV, key?: string, defaultValue?: any): Prop => {
  const { type, values, required, validator } = prop
  return {
    type,
    validator: (values || validator) ? propsGetValidator(validator, values, key || prop.key) : undefined,
    required: !!required,
    default: defaultValue === undefined ? prop.default : defaultValue
  }
}
export const propsBuildS = <Props extends Record<string, PropV>>(props: Props, vals?: any): { [K in keyof Props]: ComponentObjectPropsOptions } =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [
      key,
      propsBuild(option, key, vals?.[key])
    ])
  ) as any