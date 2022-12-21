import { ThProps } from "./th"
import { ref, SetupContext, computed, Ref, watch, onMounted, onUnmounted, Slots, ComputedRef, nextTick } from "vue"
import { ObjAny, TdObj, ThCol, ThObj } from "@ui/vars"
import { uuid } from "@ui/utils"
import { getStylePx, useInjectTh, useProvideTh, setCss } from "@ui/hooks"
declare type ThTd = 'th' | 'td'
declare type ThTdAlign = 'thAlign' | 'tdAlign'
declare type ThTdClass = 'thClass' | 'tdClass'
function intThTd(props: ThProps, id: string, posStyle: Ref<ObjAny>, selfClass: Ref<ObjAny>, name:ThTd = 'th'): ThCol {
  const textAlign = props[name + 'Align' as ThTdAlign] || props.align
  return {
    id,
    show: true,
    type: props.type || '',
    style: {
      minWidth: props.minWidth,
      maxWidth: props.maxWidth,
      width: props.width,
      textAlign
    },
    posStyle: posStyle.value,
    selfStyle: {
      textAlign
    },
    class: props[name + 'Class' as ThTdClass] || props.class,
    selfClass: selfClass.value
  }
}
function initTh(props: ThProps, id: string, colspan: Ref<number>, rowspan: ComputedRef<number>, cPosStyle: Ref<ObjAny>, style: Ref<ObjAny>, reload: Ref<boolean> | undefined, fixed: Ref<string>, selfClass: Ref<ObjAny>): ComputedRef<ThObj> {
  return computed(() => {
    return {
      ...intThTd(props, id, cPosStyle, selfClass),
      label: props.label,
      colspan: colspan.value,
      rowspan: rowspan.value,
      initStyle(thead) {
        initStyle(props, id, style, cPosStyle, thead, reload, fixed)
      },
      thStyle: {}
    }
  })
}
function initTd(props: ThProps, id: string, slots: Slots, cPosStyle: Ref<ObjAny>, selfClass: Ref<ObjAny>): ComputedRef<TdObj> {
  return computed(() => {
    return {
      ...intThTd(props, id, cPosStyle, selfClass, 'td'),
      name: props.name,
      body: slots.body
    }
  })
}
function initStyle(props: ThProps, id: string, style: Ref<ObjAny>, cPosStyle: Ref<object>, thead: HTMLElement, reload: Ref<boolean> | undefined, fixed: Ref<string>) {
  const el = thead?.querySelector?.('#' + id)
  if (el && reload) {
    const posStyleV = cPosStyle.value = {}
    style.value = {}
    setStyle(posStyleV, style.value, props, el as HTMLElement, thead, reload, fixed)
  }
}

function setStyle(posStyleV: ObjAny, style: ObjAny, props: ThProps, el: HTMLElement, thead: HTMLElement, reload: Ref<boolean>, fixed: Ref<string>) {
  nextTick(() => {
    if (props.width || props.maxWidth || fixed.value) {
      posStyleV.width = style.width = getStylePx(el.offsetWidth + 1)
      reload.value = !reload.value
      if (fixed.value) {
        const table = thead.parentElement
        nextTick(() => {
          if (fixed.value == 'left') {
            posStyleV.left = getStylePx(el.offsetLeft - (table as HTMLElement).offsetLeft)
          } else {
            posStyleV.right = getStylePx((table as HTMLElement).offsetWidth - el.offsetLeft - el.offsetWidth)
          }
          reload.value = !reload.value
        })
      }
    }
  })
}
function getPreId(el: Ref<HTMLButtonElement | undefined>) {
  return (el?.value?.previousElementSibling as HTMLElement)?.dataset?.id || ''
}
export const useTh = (props: ThProps, {slots}: SetupContext) => {
  let td: Ref<TdObj> | undefined
  const id = uuid(), el = ref<HTMLButtonElement>(), style = ref({}), posStyle = ref({}),
  {current_row, addTh, removeTh, changeColspan, changeChildRow, addTds, addThs, rows, reload, fixed} = useInjectTh(props),
  {colspan, child_row, rowspan} = useProvideTh(current_row || 0, slots, rows, props, fixed),
  selfClass = computed(() => {
    let def = setCss('pos-def')
    if (fixed.value) {
      def = setCss('pos-sticky')
      def += ' ' + def + '-' + fixed.value
    }
    return {
      [def]: true,
      [setCss('child')]: !!addTh,
      [setCss('last')]: !!td?.value
    }
  }),
  th = initTh(props, id, colspan, rowspan, posStyle, style, reload, fixed, selfClass)
  function addTd(judge: boolean | null) {
    if (child_row.value < 1) {
      if (judge !== false) {
        if (!td) {
          td = initTd(props, id, slots, posStyle, selfClass)
          addTds?.(td, getPreId(el))
        }
        if (judge === null) {
          judge = !td.value.show
        }
      }
    }
    td && (td.value.show = (judge as boolean))
  }
  function setStyle() {
    if (td) {
      const thead = el.value?.parentElement?.nextElementSibling
      thead && initStyle(props, id, style, posStyle, thead as HTMLElement, reload, fixed)
    }
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
    }), setStyle)
    window.onresize = setStyle
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

