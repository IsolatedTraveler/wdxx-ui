import { PropsFlex, PropsBaseBoolean, PropsBasePositiveInteger, PropsBasePx, PropsFlexAlign, PropsFlexJustify, PropsFlexSelf } from "@ui/props";
import { Ref, watch, ref } from "vue";
import { getFlexStylePx, setCss } from "../use-css/flex";
import { FlexWatchElemSizeChange } from "@ui/vars/type/flex";
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
  flexWrap: PropsBaseBoolean
}
function setSingleClass(props: any, key: string, classVal: any, obj: any, def: string = '') {
  watch(() => props?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = setCss(key + '--' + (v == true ? def : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}
function getWatchElemSizeChange(elem: HTMLElement, isWrap: FlexWatchElemSizeChange) {
  const resizeObserver = new ResizeObserver(entries => {
    entries.forEach(() => {
      isWrap.widthWrap = elem.clientWidth < elem.scrollWidth
      isWrap.heigthWrap = elem.clientHeight < elem.scrollHeight
      console.log(elem, isWrap)
    })
  })
  return resizeObserver
}
export const useFlexMixins = function (props: any, classVal: any, styleVal: any, _ref: Ref<any>) {
  var obj = { flex: '' }, isWrap = ref<FlexWatchElemSizeChange>({ widthWrap: false, heigthWrap: false })
    , resizeObserver: ResizeObserver | undefined, isInitResizeObserver: boolean
  watch(() => props.flex, (v) => {
    var objKey = obj.flex, key = ''
    if (objKey) {
      classVal[objKey] = false
    }
    if (v) {
      var key = setCss(v === 'col' ? 'col' : 'row')
      classVal[key] = true
    }
    obj.flex = key
  }, { immediate: true })
  watch(() => props.flexWrap, (v) => {
    classVal[setCss('flex--wrap')] = v
  })
  watch(() => ({ basis: props?.basis, auto: props?.basis ? undefined : props?.auto }), ({ basis, auto }) => {
    styleVal.flexBasis = auto ? 0 : getFlexStylePx(basis)
    styleVal.flexGrow = auto ? auto : undefined
  }, { immediate: true })
  watch(() => props?.left, (v) => {
    styleVal.marginLeft = getFlexStylePx(v)
  }, { immediate: true })
  watch(() => props?.right, (v) => {
    styleVal.marginRight = getFlexStylePx(v)
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
    classVal[setCss('wrap')] = v
  }, { immediate: true })
  setSingleClass(props, 'justify', classVal, obj)
  setSingleClass(props, 'align', classVal, obj)
  setSingleClass(props, 'self', classVal, obj)
}