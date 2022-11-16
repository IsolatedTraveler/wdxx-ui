import { typeProp } from "./base.type"

export const buildProp = (prop: typeProp, key?: string) => {
  const {values, required, default: defaultValue, type, validator} = prop,
  _validator = values || validator ? (v: unknown) => {
    let judge = false
    if (values) {
      judge = values.includes(v)
    }
    judge = validator ? (judge || validator(v)) : judge
    if (!judge && values) {
      const text = [...new Set(values)].map(v => JSON.stringify(v)).join(', ')
      console.warn(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ''}. Expected one of [${text}], got value ${JSON.stringify(v)}.`)
    }
  }: undefined
  return {
    type,
    required: !!required,
    validator: _validator,
    default: defaultValue
  }
}