import { ObjStr, ObjTrue } from "@ui/vars"
import { watch } from "vue"
import { setCss } from "./flex"
export default function(props:any, obj: ObjStr, classVal: ObjTrue) {
  watch(() => props.value?.group, (v, o) => {
    if (o) {
      classVal[obj.group] = false
    }
    if (v) {
      obj.group = setCss('group-' + v)
      classVal[obj.group] = true
    }
  }, {immediate: true})
}