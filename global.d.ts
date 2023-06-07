declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("z-uis")["ZBtn"];
    ZBtnGroup: typeof import("z-uis")["ZBtnGroup"];
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZForm: typeof import("z-uis")["ZForm"];
    ZTable: typeof import("z-uis")["ZTable"];
    ZTh: typeof import("z-uis")["ZTh"];
    ZPage: typeof import("z-uis")["ZPage"];
  }
  interface ComponentCustomProperties {

  }
}
export { }