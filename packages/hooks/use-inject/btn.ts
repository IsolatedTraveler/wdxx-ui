import { BtnProps } from "@ui/components/btn/src/btn";
import { provideBtnGroupId } from "@ui/vars/hooks";
import { computed, inject } from "vue";

export const useInjectBtn = (props: BtnProps) => {
  const { size, radius } = inject(provideBtnGroupId, { size: computed(() => props.size || ''), radius: computed(() => props.radius || '') })
  return {
    size,
    radius,
    // 带实现功能
    submit: () => { },
    reset: () => { }
  }
}