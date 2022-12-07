import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-ui")["ZBtnGroup"];
    ZIcon: typeof import("../packages/z-ui")["ZIcon"];
    ZSelect: typeof import("../packages/z-ui")["ZSelect"];
    ZTable: typeof import("../packages/z-ui")["ZTable"];
    ZTh: typeof import("../packages/z-ui")["ZTh"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}