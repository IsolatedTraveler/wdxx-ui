export * from "@ui/components";
import { Plugin } from "vue";
import installer from './defaults'
export const install = installer.install
export const version = installer.version
export default installer as Plugin