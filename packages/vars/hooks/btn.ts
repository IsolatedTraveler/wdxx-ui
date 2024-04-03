import { ComputedRef, InjectionKey } from "vue";
export interface ProvideBtnGroup {
  size: ComputedRef<string>
  radius: ComputedRef<string | number>
}
export const provideBtnGroupId: InjectionKey<ProvideBtnGroup> = Symbol('btn-group')