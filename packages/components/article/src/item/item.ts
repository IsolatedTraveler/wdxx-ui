import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseAny, PropsBaseBoolean, PropsBaseNum, PropsBaseObject, PropsBaseString } from "@ui/props";
import {  EventUpdateIndex } from "@ui/vars";
export const articleItemProps = propsBuildS({
  data: PropsBaseObject,
  com: PropsBaseAny,
  index: PropsBaseNum,
  modelValue: PropsBaseString,
  disabled: PropsBaseBoolean,
  next: PropsBaseAny,
  height: PropsBaseNum
})
export const articleItemEmits = {
  [EventUpdateIndex]: (v: number) => true
}
export type ArticleItemProps = ExtractPropTypes<typeof articleItemProps>
export type ArticleItemEmits = typeof articleItemEmits