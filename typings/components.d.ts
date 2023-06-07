import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-ui")["ZBtnGroup"];
    ZIcon: typeof import("../packages/z-ui")["ZIcon"];
    ZForm: typeof import("../packages/z-ui")["ZForm"];
    ZTable: typeof import("../packages/z-ui")["ZTable"];
    ZTh: typeof import("../packages/z-ui")["ZTh"];
    ZPage: typeof import("../packages/z-ui")["ZPage"];
  }
  interface ComponentCustomProperties {

  }
}
export { }