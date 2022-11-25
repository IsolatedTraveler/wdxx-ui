import { withInstall, withNoopInstall } from '@ui/utils'
import Btn from './src/btn.vue'
import BtnGroup from './src/btn-group.vue'
export const ZBtn = withInstall(Btn, {BtnGroup})
export const ZBtnGroup = withNoopInstall(BtnGroup)
export * from './src/instance'
export default ZBtn