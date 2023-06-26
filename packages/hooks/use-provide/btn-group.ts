import { BtnGroupProps } from "@ui/components/btn/src/btn-group";
import { computed, ComputedRef, InjectionKey, provide } from "vue";
export interface ProvideBtnGroup {
  size: ComputedRef<string>
}
export const provideBtnGroupId:InjectionKey<ProvideBtnGroup> = Symbol('btn-group')
export const useProvideBtnGroup = (props: BtnGroupProps) => {
  provide(provideBtnGroupId, {
    size: computed(() => props.size)
  })
}