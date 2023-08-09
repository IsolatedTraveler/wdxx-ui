import { ComputedRef, InjectionKey } from "vue";
export interface ProvideBtnGroup {
  size: ComputedRef<string>
}
export const provideBtnGroupId: InjectionKey<ProvideBtnGroup> = Symbol('btn-group')