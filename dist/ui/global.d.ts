// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElAffix: typeof import('wdxx-ui')['ElAffix']
  }
  interface ComponentCustomProperties {
    $message: typeof import('wdxx-ui')['ElMessage']
  }
}
export {}
