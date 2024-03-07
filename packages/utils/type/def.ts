import { regExpCssLen, regPositiveInteger } from "@ui/vars"
export { isString, isArray, isFunction, isObject } from "@vue/shared"
export { isBoolean } from '@vueuse/core'
export function isRegExp(obj: unknown): boolean {
  return obj instanceof RegExp
}
export const isNumber = (v: any): boolean => !isNaN(v)
export const isCssLength = (v: any): string | undefined => {
  if (!isNumber(v.replace(regExpCssLen, '')) && v !== 'auto') {
    return 'number or cssLength'
  }
}
export const isPositiveInteger = (v: any): string | undefined => {
  if (!regPositiveInteger.test(v)) {
    return 'number'
  }
}