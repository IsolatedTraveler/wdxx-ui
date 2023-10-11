import { ref } from "vue"
import { CeilProps } from "./ceil"
export const useCeil = (props: CeilProps) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}