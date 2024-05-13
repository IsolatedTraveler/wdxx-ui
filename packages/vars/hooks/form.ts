import { PropsBaseSizeV } from "../props"
import { ComputedRef, InjectionKey } from "vue";

export interface ProvideFormProp {
  disabled?: boolean
  readonly?: boolean
  size?: PropsBaseSizeV
  tabIndex?: number
}
export interface ProvideForm {
  prop?: ComputedRef<ProvideFormProp>
  labelSize?: ComputedRef<string | number | undefined>
  setVal?: (key: string, v: any) => void
  value?: any
  submit?: (() => void)
  clear?: (() => void)
}
export const provideFormId: InjectionKey<ProvideForm> = Symbol('form')