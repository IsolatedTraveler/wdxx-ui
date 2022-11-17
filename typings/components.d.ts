import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtButton: typeof import("../packages/ui")["JtButton"];
    JtCheckBox: typeof import("../packages/ui")["JtCheckBox"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}