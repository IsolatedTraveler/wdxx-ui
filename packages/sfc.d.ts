
declare module '*.vue' {
  import type {DefineComponent} from '@vue/runtime-core'
  const Component: DefineComponent<{}, any>
  export default Component
}