import { PropsBaseSizeV } from "../props"
import { ComputedRef, InjectionKey } from "vue";

export interface ProvideFormProp {
  disabled?: boolean
  readonly?: boolean
  size?: PropsBaseSizeV
  tabIndex?: number
  labelSize?: number
}
export interface ProvideForm {
  prop?: ComputedRef<ProvideFormProp>
  setVal?: (key: string, v?: any) => void
  value?: any
  pValue?: any,
  submit?: (() => void)
  clear?: (() => void)
  change?: ((ly: string) => void)
}
export const provideFormId: InjectionKey<ProvideForm> = Symbol('form')