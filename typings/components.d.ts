import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-ui")["ZBtnGroup"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}