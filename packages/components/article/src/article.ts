import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import { PropsBaseAny, PropsBaseArray_Object, PropsBaseNum } from "@ui/props";
export const articleProps = propsBuildS({
  data: PropsBaseArray_Object,
  coms: PropsBaseAny,
  loadNum: PropsBaseNum
}, {loadNum: 5})
export const articleEmits = {
}
export type ArticleProps = ExtractPropTypes<typeof articleProps>
export type ArticleEmits = typeof articleEmits