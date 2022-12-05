import { regExpCssLen, regPositiveInteger } from "@ui/vars"
export { isString, isArray, isFunction, isObject } from "@vue/shared"
export function isRegExp(obj: unknown): boolean {
  return obj instanceof RegExp
}
export const isNumber = (v: string | number) : boolean => !isNaN(v as any)
export const isCssLength = (v: string | number) : boolean => isNumber((v as string).replace(regExpCssLen, ''))
export const isPositiveInteger = (v: string | number): boolean => regPositiveInteger.test(v as string)