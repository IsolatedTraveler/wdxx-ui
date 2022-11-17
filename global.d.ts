declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtButton: typeof import("wdxx-ui")["JtButton"];
    JtButtonGroup: typeof import("wdxx-ui")["JtButtonGroup"];
    JtCheckBox: typeof import("wdxx-ui")["JtCheckBox"];
    JtCheckBoxGroup: typeof import("wdxx-ui")["JtCheckBoxGroup"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}