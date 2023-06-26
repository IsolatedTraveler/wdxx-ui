import { useCss } from "@ui/hooks"
import { ref, SetupContext, computed } from "vue"
import { PageEmits, PageProps } from "./page"
export const usePage = (props: PageProps, emit: SetupContext<PageEmits>['emit']) => {
  const _ref = ref<HTMLButtonElement>(), classVal = computed(() => ({
    name: 'page'
  })), {_class} = useCss(classVal, _ref)
  return {
    _ref,
    _class
  }
}