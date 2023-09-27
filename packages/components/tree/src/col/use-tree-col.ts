import { ref } from "vue"
import { TreeColProps } from "./tree-col"
export const useTreeCol = (props: TreeColProps) => {
  const _ref = ref<HTMLButtonElement>()
  return {
    _ref
  }
}