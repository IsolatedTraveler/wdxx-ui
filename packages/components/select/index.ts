import { withInstall, withNoopInstall } from '@ui/utils'
import Select from './src/select.vue'
import SelectTable from './src/select-table.vue'
export const ZSelect = withInstall(Select, {SelectTable})
export const ZSelectTable = withNoopInstall(SelectTable)
export * from './src/instance'
export default ZSelect