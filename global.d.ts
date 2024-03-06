declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZFlex: typeof import("z-uis")["ZFlex"];
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZMedia: typeof import("z-uis")["ZMedia"];
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZCallKit: typeof import("z-uis")["ZCallKit"];
    ZForm: typeof import("z-uis")["ZForm"];
    ZFormItem: typeof import("z-uis")["ZFormItem"];
    ZInput: typeof import("z-uis")["ZInput"];
    ZSelect: typeof import("z-uis")["ZSelect"];
    ZTree: typeof import("z-uis")["ZTree"];
    ZTable: typeof import("z-uis")["ZTable"];
    ZCode: typeof import("z-uis")["ZCode"];
    ZPop: typeof import("z-uis")["ZPop"];
    ZScroll: typeof import("z-uis")["ZScroll"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}