import { typeProp } from "./base.type"
export const buildProp = (prop: typeProp, key?: string) => {
  const {values, required, default: defaultValue, type, validator} = prop,
  _validator = values || validator ? (v: unknown) => {
    if (values) {
      if (!values.includes(v)) {
        const text = [...new Set(values)].map(v => JSON.stringify(v)).join(', ')
        console.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${text}], got value ${JSON.stringify(v)}.`)
        return false
      }
    } else if (validator) {
      const judge = validator(v)
      if (judge) {
        console.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. ${judge}.`)
        return false
      }
    }
    return true
  }: undefined
  return {
    type,
    required: !!required,
    validator: _validator,
    default: defaultValue
  }
}