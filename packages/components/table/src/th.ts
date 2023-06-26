import { useAlginBuildProp, useFixedProp, useStyleBuildProp } from "@ui/hooks";
import { ThType } from "@ui/vars";
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
  fixed: useFixedProp,
  type: String as PropType<ThType>
}
export type ThProps = ExtractPropTypes<typeof thProps>