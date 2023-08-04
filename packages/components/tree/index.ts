import { withInstall, withNoopInstall } from '@ui/utils'
import BtnGroup from './src/btn-group.vue'
import Tree from './src/tree.vue'
export const ZTree = withInstall(Tree, {BtnGroup})
export const ZBtnGroup = withNoopInstall(BtnGroup)
export * from './src/tree'
export type {TreeInstance, BtnGroupInstance} from './src/instance'
export default ZTree