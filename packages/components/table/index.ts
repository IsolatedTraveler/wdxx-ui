import { withInstall } from '@ui/utils'
import Table from './src/table.vue'
export const ZTable = withInstall(Table)
export * from './src/table'
export type {TableInstance} from './src/instance'
export default ZTable