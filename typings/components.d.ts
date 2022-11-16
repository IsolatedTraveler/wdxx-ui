import '@vue/runtime-core'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    JtCheckBox: typeof import('../packages/ui')['ElButton']
    JtButton: typeof import('../packages/ui')['ElButton']
    JtButtonGroup: typeof import('../packages/ui')['JtCheckbox']
  }
  interface ComponentCustomProperties {
  }
}
export {}