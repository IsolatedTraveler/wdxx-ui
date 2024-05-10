import { ref } from "vue"
import { ObjAny } from "z-uis/es/vars"
export const useQtxtDmgl = () => {
  const _ref = ref<HTMLButtonElement>(), xtcd = ref<Array<ObjAny>>([])
  return {
    _ref,
    xtcd
  }
}