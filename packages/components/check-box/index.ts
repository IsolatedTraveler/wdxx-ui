import { withInstall, withNoopInstall } from "@ui/utils";
import checkBox from "./src/check-box.vue";
import checkBoxGroup from "./src/check-box-group.vue";
export const JtCheckBox = withInstall(checkBox, {
  checkBoxGroup
})
export const JtCheckBoxGroup = withNoopInstall(checkBoxGroup)
