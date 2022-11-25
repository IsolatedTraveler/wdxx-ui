declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZTable: typeof import("z-uis")["ZTable"];
    ZTh: typeof import("z-uis")["ZTh"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}