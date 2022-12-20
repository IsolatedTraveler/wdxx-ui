import { ThProps } from "./th"
import { ref, SetupContext, computed, Ref, watch, onMounted, onUnmounted, Slots, ComputedRef, nextTick } from "vue"
import { ObjAny, TdObj, ThCol, ThObj } from "@ui/vars"
import { uuid } from "@ui/utils"
import { getStylePx, useInjectTh, useProvideTh } from "@ui/hooks"
declare type ThTd = 'thAlign' | 'tdAlign'
function intThTd(props: ThProps, id: string, posStyle: Ref<ObjAny>, name:ThTd = 'thAlign'): ThCol {
  return {
    id,
    style: {
      minWidth: props.minWidth,
      maxWidth: props.maxWidth,
      width: props.width,
      textAlign: props[name] || props.align
    },
    show: true,
    posStyle: posStyle.value
  }
}
function initTh(props: ThProps, id: string, colspan: Ref<number>, rowspan: ComputedRef<number>, cPosStyle: Ref<ObjAny>): ComputedRef<ThObj> {
  return computed(() => {
    return {
      ...intThTd(props, id, cPosStyle),
      label: props.label,
      colspan: colspan.value,
      rowspan: rowspan.value
    }
  })
}
function initTd(props: ThProps, id: string, slots: Slots, cPosStyle: Ref<ObjAny>, style: Ref<ObjAny>, reload: Ref<boolean> | undefined): ComputedRef<TdObj> {
  return computed(() => {
    return {
      ...intThTd(props, id, cPosStyle, 'tdAlign'),
      name: props.name,
      body: slots.body,
      initStyle(thead) {
        initStyle(props, id, style, cPosStyle, thead, reload)
      }
    }
  })
}
function initStyle(props: ThProps, id: string, style: Ref<ObjAny>, cPosStyle: Ref<object>, thead: HTMLElement, reload: Ref<boolean> | undefined) {
  const el = thead?.querySelector?.('#' + id)
  if (el && reload) {
    const posStyleV = cPosStyle.value = {}
    style.value = {}
    reload.value = !reload.value
    setStyle(posStyleV, style.value, props, el as HTMLElement, thead, reload)
  }
}

function setStyle(posStyleV: ObjAny, style: ObjAny, props: ThProps, el: HTMLElement, thead: HTMLElement, reload: Ref<boolean>) {
  nextTick(() => {
    if (props.width || props.maxWidth || props.fixed) {
      style.width = getStylePx(el.offsetWidth)
      if (props.fixed) {
        posStyleV.position = 'sticky'
        posStyleV.zIndex = '1'
        if (props.fixed == 'left') {
          posStyleV.left = getStylePx(el.offsetLeft)
        } else {
          posStyleV.right = getStylePx(thead.offsetWidth - el.offsetLeft - el.offsetWidth)
        }
      }
    }
    reload.value = !reload.value
  })
}
function getPreId(el: Ref<HTMLButtonElement | undefined>) {
  return (el?.value?.previousElementSibling as HTMLElement)?.dataset?.id || ''
}
export const useTh = (props: ThProps, {slots}: SetupContext) => {
  const id = uuid(), el = ref<HTMLButtonElement>(), style = ref({}), posStyle = ref({}),
  {current_row, addTh, removeTh, changeColspan, changeChildRow, addTds, addThs, rows, reload} = useInjectTh(props),
  {colspan, child_row, rowspan} = useProvideTh(current_row || 0, slots, rows, props),
  th = initTh(props, id, colspan, rowspan, posStyle)
  let td: Ref<TdObj> | undefined
  function addTd(judge: boolean | null) {
    if (child_row.value < 1) {
      if (judge !== false) {
        if (!td) {
          td = initTd(props, id, slots, posStyle, style, reload)
          addTds?.(td, getPreId(el))
        }
        if (judge === null) {
          judge = !td.value.show
        }
      }
    }
    td && (td.value.show = (judge as boolean))
  }
  onMounted(() => {
    if (current_row) {
      // 处理th参数变化
      addTh(colspan.value || 1, child_row.value)
      watch(() => colspan.value, changeColspan)
      watch(() => child_row.value, changeChildRow)
    }
    // 处理td参数变化
    addThs?.(current_row, th, getPreId(el))
    watch(() => child_row.value, () => {addTd(null)})
    watch(() => ({
      width: props.width,
      maxWidth: props.maxWidth,
      minWidth: props.minWidth
    }), () => {
      if (td) {
        const thead = el.value?.parentElement?.nextElementSibling
        thead && initStyle(props, id, style, posStyle, thead as HTMLElement, reload)
      }
    })
    addTd(true)
  })
  onUnmounted(() => {
    if (current_row) {
      // 处理th参数变化
      removeTh(colspan.value || 1)
    }
    // 处理td参数变化
    th.value.show = false
    addTd(false)
  })
  return {
    style,
    id,
    el
  }
}

