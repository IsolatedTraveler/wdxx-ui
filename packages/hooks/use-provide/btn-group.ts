import { BtnGroupProps } from "@ui/components/btn/src/btn-group";
import { provideBtnGroupId } from "@ui/vars/hooks";
import { computed, provide } from "vue";
export const useProvideBtnGroup = (props: BtnGroupProps) => {
  provide(provideBtnGroupId, {
    size: computed(() => props.size || '')
  })
}