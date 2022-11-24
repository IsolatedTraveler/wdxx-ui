import { withInstall, withNoopInstall } from '@ui/utils'
import Table from './table.vue'
import Th from './th.vue'
export const ZTable = withInstall(Table, {Th})
export const ZTh = withNoopInstall(Th)
export * from './src/instance'
export default ZTable