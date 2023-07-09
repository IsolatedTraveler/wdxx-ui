import { withInstall, withNoopInstall } from '@ui/utils'
import Flex from './src/flex.vue'
import FlexAuto from './src/flex-auto.vue'
export const ZFlex = withInstall(Flex, {FlexAuto})
export const ZFlexAuto = withNoopInstall(FlexAuto)
export * from './src/instance'
export default ZFlex