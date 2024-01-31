import { PropsBaseState } from "@ui/props";
import { useCssClass } from "../use-css/class";
import { ObjStr } from "@ui/vars";
export const propsStateMixins = {
  state: PropsBaseState
}
export const useStateMixins = function (props: any, classVal: any, judgeObjClassName: ObjStr = {}) {
  useCssClass(props, 'state', classVal, judgeObjClassName)
}