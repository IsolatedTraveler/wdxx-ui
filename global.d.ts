declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZForm: typeof import("z-uis")["ZForm"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}