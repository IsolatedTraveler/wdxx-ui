import "@vue/runtime-core"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZBtn: typeof import("../packages/z-ui")["ZBtn"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}