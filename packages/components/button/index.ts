import { withInstall, withNoopInstall } from "@ui/utils";
import Button from "./src/button.vue";
import ButtonGroup from "./src/button-group.vue";
export const JtButton = withInstall(Button, {ButtonGroup})
export const JtButtonGroup = withNoopInstall(ButtonGroup)
export default JtButton;
