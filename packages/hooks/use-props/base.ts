export type Writable<T> = { -readonly [P in keyof T]: T[P] }
export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T

export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N

export type IfUnknown<T, Y, N> = [unknown] extends [T] ? Y : N

export type UnknownToNever<T> = IfUnknown<T, never, T>

export type Value<T> = T[keyof T]

export type PropDefault<Required extends boolean, Default> = Required extends true ? never : Default extends Record<string, unknown> | Array<any> ? () => Default : (() => Default) | Default

export type NativePropType = | ((...args: any) => any) | { new(...args: any): any } | undefined | null