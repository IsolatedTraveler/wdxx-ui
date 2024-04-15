import { useCssInit } from "@ui/hooks"
import { ref, SetupContext, watch, Ref, nextTick, ComponentInternalInstance } from "vue"
import { TableEmits, TableProps } from "./table"
import { getCols, claerFixed, getStyle, JudgeExeSuccBack } from "./fun"
import { ThCol } from "@ui/vars"
export const useTable = (props: TableProps, emit: SetupContext<TableEmits>['emit'], instance: ComponentInternalInstance | null) => {
  var left: number = 0, top: number = 0
  const _ref = ref<HTMLButtonElement>(),
    { _class } = useCssInit(props, 'table', {}), keys: Ref<Array<ThCol>> = ref([]),
    trs: Ref<Array<Array<ThCol>>> = ref([])
  function judgeExePro(): Promise<JudgeExeSuccBack> {
    return new Promise((resolve, reject) => {
      return judgeExe(resolve)
    })
  }
  function judgeExe(succBack: (_v: JudgeExeSuccBack) => void) {
    nextTick(() => {
      const ref = instance?.refs
      if (ref && _ref.value) {
        succBack({ ref, el: _ref.value, keys: keys.value })
      } else {
        judgeExe(succBack)
      }
    })
  }
  function setStyle() {
    console.time()
    judgeExePro().then(({ ref, el, keys }) => {
      console.timeEnd()
      left = el.scrollLeft, top = el.scrollTop
      claerFixed(keys, el, ref)
      return judgeExePro()
    }).then(getStyle).then((el) => {
      el.scrollLeft = left
      el.scrollTop = top
    })
  }
  watch(() => props.cols, (v) => {
    const { cols, tds } = getCols(v as any)
    keys.value = tds
    trs.value = cols
  }, { immediate: true, deep: true })
  watch(() => props.data, setStyle, { immediate: true })
  return {
    _ref,
    _class,
    trs,
    keys
  }
}