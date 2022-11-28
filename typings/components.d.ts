import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-ui")["ZBtnGroup"];
    ZSelect: typeof import("../packages/z-ui")["ZSelect"];
    ZSelectTable: typeof import("../packages/z-ui")["ZSelectTable"];
    ZTable: typeof import("../packages/z-ui")["ZTable"];
    ZTh: typeof import("../packages/z-ui")["ZTh"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}