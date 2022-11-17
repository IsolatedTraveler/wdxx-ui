// GlobalComponents for Volar
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtCheckBox: typeof import("wdxx-ui")["JtCheckBox"];
    JtButton: typeof import("wdxx-ui")["JtButton"];
  }
  interface ComponentCustomProperties {
    // $message: typeof import('wdxx-ui')['ElMessage']
  }
}
export {};
