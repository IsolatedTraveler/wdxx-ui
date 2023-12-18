import { computed, inject, ref } from "vue";
import { provideWrapId } from "@ui/vars/hooks";
import { useProvideWrap } from "../use-provide";
export const useInjectWrap = (props: any) => {
  const { wrap } = inject(provideWrapId, { wrap: ref(false) })
    , val = {
      wrap: computed(() => wrap.value || props.wrap)
    }
  useProvideWrap(val)
  return val
} 