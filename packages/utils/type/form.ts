import { ComponentRule, Rule } from "@ui/vars"
import { isString, isFunction, isRegExp, isObject } from "./def"

export const isRule = (v: string | Rule): string | void => {
  if (isString(v)) {
    if (!ComponentRule.includes(v)) {
      return 'one of ' + ComponentRule.map((value) => JSON.stringify(value)).join(', ')
    }
  } else if (isObject(v)) {
    if (!isRegExp(v.reg) && !isFunction(v.validate)) {
      return '{"reg": "RegExp"} or {"validate": "(v: any, data?: any) => void | string"}'
    }
  }
}
