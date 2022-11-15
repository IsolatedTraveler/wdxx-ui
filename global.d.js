// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ElAffix: typeof import('ui')['ElAffix']
  }
  interface ComponentCustomProperties {
    $message: typeof import('ui')['ElMessage']
  }
}
export {}
