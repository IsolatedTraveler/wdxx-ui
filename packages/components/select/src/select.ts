import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import {  } from "@ui/props";
export const selectProps = propsBuildS({
})
export const selectEmits = {
}
export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = typeof selectEmits