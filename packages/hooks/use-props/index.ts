import {  warn } from "vue"
import { PropKey } from "./type"
import { NativePropType } from "./base"
export const isEpProp = (val: any): val is PropFinalized<any, any, any, any, any> => !!val[PropKey]
interface PropItem<Type, Value, Default> {
  readonly type?: Type
  readonly required?: boolean
  readonly values?: Value[]
  validator?: (val: any) => string | undefined
  default?: Default
  readonly typeV?: any
}
type PropsBuildVal<T> = T
type PropsBuildVals<Props extends Record<string,PropItem<any,any,any>| NativePropType>> =  {
  [K in keyof Props]?: PropsBuildVal<any>
}
type PropsBuildReqs<Props> =  {
  [K in keyof Props]?: true
}
type PropConvert<Input, Def, Req extends boolean | undefined> = Input extends PropItem<any,any,any> ? PropFinalized<
  Input['type'],
  Input['default'],
  Input['required'],
  Def,
  Req
> : PropFinalized<Input, undefined, false, Def, Req>
type IfNotBase<T,Y,N> = [T] extends [string] ? Y : [T] extends [number] ? Y : [T] extends [boolean] ? Y : [T] extends [object] ? Y : [T] extends [symbol] ? Y : N
type PropFinalized<Type, Default, Required extends boolean | undefined, Def, Req extends boolean | undefined> =
IfNotBase<Def, {
  [PropKey]: true
  type: Type
  required: Required extends true ? true : (Req extends true ? true : false)
  validator?: (val: unknown) => boolean
  default: Def
}, IfNotBase<Default, {
  [PropKey]: true
  type: Type
  required: Required extends true ? true : (Req extends true ? true : false)
  validator?: (val: unknown) => boolean
  default: Default
}, {
  [PropKey]: true
  type: Type
  required: Required extends true ? true : (Req extends true ? true : false)
  validator?: (val: unknown) => boolean
}>> 
export const propsBuild = <
Prop extends PropItem<any,any,any>,
Key extends string,
Def extends PropsBuildVal<any>,
Req extends boolean
>(
  prop:Prop | NativePropType
  , key: Key
  , defaultValue?: Def
  , req?: Req
): PropFinalized<Prop['type'], Prop['default'], Prop['required'], Def, Req> => {
  if (isEpProp(prop)) return prop as any
  if (!prop || typeof prop === 'function') return {type: prop as any, required: !!req, [PropKey]: true} as any
  const { type, values, required, validator } = prop
  return {
    [PropKey]: true,
    type,
    validator: (values || validator) ? (val: any): boolean => {
      let err: string | undefined = ''
      if (validator) {
        err = validator(val)
        if (!err)
          return true
      }
      if (values) {
        if (values.includes(val)) {
          err = ''
        } else {
          const text = [...new Set(values)].map((value) => JSON.stringify(value)).join(', ')
          err = `one of [${text}]${err ? '' : ` or ${err}`}`
        }
      }
      if (err) {
        warn(`Invalid prop: validation failed for prop "${key}". Expected ${err},got value ${JSON.stringify(val)}`)
      }
      return true
    } : undefined,
    required: !!required || !!req,
    default: defaultValue === undefined ? prop.default : defaultValue
  } as any
}
export const propsBuildS = <Props extends Record<string, PropItem<any,any,any>|NativePropType>, Vals extends PropsBuildVals<Props>, Reqs extends PropsBuildReqs<Props>>
(
  props:Props,
  vals: Vals = {} as Vals,
  req:Reqs = {} as Reqs
):{[K in keyof Props]: PropConvert<Props[K], Vals[K],Reqs[K]> } => {
  const res:any = {} as any
  for(let key in props) {
    res[key] = propsBuild(props[key], key, vals[key], req[key])
  }
  return res
}