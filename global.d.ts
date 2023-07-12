declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZFlex: typeof import("z-uis")["ZFlex"];
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZMedia: typeof import("z-uis")["ZMedia"];
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZCallKit: typeof import("z-uis")["ZCallKit"];
    ZForm: typeof import("z-uis")["ZForm"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}