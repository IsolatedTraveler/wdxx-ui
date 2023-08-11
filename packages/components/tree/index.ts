import { withInstall } from '@ui/utils'
import Tree from './src/tree.vue'
export const ZTree = withInstall(Tree)
export * from './src/tree'
export type { TreeInstance } from './src/instance'
export default ZTree