import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JtButton: typeof import('../packages/ui')['ElButton']
    JtButtonGroup: typeof import('../packages/ui')['ElButtonGroup']
  }
  interface ComponentCustomProperties {
  }
}
export {}