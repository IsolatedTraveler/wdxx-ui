import { PropsFlex, PropsBaseBoolean, PropsBasePositiveInteger, PropsBasePx, PropsFlexAlign, PropsFlexJustify, PropsFlexSelf } from "@ui/props";
import { watch } from "vue";
import { getFlexStylePx, setCss } from "../use-css/flex";
import { useWrapMixins } from "./wrap";
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
  wrap: PropsBaseBoolean
}
function setSingleClass(props: any, key: string, classVal: any, obj: any) {
  watch(() => props?.[key], (v, o) => {
    if (o) {
      classVal[obj[key]] = false
    }
    if (v) {
      obj[key] = setCss(key + (key ? '--' : '') + (v === true ? key : v))
      classVal[obj[key]] = true
    }
  }, { immediate: true })
}
export const useFlexMixins = function (props: any, classVal: any, styleVal: any) {
  var obj = { flex: '' }
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
  setSingleClass(props, 'justify', classVal, obj)
  setSingleClass(props, 'align', classVal, obj)
  setSingleClass(props, 'self', classVal, obj)
  useWrapMixins(props, classVal)
}