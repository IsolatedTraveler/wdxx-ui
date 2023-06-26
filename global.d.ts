declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}