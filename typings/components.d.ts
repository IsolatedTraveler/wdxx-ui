import "@vue/runtime-core";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JtCheckBox: typeof import("../packages/ui")["JtCheckBox"];
    JtButton: typeof import("../packages/ui")["JtButton"];
  }
  interface ComponentCustomProperties {}
}
export {};
