import { regExpCssLen, regPositiveInteger } from "@ui/vars"
export { isString, isArray, isFunction, isObject } from "@vue/shared"
export { isBoolean } from '@vueuse/core'
export function isRegExp(obj: unknown): boolean {
  return obj instanceof RegExp
}
export const isNumber = (v: any): boolean => !isNaN(v)
export const isCssLength = (v: any): boolean => isNumber((v).replace(regExpCssLen, ''))
export const isPositiveInteger = (v: any): string => {
  if (regPositiveInteger.test(v)) {
    return ''
  }
  return 'number'
}