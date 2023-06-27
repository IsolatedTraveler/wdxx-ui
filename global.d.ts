declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ZIcon: typeof import("z-uis")["ZIcon"];
    ZBtn1: typeof import("z-uis")["ZBtn1"];
    ZBtn1Group: typeof import("z-uis")["ZBtn1Group"];
    ZForm: typeof import("z-uis")["ZForm"];
  }
  interface ComponentCustomProperties {
    
  }
}
export {}