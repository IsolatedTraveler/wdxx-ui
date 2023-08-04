import { withInstall, withNoopInstall } from '@ui/utils'
import TreeItem from './src/tree-item.vue'
import Tree from './src/tree.vue'
export const ZTree = withInstall(Tree, {TreeItem})
export const ZTreeItem = withNoopInstall(TreeItem)
export * from './src/tree'
export type {TreeInstance, TreeItemInstance} from './src/instance'
export default ZTree