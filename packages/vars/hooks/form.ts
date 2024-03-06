import { PropsBaseSizeV } from "../props"
import { ComputedRef, InjectionKey, Ref } from "vue";

export interface ProvideFormProp {
  disabled: boolean | undefined
  readonly: boolean | undefined
  size?: PropsBaseSizeV | undefined
  tabIndex?: number | undefined
}
export interface ProvideForm {
  prop?: ComputedRef<ProvideFormProp>
  value?: Ref<any>
  submit?: (() => void) | undefined
  clear?: (() => void) | undefined
}
export const provideFormId: InjectionKey<ProvideForm> = Symbol('form')