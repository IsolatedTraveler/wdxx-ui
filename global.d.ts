declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZForm: typeof import("z-uis")["ZForm"];
    ZCallKit: typeof import("z-uis")["ZCallKit"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}