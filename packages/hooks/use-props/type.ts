import { IfNever, NativePropType, PropDefault, UnknownToNever, Value, WritableArray } from "./base"
import type { ExtractPropTypes, PropType } from 'vue'
export const epPropKey = '__epPropKey'
export type ExtractPropType<T extends object> = Value<ExtractPropTypes<{ key: T }>>
export type ResolvePropType<T> = IfNever<T, never, ExtractPropType<{ type: WritableArray<T>, required: true }>>
export type PropMergeType<Type, Value, Validator> = | IfNever<UnknownToNever<Value>, ResolvePropType<Type>, never> | UnknownToNever<Value> | UnknownToNever<Validator>
export type PropSingle<Type, Value, Validator, Default extends PropMergeType<Type, Value, Validator>, Required extends boolean> = {
  type?: Type
  required?: Required
  values?: readonly Value[]
  validator?: (val: any) => string | undefined
  default?: PropDefault<Required, Default>
}
export type EpProp<Type, Default, Required> = {
  [epPropKey]: true
  readonly type: PropType<Type>
  readonly required: [Required] extends [true] ? true : false
  readonly validator: ((val: unknown) => boolean) | undefined
} & IfNever<Default, unknown, { readonly defalut: Default }>
export type PropFinalized<Type, Value, Validator, Default, Required> = EpProp<PropMergeType<Type, Value, Validator>, UnknownToNever<Default>, Required>

export type PropFinally<Input> = Input extends PropSingle<infer Type, infer Value, infer Validator, any, infer Required> ? PropFinalized<Type, Value, Validator, Input['default'], Required> : never

export type IfPropFinally<T, Y, N> = [T] extends [NativePropType] ? Y : N