import vue from "@vitejs/plugin-vue"
import DefineOptions from 'unplugin-vue-define-options/vite'
import dts from 'vite-plugin-dts'
import { esUrlSrc, libUrlSrc, tsConfigFilePath } from "./var"
export default [
  vue(),
  DefineOptions(),
  dts({
    entryRoot: 'src',
    tsConfigFilePath
  })
]