import { ObjTrue } from "@ui/vars";
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
  var classVal: ObjTrue = {
    [useCssName(module)]: true
  }, styleVal: CSSProperties = {}, _class = ref(classVal), _style = ref(styleVal),
    judgeObjClassName: ObjTrue = {}
  cssClass.forEach(k => {
    useCssClass(props, k, classVal, judgeObjClassName)
  })
  classAdd.forEach(k => {
    useCssClassAdd(props, k, classAdd, judgeObjClassName)
  })
  return { _class, _style, classVal, styleVal, judgeObjClassName }
}