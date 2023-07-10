import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { MediaEmits, MediaProps } from "./media"
export const useMedia = (props: MediaProps, emit: SetupContext<MediaEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'media'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}