import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZIcon: typeof import("../packages/z-ui")["ZIcon"];
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
    ZBtnGroup: typeof import("../packages/z-ui")["ZBtnGroup"];
    ZForm: typeof import("../packages/z-ui")["ZForm"];
  }
  interface ComponentCustomProperties {
    