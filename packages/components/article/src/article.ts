import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import {  } from "@ui/props";
export const articleProps = propsBuildS({
})
export const articleEmits = {
}
export type ArticleProps = ExtractPropTypes<typeof articleProps>
export type ArticleEmits = typeof articleEmits