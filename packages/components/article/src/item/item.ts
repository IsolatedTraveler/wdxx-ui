import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseAny,  PropsBaseBoolean,  PropsBaseNum,  PropsBaseObject, PropsBaseString } from "@ui/props";
import {  EventChange, EventUpdate, EventUpdateIndex } from "@ui/vars";
export const articleItemProps = propsBuildS({
  data: PropsBaseObject,
  com: PropsBaseAny,
  index: PropsBaseNum,
  modelValue: PropsBaseString,
  disabled: PropsBaseBoolean
})
export const articleItemEmits = {
  [EventUpdate]:(v: string)=>true,
  [EventUpdateIndex]:(v: number)=>true,
  [EventChange]:()=>true,
}
export type ArticleItemProps = ExtractPropTypes<typeof articleItemProps>
export type ArticleItemEmits = typeof articleItemEmits