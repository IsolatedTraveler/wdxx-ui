import { ExtractPropTypes } from "vue";
import { propsBuildS } from "@ui/hooks";
import {  } from "@ui/props";
export const formProps = propsBuildS({
})
export const formEmits = {
}
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormEmits = typeof formEmits