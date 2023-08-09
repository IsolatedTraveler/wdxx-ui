import { BtnProps } from "@ui/components/btn/src/btn";
import { provideBtnGroupId } from "@ui/vars/hooks";
import { computed, inject } from "vue";

export const useInjectBtn = (props: BtnProps) => {
  const { size } = inject(provideBtnGroupId, { size: computed(() => props.size || '') })
  return {
    size,
    // 带实现功能
    submit: () => { },
    reset: () => { }
  }
}