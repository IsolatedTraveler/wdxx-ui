declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtButton: typeof import("wdxx-ui")["JtButton"];
    JtCheckBox: typeof import("wdxx-ui")["JtCheckBox"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}