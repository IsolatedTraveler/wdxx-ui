import { useAlginBuildProp, useStyleBuildProp } from "@ui/hooks";
import { ExtractPropTypes, PropType } from "vue";
export const thProps = {
  minWidth: useStyleBuildProp('min-width'),
  maxWidth: useStyleBuildProp('max-width'),
  width: useStyleBuildProp('width'),
  name: String as PropType<string>,
  label: [String, Number] as PropType<string | number>,
  class: String as PropType<string>,
  tdClass: String as PropType<string>,
  thClass: String as PropType<string>,
  align: useAlginBuildProp(),
  tdAlign: useAlginBuildProp('td-align'),
  thAlign: useAlginBuildProp('th-align'),
  cs: Boolean as PropType<boolean>
}
export type ThProps = ExtractPropTypes<typeof thProps>