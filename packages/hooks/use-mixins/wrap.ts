import { PropsBaseBoolean } from "@ui/props";
import { watch } from "vue";
import { setCss } from "../use-css/flex";
import { useInjectWrap } from "../use-inject";
export const propsWrapMixins = {
  wrap: PropsBaseBoolean
}
export const useWrapMixins = function (props: any, classVal: any) {
  watch(() => props.wrap, (v) => {
    var key = setCss('wrap')
    classVal[key] = v
  }, { immediate: true })
  useInjectWrap(props)
}