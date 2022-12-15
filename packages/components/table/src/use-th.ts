import { ThProps } from "./th"
import { ref, SetupContext, computed, Ref } from "vue"
import { ObjAny, ObjStr } from "@ui/vars"
import { uuid } from "@ui/utils"
declare type ThTd = 'thAlign' | 'tdAlign'
function init(props: ThProps, id: string, name:ThTd = 'thAlign') {
  const style = computed(() => ({
    minWidth: props.minWidth,
    maxWidth: props.maxWidth,
    width: props.width,
    textAlign: props[name] || props.align
  }))
  return ref({style, id})
}
function initTd(props: ThProps, style: ObjStr, id: string) {
  const col: Ref<ObjAny> = init(props, id, 'tdAlign'), colV = col.value
  colV.name = computed(() => props.name)
  colV.initStyle = () => {
    console.log(style?.value)
  }
  return col
}
export const useTh = (props: ThProps, {slots}: SetupContext) => {
  const style = ref({}), id = uuid(), head = init(props, id), headV = head.value
  if (!slots?.default) {
    initTd(props, style.value, id)
  }
  return {
    style,
    headV
  }
}