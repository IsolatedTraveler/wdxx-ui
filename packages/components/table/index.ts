import { withInstall, withNoopInstall } from '@ui/utils'
import Table from './src/table.vue'
import Th from './src/th.vue'
export const ZTable = withInstall(Table, {Th})
export const ZTh = withNoopInstall(Th)
export * from './src/instance'
export default ZTable