import { PropsFlex, PropsBaseBoolean, PropsBasePositiveInteger, PropsBasePx, PropsFlexAlign, PropsFlexJustify, PropsFlexSelf } from "@ui/props";
import { Ref, watch, ref } from "vue";
import { FlexWatchElemSizeChange } from "@ui/vars/type/flex";
import { useCssName } from "../use-css/cs";
import { useCssStyle } from "../use-css/style";
import { useCssClassAdd } from "../use-css/class";
import { ObjStr } from "@ui/vars";
export const propsFlexMixins = {
  flex: PropsFlex,
  basis: PropsBasePx,
  auto: PropsBasePositiveInteger,
  left: PropsBasePx,
  right: PropsBasePx,
  order: PropsBasePositiveInteger,
  justify: PropsFlexJustify,
  align: PropsFlexAlign,
  self: PropsFlexSelf,
  wrap: PropsBaseBoolean,
  flexWrap: PropsBaseBoolean,
  scroll: PropsBaseBoolean
}
function getWatchElemSizeChange(elem: HTMLElement, isWrap: FlexWatchElemSizeChange) {
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(() => {
      isWrap.widthWrap = elem.clientWidth < elem.scrollWidth
      isWrap.heigthWrap = elem.clientHeight < elem.scrollHeight
    })
  })
  return resizeObserver
}
export const useFlexMixins = function (
  props: any, classVal: any,
  styleVal: any,
  _ref: Ref<any>,
  judgeObjClassName: ObjStr = { flex: '' }) {
  var isWrap = ref<FlexWatchElemSizeChange>({ widthWrap: false, heigthWrap: false })
    , resizeObserver: ResizeObserver | undefined, isInitResizeObserver: boolean
  watch(() => props.flex, (v) => {
    var objKey = judgeObjClassName.flex, key = ''
    if (objKey) {
      classVal[objKey] = false
    }
    if (v) {
      var key = useCssName(v === 'col' ? 'col' : 'row')
      classVal[key] = true
    }
    judgeObjClassName.flex = key
  }, { immediate: true })
  watch(() => props.flexWrap, (v) => {
    classVal[useCssName('flex--wrap')] = v
  })
  watch(() => props.scroll, (v: any) => {
    v = v === true ? 'auto' : (v || 'hidden')
    styleVal.overflow = v
  }, { immediate: true })
  watch(() => ({ basis: props?.basis, auto: props?.basis ? undefined : props?.auto }), ({ basis, auto }) => {
    styleVal.flexBasis = basis ? useCssStyle(basis) : 0
    styleVal.flexGrow = basis ? undefined : (auto || 1)
  }, { immediate: true })
  watch(() => props?.left, (v) => {
    styleVal.marginLeft = useCssStyle(v)
  }, { immediate: true })
  watch(() => props?.right, (v) => {
    styleVal.marginRight = useCssStyle(v)
  }, { immediate: true })
  watch(() => props?.order, (v) => {
    styleVal.order = v || undefined
  }, { immediate: true })
  watch(() => _ref.value, (v: HTMLElement) => {
    resizeObserver = getWatchElemSizeChange(v, isWrap.value)
    if (props.wrap) {
      resizeObserver.observe(v)
      isInitResizeObserver = true
    }
  })
  watch(() => props.wrap, (v: boolean) => {
    if (resizeObserver) {
      if (v) {
        isInitResizeObserver || resizeObserver.observe(_ref.value)
      } else {
        isInitResizeObserver && resizeObserver.unobserve(_ref.value)
        isInitResizeObserver = false
      }
    }
    classVal[useCssName('wrap')] = v
  }, { immediate: true })
  useCssClassAdd(props, 'justify', classVal, judgeObjClassName)
  useCssClassAdd(props, 'align', classVal, judgeObjClassName)
  useCssClassAdd(props, 'self', classVal, judgeObjClassName)
}