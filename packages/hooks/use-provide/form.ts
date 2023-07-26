import { FormProps } from "@ui/components/form/src/form";
import { PropsBaseSizeV } from "@ui/vars/props";
import { ComputedRef, InjectionKey, provide } from "vue";
import { useInjectForm } from "../use-inject/form";
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
export const useProvideForm = (props: FormProps) => {
  provide(provideFormId, useInjectForm(props))
}