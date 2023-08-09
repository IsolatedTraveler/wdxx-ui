import { PropsBaseSizeV } from "../props"
import { ComputedRef, InjectionKey } from "vue";

export interface ProvideFormProp {
  disabled: boolean | undefined
  readonly: boolean | undefined
  size?: PropsBaseSizeV | undefined
  tabIndex?: number | undefined
  validateFun: object | undefined
}
export interface ProvideForm {
  prop?: ComputedRef<ProvideFormProp>
  value?: ComputedRef<any>
  changeVal?: ((key: string | number, v: any) => void) | undefined
  submit?: (() => void) | undefined
  clear?: (() => void) | undefined
}
export const provideFormId: InjectionKey<ProvideForm> = Symbol('form')