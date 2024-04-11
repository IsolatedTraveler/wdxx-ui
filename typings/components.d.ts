import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-uis")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-uis")["ZBtnGroup"];
    ZIcon: typeof import("../packages/z-uis")["ZIcon"];
    ZForm: typeof import("../packages/z-uis")["ZForm"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}