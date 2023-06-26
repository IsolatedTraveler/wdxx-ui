import { BtnProps } from "@ui/components/btn/src/btn";
import { computed, inject } from "vue";
import { provideBtnGroupId } from "../use-provide/btn-group";

export const useInjectBtn = (props: BtnProps) => {
  const { size } = inject(provideBtnGroupId, { size: computed(() => props.size) })
  return {
    size,
    // 带实现功能
    submit: () => { },
    reset: () => { }
  }
}