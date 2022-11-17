import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtButton: typeof import("../packages/ui")["JtButton"];
    JtButtonGroup: typeof import("../packages/ui")["JtButtonGroup"];
    JtCheckBox: typeof import("../packages/ui")["JtCheckBox"];
    JtCheckBoxGroup: typeof import("../packages/ui")["JtCheckBoxGroup"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}