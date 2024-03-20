import { ObjStr, ObjTrue } from "@ui/vars";
import { CSSProperties, ref } from "vue"
import { useCssName } from "./name";
import { useCssClass, useCssClassAdd } from "./class";
interface UseCssInit {
  cssClass?: string[]
  classAdd?: string[]
}
export function useCssInit(props: any, module: string, {
  cssClass = [],
  classAdd = []
} = {} as UseCssInit) {
  var _style = ref({} as CSSProperties), styleVal = _style.value, _class = ref({
    [useCssName(module)]: true
  } as ObjTrue), classVal = _class.value,
    judgeObjClassName: ObjStr = {}
  cssClass.forEach(k => {
    useCssClass(props, k, classVal, judgeObjClassName)
  })
  classAdd.forEach(k => {
    useCssClassAdd(props, k, classVal, judgeObjClassName, module)
  })
  return { _class, _style, classVal, styleVal, judgeObjClassName }
}